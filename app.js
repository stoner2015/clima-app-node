const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

    try {
        let respLugar = await lugar.getLugarLatLong(direccion);
        let respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${respLugar.dir} es de ${respClima}`;

    } catch (e) {
        return `no se pudo determinar el clima de ${direccion}`;

    }

}


getInfo(argv.direccion).then(console.log).catch(console.log);