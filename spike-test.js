import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 1000 }, // ramp up to 10 users over 30 seconds
        { duration: '1m', target: 0 }    // ramp down to 0 users
    ] // Spike test is sudden increasing in the load to check how the application behave under the abrupt and recover itself
};

export default function () {
    http.get('https://learnpythonthehardway.org/python3/');
    sleep(1);
}