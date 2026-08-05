function getData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: 'keshav patil' })
        }, 500);
    })
}

//normal function
async function loadData(id) {
    try {
        let loading = true
        let user = await getData(id)
        console.log('user', user)
    } catch (err) {
        console.log(err.message)
    } finally {
        loading = false
        console.log('loading', loading)
    }
}
loadData(1)


//arrow function
let loadingData = async (id) => {
    try {
        let loading = true
        let user = await getData(id)
        console.log('new user', user)
    } catch (err) {
        console.log(err)
    } finally {
        loading = false
        console.log('loading', loading)
    }
}

loadingData(2)