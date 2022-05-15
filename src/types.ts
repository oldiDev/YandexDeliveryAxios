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
    courier = "courier",
    express = "express",
    cargo = "cargo"
}
enum error_code {
address_not_found = "address_not_found",
address_too_far = "address_too_far",
apply_change_error = "apply_change_error",
bad_request = "bad_request",
cancel_error = "cancel_error",
cargo_payments_update_error = "cargo_payments_update_error",
change_destination_error = "change_destination_error",
claim_is_outdated = "claim_is_outdated",
claim_not_ready = "claim_not_ready",
claim_point_not_ready = "claim_point_not_ready",
confirmation_code_required = "confirmation_code_required",
cost_mismatch = "cost_mismatch",
country_phone_code_not_supported = "country_phone_code_not_supported",
currency_mismatch  = "currency_mismatch",
custom_context_in_bad_format = "custom_context_in_bad_format",
db_error = "db_error",
delay_too_long = "delay_too_long",
double_request = "double_request",
due_in_past = "due_in_past",
duplicate_id = "duplicate_id",
duplicate_source_point = "duplicate_source_point",
esignature_error = "esignature_error",
esignature_too_many_requests = "esignature_too_many_requests",
external_order_id_not_allowed = "external_order_id_not_allowed",
free_cancel_is_unavailable = "free_cancel_is_unavailable",
inappropriate_point = "inappropriate_point",
inappropriate_status = "inappropriate_status",
invalid_cursor = "invalid_cursor",
invalid_delivery_interval ="invalid_delivery_interval",
invalid_destination_point = "invalid_destination_point",
invalid_destination_point_phone = "invalid_destination_point_phone",
invalid_emergency_contact_phone = "invalid_emergency_contact_phone",
invalid_fiscalization_status = "invalid_fiscalization_status",
invalid_item_destination_point = "invalid_item_destination_point",
invalid_item_source_point = "invalid_item_source_point",
invalid_payment_mode = "invalid_payment_mode",
invalid_payment_subject = "invalid_payment_subject",
invalid_phone_incorrect_symbol = "invalid_phone_incorrect_symbol",
invalid_phone_must_start_plus_symbol = "invalid_phone_must_start_plus_symbol",
invalid_phone_size_incorrect = "invalid_phone_size_incorrect",
invalid_point_phone = "invalid_point_phone",
invalid_post_payment = "invalid_post_payment",
invalid_return_point_phone = "invalid_return_point_phone",
invalid_source_point = "invalid_source_point",
invalid_source_point_phone = "invalid_source_point_phone",
invalid_time_intervals = "invalid_time_intervals",
item_destination_point_not_found = "item_destination_point_not_found",
item_has_no_fiscalization = "item_has_no_fiscalization",
item_source_point_not_found = "item_source_point_not_found",
items_without_parameters_forbidden = "items_without_parameters_forbidden",
no_input_point = "no_input_point",
no_performer_info = "no_performer_info",
no_required_email_for_point = "no_required_email_for_point",
not_allowed = "not_allowed",
not_found = "not_found",
offer_expired = "offer_expired",
old_lookup_version = "old_lookup_version",
old_version = "old_version",
order_creation_conflict = "order_creation_conflict",
parse_error = "parse_error",
payment_and_skip_sms_conflict = "payment_and_skip_sms_conflict",
payment_on_delivery_disabled = "payment_on_delivery_disabled",
payment_on_delivery_invalid_request = "payment_on_delivery_invalid_request",
payment_on_delivery_invalid_token = "payment_on_delivery_invalid_token",
payment_required = "payment_required",
payment_sms_send_failed = "payment_sms_send_failed",
payment_terminal_error = "payment_terminal_error",
pdf_failure = "pdf_failure",
point_not_found = "point_not_found",
report_generating_disabled = "report_generating_disabled",
report_intervals_validation_error = "report_intervals_validation_error",
report_not_found = "report_not_found",
sdd_items_without_parameters_forbidden = "sdd_items_without_parameters_forbidden",
sdd_client_requirements_forbidden = "sdd_client_requirements_forbidden",
send_email_error = "send_email_error",
solver_failed = "solver_failed",
source_point_missing = "source_point_missing",
state_mismatch = "state_mismatch",
state_transition_forbidden = "state_transition_forbidden",
tariff_error = "tariff_error",
task_not_found = "task_not_found",
too_few_points = "too_few_points",
too_much_claim_edits = "too_much_claim_edits",
unknown_performer_position = "unknown_performer_position",
unknown_zone = "unknown_zone",
unsupported_points_count = "unsupported_points_count",
use_waybills_admin_page = "use_waybills_admin_page",
validation_error = "validation_error",
wrong_corp_client_id = "wrong_corp_client_id",
wrong_pickup_code_format = "wrong_pickup_code_format",
wrong_pickup_code_usage = "wrong_pickup_code_usage",
wrong_taxi_order_id = "wrong_taxi_order_id",
terminal_status = "terminal_status"
}
enum status {
    new = "new",
    estimating = "estimating",
    estimating_failed = "estimating_failed",
    ready_for_approval = "ready_for_approval",
    accepted = "accepted",
    performer_lookup = "performer_lookup",
    performer_draft = "performer_draft",
    performer_found = "performer_found",
    performer_not_found = "performer_not_found",
    pickup_arrived = "pickup_arrived",
    ready_for_pickup_confirmation = "ready_for_pickup_confirmation",
    pickuped = "pickuped",
    delivery_arrived = "delivery_arrived",
    ready_for_delivery_confirmation = "ready_for_delivery_confirmation",
    pay_waiting = "pay_waiting",
    delivered = "delivered",
    delivered_finish = "delivered_finish",
    returning = "returning",
    return_arrived = "return_arrived",
    ready_for_return_confirmation = "ready_for_return_confirmation",
    returned = "returned",
    returned_finish = "returned_finish",
    failed = "failed",
    cancelled = "cancelled",
    cancelled_with_payment = "cancelled_with_payment",
    cancelled_by_taxi = "cancelled_by_taxi",
    cancelled_with_items_on_hands = "cancelled_with_items_on_hands"
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
interface offer {
    offer_id?: string, // Offer ID
    price?: string, // Price Decimal(19, 4)
    price_raw?: number, //  (deprecated) Offer price in the currency specified in the contract
    valid_until?: string // (date-time)
                        // The time until which the offer from Taxi is valid.
                        // The absence of a value indicates the absence of restrictions on the lifetime of the offer.
}
interface currency_rules {
    code: string, // Three-digit code of the currency in which the calculation is carried out
    sign?: string, // Currency symbol
    template: string, // Template
    text: string, // Abbreviated name of the currency
} 
interface pricing {
    currency?:string, // Three-digit code of the currency in which the calculation is carried out
    currency_rules?: currency_rules, // Currency display rules
    final_price?:string, // Price Decimal(19, 4)
    final_pricing_calc_id?: string,
    offer?: offer, // Offer from Taxi (valid for some time)
    
    
}

interface matched_cars {
    taxi_class:taxiClass,
    door_to_door:boolean
}
type matched_car = Array<matched_cars>

interface callback_properties{
    callback_url: string // The URL that will be called when changing the status of an order.
                         // This mechanism has been deprecated and the v1/claims/journal operation should be used instead.
}

interface carrier_info{
    address?: string, // Carrier address
    inn?: string, // Carrier inn
    name?: string // Carrier name
}
interface error_messages{ // Human-understandable error information
    code?: string, // Machine friendly error code
    message?: string, // Human-readable localized error text
    source?: string // The source of the warning. 
                    // client_requirements - the warning is related to client requirements; 
                    // taxi_requirements - warning related to Taxi requirements;
                    // route_points - warning associated with transmitted addresses;
}
type error_messages_array = Array<error_messages>;

interface performer_info {
    car_color?: string, // Car color
    car_color_hex?: string, // Car color in hex
    car_model?: string, // Car model
    car_number?: string, // Car number
    courier_name: string, // Name of the courier delivering the package
    legal_name: string, // Information about the legal entity that carries out the delivery
    park_clid?: string, 
    transport_type?: string // Executor transport type
}

interface AWithPtGetFullOrderData{ // Application Information
        available_cancel_state?: string, // (deprecated) Sign of the possibility of paid/free cancellation. 
                                         // The mechanism is deprecated, use the cancel_state field of the claim/cancel-info method
        callback_properties?:callback_properties, // (deprecated) Parameters for notifying the client server about a change in the order status.
        carrier_info?:carrier_info, // Carrier Information
        client_requirements?: ClientRequirements //Requirements from the client specified when creating or editing the application
        comment?: string, // General comment on the order
        corp_client_id?: string, // Corporate client ID (from OAuth token) , lenght == 32
        created_ts: string, // Date-time of creation
        current_point_id?: number, // Integer point identifier. 
                                   // Generated on the client side. 
                                   // It is important that this number matches the pickup_point (point A - receiving goods) or droppof_point (point B - issuing goods) specified for some item
        due?: string, // Create an order for a specific time (for example, an order for tomorrow). 
                      // Without specifying this field, the search will be carried out in the near future.
        emergency_contact?: Contact, // Contact person information with phone number
        error_messages?: error_messages_array, // List of error messages
        eta?: number, // Expected lead time in minutes
        id: string, // Application ID received at the stage of creating an application
        items?: items, // Enumeration of item names for shipment
        matched_cars?: [matched_car], // Artist information (array, currently always 1 element)
        optional_return?: boolean, // Return of goods is not required in case of cancellation of the order.
                                   // Possible values:
                                   // true (the courier keeps the goods)
                                   // false (default, item must be returned)
        performer_info?: performer_info, // Information about the courier
        pricing?: pricing, // Information about the price of the application
        revision: number, // (int64)
        route_id?: string, // Identifier of the route within which the order is delivered. 
                           // If several of your orders are delivered by one courier, they will have the same route_id (Relevant only for the "During the day" delivery mode)
        route_points?: routePointsArray, // Waypoint Information
        same_day_data?: same_day_data, // Additional information for requests "During the day"
        shipping_document?: string, // Accompanying documents
        skip_act?: boolean, // Don't show act
        skip_client_notify?: boolean, // Do not send SMS notifications to the sender / recipient when the courier is sent to him.
                                      // Default: false (send notification)
        skip_door_to_door?: boolean, // Refusal to deliver to the door (turn off the "Door to door" option).
                                     // Possible values:
                                     // true (the courier will deliver the order only to the street, to the entrance)
                                     // false (default, door to door delivery)
       
