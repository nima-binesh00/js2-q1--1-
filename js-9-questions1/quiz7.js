//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
"ffff".replaceAll
function name(params) {
    const num=params.filter((a)=>a.length>6)
    // const jo=num.map((df)=>df.replaceAll(/\W/g,""))
    // console.log(jo);
    console.log(num);
    
    return num.every((s)=>s.length<10)
}
console.log(name(array));

//!  Answer:
