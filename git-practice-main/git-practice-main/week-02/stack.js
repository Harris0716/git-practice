// stack.js
// 完成以下 TODO 的部分，並且以 Module 的方式匯出 (ESM)
export default class Stack {
  // TODO: # 有特別的意思嗎？請以註解回覆。
  #items;
  // #items; 用來宣告#item是私有屬性，只有在這個class中可以直接存取，如果要在外部存取，
  // 需使用get/set方法(如果有定義的話)
  // #的用法類似Java或C++中的private
  // 一般來話，物件導向程式設計會把屬性設為私有，方法設為公有(也就是封裝(encapsulation))

  constructor() {
    this.#items = [];
  }
  // 在 stack 頂部加入元素i
  // 假設左邊是底部，右邊是頂部
  push(element) {
    this.#items.push(element);
  }

  // 移除並回傳 stack 頂部的元素
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty!";
    } else {
      return this.#items.pop();
    }
  }



  // 回傳 stack 頂部的元素，但不移除它
  peek() {
    if (this.isEmpty()) {
      console.log("Stack is empty!");
    } else {
      console.log(this.#items[this.#items.length - 1]);
    }

  }

  // 檢查 stack 是否為空
  isEmpty() {
    return this.#items.length === 0;
  }

  // 回傳 stack 中元素的個數
  size() {
    return this.#items.length;
  }

  // 清空 stack 
  clear() {
    this.#items = [];
  }

  // 印出 stack 內容
  print() {
    console.log(this.#items);
  }
}