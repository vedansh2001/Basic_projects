const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async 1 task is compelete');
        resolve()
    }, 1000)
})

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async 2 task is compelete');
        resolve()
    }, 1000)
})

fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log("How this line got printed first? " + " " + "id = " + data.info.seed);
})
.catch((error) => console.log(error))



Async 1 task is compelete
Async 2 task is compelete
How this line got printed first?  id = d65982e466caaba3/**

Async 1 task is compelete
Async 2 task is compelete
How this line got printed first?  id = d65982e466caaba3


*/