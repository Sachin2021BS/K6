import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '10s', target: 10 }, // ramp up to 10 users over 30 seconds
        { duration: '30s', target: 10 },  // stay at 10 users for 1 minute
        { duration: '10s', target: 0 }    // ramp down to 0 users
    ]
};

export default function () {
    http.get('https://learnpythonthehardway.org/python3/');
    sleep(1);
}