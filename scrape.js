const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });
let dateObj = new Date();
let month = dateObj.getUTCMonth() + 1; //months from 1-12
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let newdate = year + "/" + month + "/" + day;

nightmare
  .goto('http://mountaintoadbrewing.com/')
  .click('a[href="/events"]')
  .wait(3000)
  .click(`a[href*="/events/${newdate}"]`)
  .wait(3000)
  .evaluate(() => {
    let truckName = document.querySelector('.eventitem-title');
    return truckName.innerText;
  })
  .end()
  .then(result => console.log(result))
  .catch(error => console.error('Bummer! Mountain Toad Food Search Failed: ', error));
