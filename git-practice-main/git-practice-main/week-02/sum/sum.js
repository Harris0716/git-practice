// ary: number array
function sum(ary) {
    return ary.reduce((a, b) => a + b);
}

console.log(sum([1, 5, 3, 2])); // 11

// reduce是function language的語法，input是一個二元運算(e.g. +,-,*,/)
// 運算過程可簡化為 reduce([1,5,3,2], + ) -> ((1+5)+3)+2
