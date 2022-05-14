enum currency {
    RUB="RUB"
}
enum city {
    Moscow="Moscow"
}
enum country {
    Russia="Russia"
}
enum taxiClass {
    courier="courier"
}
interface Coordinates {
    coordinates_x: number;  //Longitude
    coordinates_y: number; //Latitude
}
interface item {
    title: string;
    cost_currency: currency;
    cost_value: number;
    dropof_point: number;
    pickup_point: number;
    quantity: number;
}
type items = Array<item>;
interface ApplicationWithPrepaymentPayload {  // check create.json file and do the same structure 
      items: items, 
      request_id: string,
      taxi_class: taxiClass,
      comment: string,
      user_name: string,
      user_phone_number: string,
      optional_return: false,
      referral_source: string,
      building: string, 
      city: city,
      country: country,
      door_code:string,
      sflat:number,
      sfloor:number,
      porch: string,
      pims_shop_coordinates: Coordinates, 
      user_coordinates: Coordinates, 
}

interface Address {
    // create interface for address
}
interface CreateResponce {
    // create responce interface if you want 
}
export { item, items, currency, city, Coordinates,
    ApplicationWithPrepaymentPayload }