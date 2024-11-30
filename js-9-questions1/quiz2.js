//? follow these steps:
// todo1: Write a code that logs “wait 5 sec”
// todo2: and then after 5 seconds logs “ready?”
// todo3: and finally logs “🚀”  every one second
// todo4: (write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
let time=10;
console.log("wait 5 sec");

setTimeout(()=>{
    console.log("ready?");
    let times= setInterval(()=>{
        console.log("🚀")
        time=time-1;
        if(time==0){
            clearInterval(times);
            //or
            // console.clear();
        }
        
      
    },1000)
},5000)
