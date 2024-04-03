const fetch = require('node-fetch');

const API_KEY = 'artalk_default_secret';
const ARTALK_URL = 'http://localhost:3000/api/v1/meeting';
// const MIROTALK_URL = 'https://p2p.mirotalk.com/api/v1/meeting';
// const MIROTALK_URL = 'https://mirotalk.up.railway.app/api/v1/meeting';
// const MIROTALK_URL = 'https://mirotalk.herokuapp.com/api/v1/meeting';
// const MIROTALK_URL = 'https://thankful-remotely-feline.ngrok-free.app/api/v1/meeting';

function getResponse() {
    return fetch(ARTALK_URL, {
        method: 'POST',
        headers: {
            authorization: API_KEY,
            'Content-Type': 'application/json',
        },
    });
}

getResponse().then(async (res) => {
    console.log('Status code:', res.status);
    const data = await res.json();
    console.log('meeting:', data.meeting);
});
