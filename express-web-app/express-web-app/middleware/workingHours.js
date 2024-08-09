// middleware/workingHours.js

function workingHours(req, res, next) {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();
  
    // Check if it's Monday to Friday and between 9 AM and 5 PM
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17) {
      next(); // Allow the request to proceed
    } else {
      res.send('Sorry, the web application is only available during working hours (Monday to Friday, from 9 AM to 5 PM).');
    }
  }
  
  module.exports = workingHours;
  