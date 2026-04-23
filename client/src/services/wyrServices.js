export default {
    getRandomWYR() { // will return a promise because fetch returns promises
        return fetch('/wyr').then(response => {
            return response.json()
        })
    }
}