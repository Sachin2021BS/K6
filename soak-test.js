import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '5m', target: 1000 }, // ramp up to 1000 users over 5 minutes
        { duration: '12hr', target: 1000 },
        { duration: '5m', target: 0 }    // ramp down to 0 users
    ] // soak test is done for load got by load testing for longer duration of time (i,e 12 - 24hrs)
};

export default function () {
    http.get('https://learnpythonthehardway.org/python3/');
    sleep(1);
}