
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(feet) {
    let distanceInBlocks = distanceFromHqInBlocks(feet);
    return distanceInBlocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
  };

  function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    let farePrice = 0;
  
    if (distanceInFeet <= 400) {
      farePrice = 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      farePrice = (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      farePrice = 25;
    } else {
      farePrice = 'cannot travel that far';
    }
  
    // Check for free sample
    if (start === destination) {
      farePrice = 0;
    }
  
    return farePrice;
  }