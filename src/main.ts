import axios, { Axios, AxiosResponse } from "axios";
//import constants from "./constants";
import { AcceptClaimResponce, ApplicationWithPrepaymentPayload, AWithPtGetOrderDataType, GetInformationAboutOrder, GetOrderDataResponce } from "./types";
// constants: like { referral_source  }
import { config } from 'dotenv';
config() // load .env file content

class YandexDeliveryController{
  AWithPtGetOrderData: any;
  client: Axios;
  constructor(
    // params
    _params?: {
      key: string
    }
  ){
    this.client = axios.create({
      baseURL: 'https://b2b.taxi.yandex.net/b2b/cargo/integration/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.APIKEY || _params?.key}`,
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
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
  //get data about order
  ApplicationWithPrepaymentGetOrderData( 
    _payload: GetInformationAboutOrder
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/info?claim_id=${_payload.claim_id }`).then((response:AxiosResponse<GetOrderDataResponce>) => {
          _resolve(JSON.stringify(response.data))
        })
      .catch((error: any) => {
        _reject(error);
      });
    })
  }
  //accept order
  ApplicationWithPrepaymentAcceptOrder( 
    _payload: GetInformationAboutOrder
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/accept?claim_id=${_payload.claim_id}`,{"version":1}).then((response: AxiosResponse<AcceptClaimResponce>) => {
          _resolve(JSON.stringify(response.data))
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
  //cansle order
  ApplicationWithPrepaymentCansleOrder( 
    _payload: GetInformationAboutOrder
  ){
    return new Promise((_resolve, _reject)=>{
      this.client.post(`/v1/claims/cancel?claim_id=${_payload.claim_id }`,{"cancel_state":"free","version":1})
      .then((response: AxiosResponse<AWithPtGetOrderDataType>) => {
          _resolve(JSON.stringify(response.data))
          if(response.status == 200){
            // this.AWithPtGetOrderData = response.data;
            // response.data.
          }
          // you can't asign a param item in typescript
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
}
export default YandexDeliveryController