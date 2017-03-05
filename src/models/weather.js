/**
 * Created by dima on 5.3.17.
 */
import request from 'es6-request';
export default class Weather {

    constructor(city){
        this.city = city;
        this.APPID = '0bcd51d21bed1ac0981c463585602e75';
    }

    currentWeather(){
        request.get("http://api.openweathermap.org/data/2.5/weather")
            .query({
                "q": this.city,
                "APPID": this.APPID
            })
            .then((body) => {
                return body;
            });
    }

}