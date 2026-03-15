import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages: [ 
        { duration: '2h', target: 100000 }, // breakpoint test is used to identify performance bottlenecks meaning finding the maximum load of an application
    ] // and it as only one stage
};

export default function () {
    http.get('https://learnpythonthehardway.org/python3/');
    sleep(1);
}