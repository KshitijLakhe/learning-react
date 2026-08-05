//Promise States
//Pending: Initial state, neither fulfilled nor rejected.
//Fulfilled: The operation completed successfully.
//Rejected: The operation failed.
//It is used for handling async operations


let promise = new Promise((resolve, reject) => {
    let success = false
    setTimeout(() => {
        if (success) {
            resolve('promise is resolved successfully!')
        } else {
            reject('promise is rejected')
        }
    }, 1000)
})
// console.log(promise)

// consuem with then , catch, finally
promise
    .then((messsage) => console.log('messsage', messsage))
    .catch((error) => console.error('error', error))
    .finally(() => console.log('promise is settled(either fullfilled or rejected).'))