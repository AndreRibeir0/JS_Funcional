const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal!')
    resolve('Promise é bem legal!')
})

promise.then(console.log)

const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é bem')
    subscriber.next('bem')
    subscriber.next('legal!')
    subscriber.complete()
})

obs.subscribe(console.log)
