function makeTransaktion(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice}  credits!`;
}

makeTransaktion(5, 3000);
console.log(makeTransaktion(5, 3000));
makeTransaktion(3, 1000);
console.log(makeTransaktion(3, 1000));
makeTransaktion(10, 500);
console.log(makeTransaktion(10, 500));
