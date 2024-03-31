function* generateId() {
    let id =1

    while (true){
        yield id
        id++
    }
}


const generatorObj = generateId()
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
console.log(generatorObj.next())
