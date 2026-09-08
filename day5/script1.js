function filerBYmap(items, category, maxPrice) {
    return items.filter(item => item.category === category && item.price <= maxPrice);
}
let items = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Phone", category: "Electronics", price: 20000 },
    { name: "Shirt", category: "Clothing", price: 1500 }
];

console.log(filerBYmap(items, "Electronics", 30000));