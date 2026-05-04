var input = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
let cost_per_banana = Number(input[0]);
let money = Number(input[1]);
let banana_quantity = Number(input[2]);

let total_money = 0;
for (let i = 1; i <= banana_quantity; i++) {
    total_money += i * cost_per_banana;
}

let money_borrow = 0
money_borrow = total_money - money
console.log(money_borrow < 0 ? 0 : money_borrow)