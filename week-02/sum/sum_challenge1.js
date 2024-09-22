// Q: input an array, output its sum without using for and while
// 挑戰題: 有幾種寫法？

// ary: number array
// 1. recursion
function sum_r(ary) {
    if (ary.length === 0) {
        return 0;
    } else {
        return ary[0] + sum_r(ary.slice(1));
    }
}


// 2. tail recursion
function sum_tail(ary, acc = 0) {
    if (ary.length === 0) {
        return acc;
    } else {
        return sum_tail(ary.slice(1), acc + ary[0]);
    }
}
// sum2([1,5,3,2], acc = 0), ary.len !=0
// -> sum2([5,3,2], acc = 0+1), ary.len !=0
// -> sum2([3,2], acc = 0+1+5), ary.len !=0
// -> sum2([2], acc = 0+1+5+3), ary.len != 0
// -> sum2([], acc = 0+1+5+3+2), ary.len ==0
// -> return acc = 0+1+5+3+2 = 11

// 3. foreach
function sum_foreach(ary) {
    let s = 0;
    ary.forEach(num => {
        s += num;
    });
    return s;
}
// test
console.log(sum_tail([1, 5, 3, 2])); // 11
