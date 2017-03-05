import express from 'express';
import WeatherController from './controllers/weathercontroller';
const app = express();

app.get('/weather/:city/current', (req, res) => {
    res.send(new WeatherController(req.params.city).current());
});

const server = app.listen(8888, () => {
    console.log('API app started');
});
