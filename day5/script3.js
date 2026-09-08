function calculateTotal(products) {
    return products.reduce((total, p) => total + p.price * p.quantity, 0);
}

let cart = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 20, quantity: 2 }
];

console.log(calculateTotal(cart)); // 1039