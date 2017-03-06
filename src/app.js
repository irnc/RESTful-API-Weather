import express from 'express';
import WeatherController from './controllers/weathercontroller';
const app = express();

app.get('/weather/:city/current', (req, res) => {
    res.send(new WeatherController(req.params.city).current());
});

app.get('/weather/:city/future/days', (req, res) => {
    res.send(new WeatherController(req.params.city).future());
});

app.get('/weather/:city/future/hours', (req, res) => {
    res.send(new WeatherController(req.params.city).future());
});

const server = app.listen(8888, () => {
    console.log('API app started');
});
