// 1. dynamic programming
function fib(n) {
    // create an array of size n+1
    const arr = new Array(n + 1); 
    // first two elements are 0 and 1
    arr[0] = 0
    arr[1] = 1;
    // DP
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2]
    }
    // return the last element
    return arr[n];
}

// 2. by iteration
function fib_i(n) {
    if (n < 2) { return n; }
    // let three variables to record
    let i = 0, j = 1, k;
    // run n-1 times iteration 
    for (let t = 0; t < n - 1; t++) {
        k = i + j;
        i = j;
        j = k;
    }
    return k;
}
// i j k
// 0 1 1
// 1 1 2
// 1 2 3
// 2 3 5
// ...


// 3. recursion
function fib_r(n) {
    if (n < 2) { return n; }
    return fib_r(n - 1) + fib_r(n - 2);
}
// It would be slow when using recursive method. 


// 4. tail recursion
function fib_tail(n, a = 0, b = 1) {
    if (n === 0) return a;
    if (n === 1) return b;
    return fib_tail(n - 1, b, a + b);
}
// 以 n = 5 為例
// fib(n = 5, a = 0, b = 1), n != 0 or 1
// -> fib(n = 4, a = 1, b = 1), n != 0 or 1
// -> fib(n = 3, a = 1, b = 2), n != 0 or 1
// -> fib(n = 2, a = 2, b = 3), n != 0 or 1
// -> fib(n = 1, a = 3, b = 5), n == 1
// return b = 5,  所以 fib(5) = 5


// 雖然比recursion快，但還是有可能有stack overflow的問題，一般來說functional language會做tail call optimization(TCO)，
// 將tail recursion轉換成迴圈，但大多數的非函數式語言沒有做TCO。Javascript的引擎不一定會支援TCO

// ref: https://dev.to/diwakarkashyap/tail-call-optimization-in-es6javascript-in-easy-language-11e6


// run test
for (let i = 0; i < 100; i++) {
    console.log(fib_i(i));
}