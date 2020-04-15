import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = 
 
     { duration: '30s', vus: 300 }//100 vus sending every 1 sec for 30s

    //   { duration: '1m', target: 60 }, // 1 request per second
    //   { duration: '5m', target: 100 }, // in 5 min, ramping up to 100 virtual users
    //   { duration: '2m', target: 200 }, // normal load
    //   { duration: '1m', target: 600 }, // 10 requests per second
    //   { duration: '2m', target: 300 }, // around the breaking point
    //   { duration: '5m', target: 300 },
    //   { duration: '2m', target: 400 }, // beyond the breaking point
    //   { duration: '5m', target: 400 },
    // { duration: '1m', target: 6000 }, // 100 requests per second
    //   { duration: '10m', target: 0 }, // scale down. Recovery stage.
  


export default function() {
    const BASE_URL = 'http://localhost:3002'; // make sure this is not production
    let random = Math.floor((Math.random()* 10000000) + 1);

    let res = http.get(`${BASE_URL}/#${random}`);
    check(res, { 'status was 200': r => r.status == 200 });
    sleep(1);
  }
