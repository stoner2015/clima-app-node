const axios = require('axios');

const getClima = async(latitud, longitud) => {

    console.log(`uuuuuu ${latitud}, ${longitud}`);

    console.log('invoke clima');
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=8146d708799363edd99f4f97cc4aaf85`);

    console.log(resp.data.main.temp);
    const clima = resp.data.main.temp;

    return clima;
}

module.exports = {
    getClima
}