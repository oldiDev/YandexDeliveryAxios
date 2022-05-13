import axios, { Axios } from "axios";

type ItemsArr ={
    title: string;
    cost_currency: "RUB";
    cost_value: string;
    droppof_point: number;
    pickup_point: number;
    quantity: number;
}[]

type Coordinates = {
  coordinates_x: number;  //Longitude
  coordinates_y: number; //Latitude
}


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
        'Accept': '*/*'
     }
    });
  }
  
  ApplicationWithPrepayment( 
      items: ItemsArr, 
      request_id: string,
      taxi_class: "courier",
      comment: string,
      user_name: string,
      user_phone_number: string,
      optional_return: false,
      referral_source: "pims_app",
      building: string, 
      city: "Moscow",
      country: "Russia",
      door_code:string,
      sflat:number,
      sfloor:number,
      porch: string,
      pims_shop_coordinates: Coordinates, 
      user_coordinates: Coordinates, 
    ){
    // use client to create request
  }
}
export default YandexDeliveryController