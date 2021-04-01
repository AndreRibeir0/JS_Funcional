function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                console.log('Async')
                return fn(await acc)
            } else {
                console.log('Sync')
                return fn(acc)
            }

        }, valor)
    }
}