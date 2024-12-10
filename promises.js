
// let promise1 = new Promise((resolve, reject) => {
//      let rand = Math.floor(Math.random() * 100);
//      if (rand < 50) {
//         reject('The Number was not supported as it was less than 50')
//      }
//      else{
//         console.log('The Promise is Resolved successfully as it was greater than 50');
//         resolve('Welcome! Abdullah')
        
//      }
// })

// promise1.then((a) => {
//     console.log(a);
    
// }).catch((error) => {
//     console.log(error);
    
// })


// Promise All  (promise.all())

let firend1 = new Promise((resolve, reject) => {
    let areSnacksHere = true;
    if (areSnacksHere) {
        resolve('I (friend1) has brought the Snacks')
    }
    else{
        reject('Friend1 has not brought snacks')
    }
})

let firend2 = new Promise((resolve, reject) => {
    let areSnacksHere = true;
    if (areSnacksHere) {
        resolve('I (friend2) has brought the Snacks')
    }
    else{
        reject('Friend2 has not brought snacks')
    }
})

let firend3 = new Promise((resolve, reject) => {
    let areSnacksHere = true;
    if (areSnacksHere) {
        resolve('I (friend3) has brought the Snacks')
    }
    else{
        reject('Friend3 has not brought snacks')
    }
})

let promise4 = Promise.all([firend1, firend2, firend3])
.then((snack) => {
    console.log(snack);
    
})
.catch((error) => {
    console.log(error + ' ' + 'So, Party is delayed');
    
})


// Promise Race (Promise.race())

let Driver1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Driver 1 Won!'), 2000)
})

let Driver2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Driver 2 Won!'), 1000)
})

Promise.race([Driver1, Driver2])
.then((winner) => {
    console.log(winner);
    
})
.catch((error) => {
    console.log(error);
    
})