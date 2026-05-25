let cart = [100, 200, 300];

startCheckout();

function startCheckout() {
  console.log("Starting checkout...");

  let total = calculateTotal(cart);
  let finalAmount = applyDiscount(total);

  printReceipt(finalAmount);
}

function calculateTotal(items) {
  console.log("Calculating total...");
  return items.reduce((sum, item) => sum + item, 0);
}

function applyDiscount(amount) {
  console.log("Applying discount...");

  if (discountEnabled && amount > 500) {
    return amount * 0.9;
  }

  return amount;
}

function printReceipt(amount) {
  console.log("Final amount:", amount);
}

let discountEnabled = true;
