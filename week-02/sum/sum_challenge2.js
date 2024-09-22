// 挑戰題: 如果 sum 函式的 input 是 n，然後要回傳 1 + 2 + 3 + … + n 的話，
// 一樣不能用 for, while 寫，要怎麼做？

// iteration using for or while
// function sum_i(n) {
//     let s = 0;
//     for(let i = 1; i <= n; i++){
//         s += i;
//     }
//     return s;
// }

// function sum_while(n) {
//     let s = 0;
//     while(n>0){
//         s += (n--);
//     }
//     return s; 
// }

// 1. recursion
function sum_r_n(n) {
    if (n == 0) { return n; }
    return n + sum_r(n - 1);

}

// 2. tail recursion
function sum_tail_n(n, acc = 0) {
    if (n == 0) {
        return acc;
    }
    return sum_tail_n(n - 1, n + acc);
}

// 3. by formula
function sum_formula(n) {
    return n*(n+1)/2;
}

// run test
for (let i = 0; i < 1000; i++) {
    console.log(sum_tail_n(i));
}