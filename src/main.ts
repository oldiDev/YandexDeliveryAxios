import axios, { Axios } from "axios";
import constants from ".constants/";
import { ApplicationWithPrepaymentPayload } from "./types";
// constants: like { referral_source  }
class YandexDeliveryController{
  
  client: Axios;
  constructor(
    // params
    // key: process.env.APIKEY
  ){
    this.client = axios.create({
      baseURL: 'https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer AQAAAABbyFZXAAVM1VNZION7A0cqsZ69tYFESYc',
        'Connection': 'keep-alive',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'ru/ru',
        'Accept': '*/*'
     }
    });
  }
  
  ApplicationWithPrepayment( 
      _payload: ApplicationWithPrepaymentPayload
    ){
      
    let data = _payload.data;

    let config = {
      method: 'post',
      url: 'create?request_id='+_payload.request_id
    };

  }
}
export default YandexDeliveryController