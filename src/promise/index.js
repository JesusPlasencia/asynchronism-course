// const promise = new Promise(function (resolve, reject) {
//     resolve('hey!');
// });

const COWS = 15;

const countCows = new Promise((resolve, reject) => {
    if (COWS > 10) {
        resolve(`We have ${COWS} cows on the farm.`); // !Template Strings
    } else {
        reject('There is no cows.');
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Finally');
})