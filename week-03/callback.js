function doJob(job, time, cb) {
    setTimeout(() => {
        // 只有在這裡，才能知道這個非同步的 setTimeout 已經做完事情了
        let now = new Date();
        cb(`完成工作 ${job} at ${now.toISOString()}`);
    }, time);
}
// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
doJob('刷牙', 1000, function (data) {
    console.log(data);
    doJob('吃早餐', 3000, function (data) {
        console.log(data);
        doJob('寫功課', 1000, function (data) {
            console.log(data);
            doJob('吃午餐', 2000, function (data) {
                console.log(data);
            });
        });
    });
});


// 刷牙 1sec -> 吃早餐 3 sec -> 寫功課 1sec -> 吃午餐 2sec
/* 以下做法是不可行的，因為每一個dojob機乎會同時執行，而非循序執行，因此需要使用巢狀的callback，dojob的
callback 先執行console.log(data)，再放下一個要執行的dojob，最後一層的callback只做console.log(data)，
可使用promise和async/await(語法糖)來改善這個問題

let now = new Date();
console.log(`開始工作 at ${now.toISOString()}`);
doJob('刷牙', 1000, function (data) {
    // 表示 doJob 做完了
    console.log(data);
});
doJob('吃早餐', 3000, function (data) {
    console.log(data);
});
doJob('寫功課', 1000, function (data) {
    console.log(data);
});
doJob('吃午餐', 2000, function (data) {
    console.log(data);
});

*/