import express from 'express';
import User from './user';
import request from 'es6-request';

const app = express();

const appId = '0bcd51d21bed1ac0981c463585602e75';

const user = new User(100,'andrey');

console.log(user.toString());

app.get('/users',(req, res)=>{

request.get("http://api.openweathermap.org/data/2.5/weather")
.query({
    "q": "Grodno",
    "APPID": "0bcd51d21bed1ac0981c463585602e75"
})
.then((body) => {
    res.send(body);
});

});




const server = app.listen(8888,()=>{
  console.log('API app started');
});
