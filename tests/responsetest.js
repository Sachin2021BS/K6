import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 10,
    duration: '20s',
    thresholds: {
        http_req_duration: ['p(95)<200'],
        http_req_failed: ['rate<0.01']
    }
};

export default function () {
    const res = http.get('https://learnpythonthehardway.org/python3/');
    //console.log('Response status: ' + res.status);
    //console.log('Response body: ' + res.body);

    check(res, {
        'Status code is 200': (r) => r.status === 200,
        'Response body includes': (r) => r.body.includes('Table Of Contents')
    });

}