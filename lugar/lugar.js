const axios = require('axios');

// console.log(argv.direccion);
const getLugarLatLong = async(direccion) => {

    const encodeURL_ = encodeURI(direccion);
    console.log(encodeURL_);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL_}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': '7234c21992mshb60b209ec5ded6ep1d1143jsn1100ee4e3180'
        }
    });
    console.log('invoke');

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`)
    }

    // instance.get().then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     console.log('ERROR!!!', err);
    // })

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLong
}