console.log("Write your code below!")

function sayHello(name){
  console.log(`Hello, ${name}`);
}

function letterCount(name){

  if (name.length > 5){
    console.log(`${name}, your name has ${name.length} letters. That's a pretty long name!`)}
    else {
      console.log(`${name}, your name has ${name.length} letters. That name's not that long!`);
      
    }
  }
 // 

function greetPeople(names){

}

function speakingGrandma(phrase){

}


function kebabToTitleCase(filenames){

}

//Write your test cases below this comment
sayHello('jeff'); // expect: Hello, jeff
sayHello('Itzy'); // expect: Hello, Itzy
letterCount('jeffgdbd')
letterCount('Itzy')

//do not editing anything below this comment.
module.exports = {
  sayHello,
  letterCount,
  greetPeople,
  speakingGrandma,
  kebabToTitleCase
};
