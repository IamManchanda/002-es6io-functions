/**
 * JavaScript
 */

function calculateBill(total, tax = 0.18, tip = 0.13) {
  return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, undefined, 0.12);
console.log(totalBill);
