function* generateId() {
    let id = 1

    while (true) {
        const increment = yield id
        if(increment != null) {
            id += increment
        } else {
            id++
        }
    }
}

const genartorObject = generateId()
console.log(genartorObject.next(433434345)) //This doenst effect because there is no yeild
console.log(genartorObject.next())
console.log(genartorObject.next(4))
console.log(genartorObject.next(3))
//console.log(genartorObject.throw(new Error("--  Hi  --")))
console.log(genartorObject.return(10))
console.log(genartorObject.next())

