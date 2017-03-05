/**
 * Created by dima on 6.3.17.
 */
import Weather from "../models/weather";

export default class WeatherController {
    constructor(city){
        this.city = city;
    }

    current() {
        return new Weather(this.city).currentWeather();
    }
}