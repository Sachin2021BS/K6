import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(90)<260'], // 90% of requests should be below 260ms
        http_req_failed: ['rate<0.01'], // Less than 1% of requests should fail
    },
};

export default function () {
    const res = http.get('https://test.k6.io/');
    console.log(`Response status: ${res.status}`);
    //console.log(`Response body: ${res.body}`);
    check(res, {
        'is status 200': (res) => res.status === 200,
        //'Response body contains': (r) => r.body.includes('K6'== true)
    })
}