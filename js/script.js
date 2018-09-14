let magnetSensor = new Magnetometer({frequency: 3});

magnetSensor.addEventListener('reading', e => {

    let bearing = Math.atan2(magnetSensor.y, magnetSensor.x) * (180 / Math.PI);
    if(bearing > 360) {
        bearing = bearing - 360;
    }
    else if (bearing < 0) {
        bearing = bearing + 360;
    }

    document.getElementById('info').innerHTML =  bearing.toFixed(2) +" "+ getDirection(bearing);
    let img = document.getElementById('compass');
    img.style.transform = `rotate(${bearing.toFixed(2)}deg)`;
});

magnetSensor.addEventListener('error', event => {
  console.log(event.error.name, event.error.message);
});

magnetSensor.start();

const getDirection = (bearing) => {

    if(bearing >= 0 & bearing < 67.5){
        return "NE";
    } else if(bearing >= 67.5 & bearing < 112.5){
        return "E";
    } else if(bearing >= 112.5 & bearing < 157.5){
        return "SE";
    } else if(bearing >= 157.5 & bearing < 202.5){
        return "S";
    } else if(bearing >= 202.5 & bearing < 247.5){
        return "SW";
    } else if(bearing >= 247.5 & bearing < 292.5){
        return "W";
    } else if(bearing >= 292.5 & bearing < 337.25){
        return "NW";
    } else {
        return "N";
    }
}

