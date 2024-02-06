var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){    
var res = JSON.parse(request.response);
console.log(res);

// 1.print  only those  countries name which belongs to asia region

var result_asia = res.filter((ele)=>ele.region == "Asia");
console.log(result_asia)
 var country_names = result_asia.map((ele)=>ele.name);
 console.log(country_names);

// 2. Print capitals of those countires whose population is less than 2Lakhs

var popu = res.filter((ele)=>ele.population<200000);
console.log(popu);
var popu_res = popu.map((ele)=>ele.capital)
console.log(popu_res);


 // Problem 3: Print the following details name, capital, flag, using forEach function
  
 console.log("Details of countries:");
 res.forEach(country => {
     console.log("Name:", country.name);
     console.log("Capital:", country.capital);
     console.log("Flag:", country.flags.png);
 });


 // Problem 4: Print the total population of countries using reduce function
var total_popu = res.reduce((acc,cv)=>acc+cv.population,0)
console.log(total_popu);


 // Problem 5: Print the country that uses US dollars as currency.
 var countryWithUSD = res.find(country => country.currencies && country.currencies.USD);
 if (countryWithUSD) {
     console.log("Country that uses US dollars as currency:", countryWithUSD.name);
 } else {
     console.log("No country uses US dollars as currency.");
 }
}