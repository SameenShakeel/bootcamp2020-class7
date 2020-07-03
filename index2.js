let promise = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("new Promise");
        resolve();
    }, 1000);
});

promise.then(function(){
    console.log("promise resolve");
    return 2;
})
.then(function(val){
    console.log(val);
    return val + 2; 
})
.then(function(val2){
    console.log(val2);
})
.catch(function(error){
    console.log("error");
});