const findDistance = require("../helpers/Distance");
const quick_Sort = require("../helpers/QuickSort");

let DRIVERS = [];
let USERS = [];

const addDriver = ({ name, id, city, vehicle, location }) => {
  name = name.trim().toLowerCase();
  city = city.trim().toLowerCase();
  const driver = { name, city, vehicle, location, id };
  DRIVERS.push(driver);

  return { driver };
};
const addUser = ({ name, id, city, location }) => {
  name = name.trim().toLowerCase();
  city = city.trim().toLowerCase();
  const user = { name, city, location, id };

  USERS.push(user);
};
const removeDriver = (id) => {
  const mydriver =  DRIVERS.filter((e) => e.id === id);
  DRIVERS = DRIVERS.filter((e) => e.id !== id);
  return mydriver;
};

const filterByCity = (city) => {

  return DRIVERS.filter((e) => {
    return e.city.toLowerCase() === city.toLowerCase()
  });
};
const getAllDriver = ()=>{
  return DRIVERS
}
const findNearestDriver = (coordinates, city, type) => {
  console.log(coordinates);
  const distanceArray = [];
  filterByCity(city).forEach((e, i) => {
    if (e.vehicle.vehicleType === type) {
      distanceArray.push({
        distance: findDistance(e.location, coordinates),
        driver: e,
      });
    }
  });
 
  const nearDrivers = quick_Sort(distanceArray)
  return nearDrivers
}


module.exports = { DRIVERS, addDriver, addUser, removeDriver, filterByCity,getAllDriver,findNearestDriver };
