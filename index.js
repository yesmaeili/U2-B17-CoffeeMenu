//Connect two files.
const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10,
        seasonal: true,
    }
];

//Return an array of all the drinks on the menu.
const drinks = coffeeMenu.map(drink => drink.name);
console.log(drinks);

//Return an array of drinks that cost 5 and under.
const cheapDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(cheapDrinks);

//Return an array of drinks that are priced at an even number.
const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);

//Return the total if you were to order one of every drink.
const total = coffeeMenu.reduce((acc, drink) => acc + Number(drink.price), 0);
console.log(total);

//Return an array with all the drinks that are seasonal.
const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal === true);
console.log(seasonalDrinks);

//Return all the seasonal drinks with the words "with imported beans" after the item name.
const seasonalImportedDrinks = seasonalDrinks.map(drink => `${drink.name} with imported beans`);
console.log(seasonalImportedDrinks);

module.exports = coffeeMenu;
