const sample =require("./food.json");


//list all the food items
console.log(" list all the food items");
const fooditems = sample.map(x=>x.foodname);
console.log(fooditems);

//list all the food items with category vegetables
const vegetables= sample.filter(x=>x.category==="Vegetable")
console.log(vegetables);

//list all the food items with category fruit
const fruits = sample.filter(x=>x.category ==="Fruit")
console.log(fruits);

//list all the food items with category protein
const protein = sample.filter(x=>x.category==="Protein")
console.log(protein);

//list all the food items with category nuts
const nuts = sample.filter(x=>x.category==="Nuts")
console.log(nuts);

//list all the food items with category grains
const grains = sample.filter(x=>x.category==="Grain")
console.log(grains);

//list all the food items with category dairy
const dairy = sample.filter(x=>x.category==="Dairy")
console.log(dairy);

//list all the food items with calorie above 100
const calabove = sample.filter(x=>x.calorie>100)
console.log(calabove);

//list all the food items with calorie below 100
const calbelow = sample.filter(x=>x.calorie<100);
console.log(calbelow);

//list all the food items with highest protien content to lowest 
sample.sort((a,b)=>b.protiens- a.protiens)
const hipro = sample.filter(x=>x.foodname);
console.log(hipro);

//list all the food items with lowest cab content to highest
sample.sort((a,b)=>a.cab-b.cab);
const lowcab = sample.filter(x=>x.foodname);
console.log(lowcab);