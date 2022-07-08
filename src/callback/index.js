//First Callback
const sum= (a, b) => a+b
const calc= (a, b, callback) => 
    callback(a, b)

console.log(calc(2, 2, sum))

//SetTimeOut
setTimeout(() => {
   console.log('Hello world') 
}, 2000);