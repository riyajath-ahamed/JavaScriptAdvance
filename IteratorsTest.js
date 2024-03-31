 function* generator(array){
    for (let i=0; i < array.length; i++) {
        yield array[i]
    }
 }
 

 const genareteObj = generator([1,3,5])
 console.log(genareteObj.next())
 console.log(genareteObj.next())
 console.log(genareteObj.next())
 console.log(genareteObj.next())
