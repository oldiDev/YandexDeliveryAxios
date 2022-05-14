import YandexDeliveryController from './main'
import { GetOrderDataResponce } from './types';

test('testing ApplicationWithPrepaymentGetOrderData', () => {
    // if(YandexDeliveryController) test.skip("all good")
    let YandexApi = new YandexDeliveryController({
        key: process.env.APIKEY
    })
    YandexApi.ApplicationWithPrepaymentGetOrderData({
        claim_id: "0ab1c23d4e5678f901g234h45678i01"
    }).then((res: GetOrderDataResponce)=>{
        expect(!!res.code).not.toEqual("not_found") // just example 
        // you can check (res.status value or code or message )
        // depending on the responce type
    })
});
