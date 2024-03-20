const Hq = 42
function distanceFromHqInBlocks(location) {
    return Math.abs(location - Hq)
}

const blockSize = 264
function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * blockSize
}

function distanceTravelledInFeet(a, b) {
    return Math.abs(a - b) * blockSize
}

function calculatesFarePrice(a, b) {
    if (distanceTravelledInFeet(a, b) <= 400) {
        return 0;
    }
    else if (distanceTravelledInFeet(a, b) > 400 && distanceTravelledInFeet(a, b) <= 2000) {
        return (distanceTravelledInFeet(a, b) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(a, b) > 2000 && distanceTravelledInFeet(a, b) <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far'
    }
}