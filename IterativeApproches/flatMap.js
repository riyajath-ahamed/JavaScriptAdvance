const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Using flatMap to flatten the array
const flatArray = nestedArray.flatMap((innerArray) => innerArray);

//console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]


const library = [
    { title: 'Book 1', authors: ['Author A', 'Author B'] },
    { title: 'Book 2', authors: ['Author C', 'Author D'] },
  ];
  
  const flattenedAuthors= library.flatMap(book => book.authors);
  const mapAuthors= library.map(book => book.authors);
  
  console.log("flt",flattenedAuthors);
  // Output: ['Author A', 'Author B', 'Author C', 'Author D']

  console.log("map",mapAuthors);
  // Output: [['Author A', 'Author B'], ['Author C', 'Author D']]


  /*

  Diffrence between map and flatMap
    map() is used to transform elements of an array using a function.
    flatMap() is used to transform and flatten elements of an array using a function.
    flatMap() is a combination of map() and flat() methods.
    flatMap() first maps each element using a mapping function, then flattens the result into a new array.
    flatMap() is useful when you want to map and flatten an array in a single step.
    flatMap() is not supported in Internet Explorer.
    flatMap() is a new feature introduced in ECMAScript 2019 (ES10).

  */