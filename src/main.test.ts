import YandexDeliveryController from './main'
// import { GetOrderDataResponce } from './types';

test('testing ApplicationWithPrepaymentGetOrderData', () => {
    // if(YandexDeliveryController) test.skip("all good")
    let YandexApi = new YandexDeliveryController();
    YandexApi.ApplicationWithPrepaymentGetOrderData({
        claim_id: "777babc7374548eba8681f759fdac2cc"
    }).then((res: any)=>{
        console.log(res)
        expect(!!res.code).not.toEqual("not_found") // just example 
        // you can check (res.status value or code or message )
        // depending on the responce type
    })
});