        skip_emergency_notify?: boolean, // Do not send emergency notifications to a contact
                                         // Default: false (send notifications)
        status?: status, // Application status
        taxi_offer?:offer // Offer from Taxi (valid for some time). This mechanism is deprecated, use pricing.offer
        updated_ts?: string, // (date-time) Date-time of last update
        user_request_revision?: string, // The current version of the changes in the application from the user
        version?: number, // version
        warnings?:error_messages_array, //Application Cycle Warnings
        features?: [],
        
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
    cost_currency: currency;//Unit price currency in ISO 4217 format (for declaring value/insurance and/or pay on delivery). Example: RUB
    cost_value: string;//Unit price in cost_currency. For value insurance, please submit the actual shipping price
    dropof_point: number; //Identifier of the point where the goods need to be delivered (different from the identifier in the application).
                             // Can be any number. Must match the route_points[].point_id value of the destination
    extra_id:string; //Item's short unique identifier (order number within the order, usually identical to external_order_id)
    pickup_point: number; //The same with dropof_point, but curier take order from this point
    quantity: number; //Count of items , min - 1
    title: string; //Product unit name
}
type items = Array<item>;

interface Address {
    building: string,  // Number of a home/building
    building_name:string, // building name
    city: city, // current city
    comment: string, // Comment for the courier.
                     // For point A (where to pick up the shipment), use the template: "Delivery from the store <>. Tell the manager that the order is for Yandex.Delivery. Give the order number <> and pick up the parcel. The order was paid for without cash, when transferring the order, you cannot demand money from the recipient delivery."
                     // For points B (where to deliver) in the comment, convey the wishes of the recipient. For example, "the intercom is not working" / "the barrier is closed, call in 10 minutes" / "do not call, the child is sleeping."
    coordinates: [Coordinates],// An array of two real numbers [longitude, latitude]. Order matters! Rounded coordinate values ​​are specified.
    country: country, // current country
    description:string, // Geographic area qualifying shortname to a global match
    door_code: string,// Intercom code
    door_code_extra:string,// Additional instructions for intercoms
    doorbell_name: string, // Name on the doorbell
    // flat: number, // Apartment (DEPRECATED)
    // floor: number, // Floor (DEPRECATED)
    fullname: string, // Full name with indication of the city (Москва, Садовническая набережная, 82с2). It is important to enter the settlement indicating the house number, but without the number of the apartment, entrance, floor
    porch: string, // Porch (can be A,1 end etc.)
    sflat: number, // Current flat
    sfloor: number, // Current floor
    shortname:string // Address within the city as shown on Taximeter (Садовническая набережная, 82с2)
    street: string, // current street
    uri:string // Geo object card uri
}

enum cargo_options {
    auto_courier = "auto_courier",
    thermobag = "thermobag"
}
enum cargo_type{
    van = "van", //small car
    lcv_m = "lcv_m", //medium car
    lcv_l = "lcv_l" //large car
} 
interface ClientRequirements {
    assign_robot: boolean, //rover order ,not need on create order
    cargo_loaders: number, //The number of movers for the freight rate,not need on create order
    cargo_options: [cargo_options], //List of additional tariff options.
    cargo_type:string,//List of additional tariff options.
    pro_courier:boolean, //For special rates
    taxi_class: taxiClass //Taxi class. Possible values: courier, express, cargo
}
interface Contact {
    email?:string // Email is a required parameter for source and return points
    name: string, // Name of contact person
    phone: string, // Contact phone number
    phone_additional_code: string // Extension number for a courier call
}
interface external_order_cost {
    currency: string,
    currency_sign: string,
    value: string
}
enum visit_status{
    pending = "pending",
    arrived = "arrived",
    visited = "visited",
    partial_delivery = "partial_delivery",
    skipped = "skipped"
}
interface RoutePoints {// Description of a point in an order with multipoints
    adress: Address,
    contact: Contact,
    external_order_cost?: external_order_cost, // The cost of an external order linked to a point
    external_order_id?: string, // Order number from the customer's system. Passed for a point with type destination
    id?: number, // (int64) Integer point ID
    leave_under_door?: boolean, // Leave the package at the door
    meet_outside?: boolean, // Meet currier outside near with home
    modifier_age_check?: boolean, // Check documents for the purchase of alcohol/tobacco products
    no_door_call?: boolean, // Dont push on the doorbell
    pickup_code: string, // The code for issuing the parcel to the courier. The courier will need to enter this code to confirm that he will pick up your package.
                         // This requires that your employees at the point of issue have the opportunity to call this code to the courier.
                         // Relevant for a point with type = 'source'. Format: exactly 6 digits | Goods issue code (PVZ)
    return_comment?: string, // Comment on the reasons for the return of the shipment
    return_reasons?: [string], // Reasons for returning a shipment
    point_id: number, // Integer point identifier.
                      // Generated on the client side.
                      // t is important that this number matches the pickup_point (point A - receiving goods) or droppof_point (point B - issuing goods) specified for some item
    skip_confirmation?: boolean, // Skip confirmation via SMS at this point
                                 // Default: false (confirmation required)
    type: typeOfPoint,  //Point type:
                        // source - point of departure where the courier picks up the goods
                        // destination - destination points where the courier delivers the goods
                        // return - goods return point (added automatically and by default coincides with the point of departure, but you can also specify another point)
    visit_order: number // The order of visiting the point (numbering from 1)
    visit_status?: visit_status, // Visit status of this point: 
                    // pending - the point has not been visited yet; 
                    // arrived - the driver arrived at the point;
                    // visited - the driver handed over / picked up the departure at the point; 
                    // partial_delivery - the point was visited, but part of the shipment was not sent; 
                    // skipped - the point is skipped (in case of a return, when the client could not accept the departure)
}
type routePointsArray = Array<RoutePoints>

interface delivery_interval{
    from?: string, // Interval start
    to?: string  // Interval end
}

interface same_day_data{
    delivery_interval?:delivery_interval // Parcel collection and delivery interval
}
interface Create {
    client_requirements: ClientRequirements, //Requirements from the client specified when creating or editing the application
    comment: string, //General comment on the order
    due: string,//Create an order for a specific time (for example, an order for tomorrow). Without specifying this field, the search will be carried out in the near future.
    emergency_contact: Contact, //Contact person information with phone number
    items: items,//Enumeration of item names for shipment
    //optional_return: boolean // Return of goods is not required in case of cancellation of the order.
                             // Possible values:
                             // true (the courier keeps the goods)
                             // false (default, item must be returned)
    referral_source: string, // Request source (you can pass the name of the CMS from which the request is created)
    route_points: routePointsArray, // Waypoint Information , count_of_points >= 2
    same_day_data?: same_day_data, // Additional information for requests "During the day"
    shipping_document?: string, // Accompanying documents
    skip_act?: boolean, // Don't show act
    skip_client_notify?: boolean, // Do not send SMS notifications to the sender / recipient when the courier is sent to him.
                                 // Default: false (send notification)
    skip_door_to_door?: boolean, // Refusal to deliver to the door (turn off the "Door to door" option).
                                // Possible values:
                                // true (the courier will deliver the order only to the street, to the entrance)
                                // false (default, door to door delivery)
    skip_emergency_notify: boolean // Do not send emergency notifications to a contact
                                   // Default: false (send notifications)
}
interface GetInformationAboutOrder {
    claim_id: string,
}
interface PerformerInfo {
    courier_name: string;
}
interface AcceptClaimResponce {
    // add responces 
    code?: string,
    message?: string,
}
interface DeliveryInformation {
    offer_id: string,
    price: string,
    price_raw: number,
}
interface ApplicationWithPrepaymentPayload {
    request_id: string,
    create: Create,
    delivery_info: DeliveryInformation,
    performer_info: PerformerInfo,
    status: string
}
interface GetOrderDataResponce {
    // do responce  types here
    code?: string,
    message?: string,
}
export {
    item, items, currency, city, Coordinates,

    ApplicationWithPrepaymentPayload, AWithPtGetOrderDataType,
    GetInformationAboutOrder,
    AcceptClaimResponce,
    GetOrderDataResponce
}