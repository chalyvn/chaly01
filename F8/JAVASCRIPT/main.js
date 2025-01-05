var promise = new Promise (
    //Executor
    function (resolve, reject) {
        // Logic
        // Thanh cong: resole()
        // That bai: reject()

        // Fake call API
        resolve();
    }
)

// promise
//     .then(function (){
//         return new Promise(function (resolve){
//             setTimeout(resolve, 3000);
//         })
//     })
//     .then(function (data){
//         console.log('data', data);
//     })
//     .then(function (data2){
//         console.log('data2', data2);
//         return 100
//     })
//     .catch(function (error){
//         console.log(error)
//     })
//     .finally(function (){
//         console.log('Done')
//     })


// in ra so 1 - 2 - 3 cach nhau 1s ko sd setInterval
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function (){
        console.log(1);
        return sleep(1000);
    })
    .then(function (){
        console.log(2);
        return sleep(1000);
    })
    .then(function (){
        console.log(3);
        return sleep(1000);
    })
