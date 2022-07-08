
cows=20

const countCows= new Promise((resolve, reject) => {
    if (cows>10) {
        resolve("There are enough cows")
    } else {
        reject("There are not enough cows")
    }
})

countCows
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Count ended"))