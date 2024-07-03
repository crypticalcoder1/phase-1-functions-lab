// Code your solution in this file!
// distanceFunctions.js

// Function to calculate distance in blocks from headquarters
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming headquarters is at block 42
  }
  
  // Function to calculate distance in feet from headquarters
  function distanceFromHqInFeet(someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264; // Each block is 264 feet
  }
  
  // Function to calculate distance traveled in feet between start and destination blocks
  function distanceTravelledInFeet(start, destination) {
    let blocksTravelled = Math.abs(destination - start);
    return blocksTravelled * 264; // Each block is 264 feet
  }
  
  // Function to calculate fare price based on distance traveled
  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  