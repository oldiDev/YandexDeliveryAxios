import axios, { Axios } from "axios";

class YandexDeliveryController{
 client: Axios;
  constructor(
    // params
    // key: process.env.APIKEY
  ){
    this.client = axios.create({
      baseURL: 'https://b2b.taxi.yandex.net/b2b/cargo/integration/v2/claims/',
      timeout: 1000,
      // headers: {'X-Custom-Header': 'foobar'}
    });
  }
  ApplicationWithPrepayment(){
    // use client to create request
  }
}
export default YandexDeliveryController