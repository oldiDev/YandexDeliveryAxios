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
      baseURL: 'https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/',
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
      this.client.post(`/create?request_id=${_payload.request_id}`).then((response) => {
          _resolve(JSON.stringify(response.data))
          //get claim_id = data.id
        })
      .catch((error) => {
        _reject(error);
      });
    })
  }
}
export default YandexDeliveryController