"use strict";
// Skill 4: Chaining Array Methods on Interface Data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 900,
        tags: ["work", "technology"]
    },
    {
        id: 2,
        name: "Office Chair",
        price: 250,
        tags: ["work", "furniture"]
    },
    {
        id: 3,
        name: "Headphones",
        price: 120,
        tags: ["audio", "technology"]
    },
    {
        id: 4,
        name: "Desk",
        price: 700,
        tags: ["work", "furniture"]
    },
    {
        id: 5,
        name: "Coffee Machine",
        price: 1500,
        tags: ["kitchen", "appliance"]
    }
];
// Filter Only
const affordableProducts = products.filter((product) => product.price < 1000);
console.log("Products under $1000:", affordableProducts);
// Filter + Map
const workProducts = products
    .filter((product) => product.tags.includes("work"))
    .map((product) => product.name);
console.log("Work products:", workProducts);
// Challenge: Filter + Map + Join
const multiTagProducts = products
    .filter((product) => product.tags.length > 1)
    .map((product) => `${product.name} ($${product.price})`)
    .join(", ");
console.log("Multi-tag products:", multiTagProducts);

