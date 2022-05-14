enum currency {
    RUB="RUB"
}
enum city {
    Moscow="Москва"
}
enum country {
    Russia="Россиская Федерация"
}
enum taxiClass {
    courier="courier"
}

enum typeOfPoint {
    source = "source",
    destination = "destination",
    return ="return"
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
interface Address {
    building:string,
    city: city,
    street: string,
    country: country,
    coordinates: Coordinates,
    door_code: string,
    sflat: number,
    sfloor: number,
    porch: string,
    fullname: string,
    visit_order: number
}

type items = Array<item>;
interface ApplicationWithPrepaymentPayload {
      items: items, 
      request_id: string,
      taxi_class: taxiClass,
      comment: string,
      optional_return: false,
      referral_source: string,
      name: string,
      phone: string,
      user_address: Address,
      shop_address: Address,
      type: typeOfPoint,
      pickup_code: string,
}
export { item, items, currency, city, Coordinates,
    ApplicationWithPrepaymentPayload }