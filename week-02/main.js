// main.js
// TODO 以 Module 的方式匯入，例如:
import Stack from './stack.js';

let stack = new Stack();
stack.print(); // []

stack.push(5);
stack.push(8);
stack.push(12);
stack.push(23);
stack.print(); // [5, 8, 12, 23]
console.log(`stack size: ${stack.size()}`); // 4
stack.pop(); //  移除頂部元素23，但不會print 23
stack.peek(); // print 12 (頂部元素)
console.log(stack.pop()); //  print 12 (頂部元素)


console.log('---------');
stack.clear();
// // 確認stack有被清空
stack.print(); // []
console.log(stack.pop()); // Stack is empty!
stack.peek(); // 應顯示"Stack is empty!"
console.log(stack.isEmpty()); // 應為true
console.log(stack.size()); // 應為0

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？