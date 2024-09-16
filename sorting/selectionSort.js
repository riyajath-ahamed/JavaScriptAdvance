 
 function selectionSort(array) {
   const length = array.length;
   
   for (let i = 0; i < length; i++) {
     let min = i;
     for (let j = i + 1; j < length; j++) {
       if (array[min] > array[j]) {
         min = j;
       }
     }
     if (min !== i) {
       let tmp = array[i];
       array[i] = array[min];
       array[min] = tmp;
     }
   }
   return array;
 }
 
 
 const array = [64, 34, 25, 12, 22, 11, 90];
 console.log("Sorted array:", selectionSort(array));