const dogs = [{
    name: 'Snickers',
    age: 2
}, {
    name: 'hugo',
    age: 8
}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//Attributes Modification
//sets a breakpoint to see what happens on the element


//Regular
console.log('hello');


//Interpolated
console.log("Hello %s", "everybody") //whatever you write on the second quote will be put in the place of %s


//Styled text
console.log("%c I am a hero", "font-size:24px; color:pink") // console.log("%c str1", "%c str2", "CSS-for-str1", "CSS-for-str2")


//Warning!
console.warn("MAYDAY" + "%c MAYDAAAAAAYYY", "background-color:red;color:#fff") //display warning message


//Info
console.info("work %c hard and smart", "background-color:green; color:#fff") //display info message


//Testing
console.assert(1 === 1, "It is true, nothings shows") //no messages 
console.log(1 === 2, "That is false") //message only fires when it is wrong

const p = document.querySelector("p")
console.assert(p.classList.contains("para"), "That is wrong")


//Cleaning
console.clear() //clear the console


//Viewing DOM elements
console.log(p) //shows only the elements
console.dir(p) //display all properties, methods related to this element


//Grouping together
dogs.forEach(dog => {
    console.group() //Open the group
    console.log(`This is ${dog.name}`);
    console.log(`This is ${dog.age}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.groupEnd() //Close the group
})


//Counting 
console.count("Yes"); //counts how many times the same thing repeats
console.count("No");
console.count("No");
console.count("Yes");
console.count("No");
console.count("Yes");
console.count("No");
console.count("No");
console.count("No");
console.count("Yes");


//Timing => shows how long something takes
console.time('fetching data');
fetch('http://api.github.com/users/amelieyeh')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');       //tell us how long did it take to fetch the data
        console.log(data);
    });


//Table 
console.table(dogs) // nice way to show the data