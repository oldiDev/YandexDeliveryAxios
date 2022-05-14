enum currency {
    RUB = "RUB"
}
enum city {
    Moscow = "Москва"
}
enum country {
    Russia = "Россиская Федерация"
}
enum taxiClass {
    courier = "courier"
}
enum status {
    cancelled = "cancelled"
}
interface AWithPtGetOrderDataType {
    code?: string,
    message?: string,
    id?: string,
    status?: status,
    version?: 1,
    user_request_revision?: "1", // where we can get them from the app 
    skip_client_notify?: false
}
enum typeOfPoint {
    source = "source",
    destination = "destination",
    return = "return"
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

interface Address {
    building: string,
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

interface ClientRequirements {
    taxi_class: taxiClass
}
interface Contact {
    name: string,
    phone: string
}
interface RoutePoints {
    adress: Address,
    contact: Contact,
    pickup_code: string,
    point_id: number,
    type: typeOfPoint,
    visit_order: number
}
type routePointsArray = Array<RoutePoints>
interface Create {
    client_requirements: ClientRequirements,
    comment: string,
    emergency_contact: Contact,
    items: items,
    route_points: routePointsArray,
    skip_act: boolean,
    skip_client_notify: boolean,
    skip_door_to_door: boolean,
    skip_emergency_notify: boolean
}
interface GetInformationAboutOrder {
    claim_id: string,
}
interface PerformerInfo {
    courier_name: string;
}
interface DeliveryInformation {
    offer_id: string,
    price: string,
    price_raw: number,
}
interface ApplicationWithPrepaymentPayload {
    request_id: string,
    create: Create,
    getInformation_getDeliveriPrice_acceptOrder_cansleOrder: GetInformationAboutOrder,
    delivery_info: DeliveryInformation,
    performer_info: PerformerInfo,
    status: string
}
export {
    item, items, currency, city, Coordinates,
    ApplicationWithPrepaymentPayload, AWithPtGetOrderDataType
}