import axios, { Axios } from "axios";
//import constants from "./constants";
import { ApplicationWithPrepaymentPayload } from "./types";
// constants: like { referral_source  }
import { config } from 'dotenv';
config() // load .env file content

class YandexDeliveryController{
  
  client: Axios;
  constructor(
    // params
    _key?: string
  ){
    this.client = axios.create({
      baseURL: 'https://b2b.taxi.yandex.net/b2b/cargo/integration/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.APIKEY || _key}`,
        'Connection': 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept': '*/*',
        'Accept-Language': 'ru/ru'
     }
    });
  }
  
  ApplicationWithPrepayment( 
      _payload: ApplicationWithPrepaymentPayload
    ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v2/claims/create?request_id=${_payload.request_id}`,_payload.create).then((response) => {
          _resolve(JSON.stringify(response.data))

          _payload.getInformation_getDeliveriPrice_acceptOrder_cansleOrder = response.data.id;
          _payload.delivery_info = response.data.taxi_offer;
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
  //get data about order
  ApplicationWithPrepaymentGetOrderData( 
    _payload: ApplicationWithPrepaymentPayload
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/info?claim_id=${_payload.getInformation_getDeliveriPrice_acceptOrder_cansleOrder }`).then((response) => {
          _resolve(JSON.stringify(response.data))

          _payload.status = response.data.status;

          if(!_payload.delivery_info)
            _payload.delivery_info = response.data.taxi_offer;

        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
  //accept order
  ApplicationWithPrepaymentAcceptOrder( 
    _payload: ApplicationWithPrepaymentPayload
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/accept?claim_id=${_payload.getInformation_getDeliveriPrice_acceptOrder_cansleOrder }`,{"version":1}).then((response) => {
          _resolve(JSON.stringify(response.data))

          _payload.status = response.data.status;

        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
  //cansle order
  ApplicationWithPrepaymentCansleOrder( 
    _payload: ApplicationWithPrepaymentPayload
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/cancel?claim_id=${_payload.getInformation_getDeliveriPrice_acceptOrder_cansleOrder }`,{"cancel_state":"free","version":1}).then((response) => {
          _resolve(JSON.stringify(response.data))

          _payload.status = response.data.status;
          
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
}
export default YandexDeliveryController