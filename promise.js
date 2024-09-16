const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);

/*
  Output:
1
2
4
timerStart
timerEnd
success

    Explanation:
    - The promise is created and the executor function is called immediately.
    - The console.log(1) and console.log(2) are executed.
    - The setTimeout is added to the Web API and the timer is started.
    - The console.log(4) is executed.
    - The timer is finished and the promise is resolved.
    - The .then() is called and the console.log(res) is executed.
    - The console.log("timerEnd") is executed.
*/