{ // the brackets around this file create a private scope so you can run this chrome dev tools as a "snippet"

/* ======== VARIABLES RECAP ======== */

// variable declaration and assignment
const fancyCoffeeBeans = "Sumatra";

// variable declaration
let anyBean;

// STEP 1: assign any string value to the variable anyBean
anyBean = "Arabica";

// STEP 2: declare and assign a new variable to represent different coffee beans
const specialBlend = "Dunkin Robusta";

// STEP 3: declare a new variable but do not assign it a value.
let testVar;

// STEP 4: console.log this new variable.
console.log(testVar);

// STEP 5: what is the output?
// undefined

//STEP 6: do your best to explain what caused this result:
// the variable was not assigned a value, it was only declared. so it is undefined
      
/* ================================= */




/* ======== FUNCTIONS RECAP ======== */

// this is the syntax for an "arrow" function
// the parentheses are able to contain any parameters you want your function to accept
() => { // sometimes they are called "fat arrow functions"
// this is where your function logic lives. between the curly braces
} // the curly braces also create "scope"
// you almost always want to use function declaration so that your function is assigned to a variable you can use multiple times

// function declaration
let kettle = (liquid) => { // "water" is a parameter
    // a return statement is needed so your function can output a value    
    return "nice piping hot " + liquid; // we are using string concatenation here
}

// function invocation (also known as executing, calling, triggering)
// kettle("a cup of water"); // "a cup of water" is the argument. As the function is run, the parameter liquid takes on the value "a cup of water"

// STEP 1: comment out the function invocation "kettle("a cup of water");"

// STEP 2: replace the comment below with your own invocation of the kettle function. pass in the parameter "milk" as a string
const hotMilk = kettle("milk");

// STEP 3: console log the variable hotMilk
console.log(hotMilk);

// STEP 4: check that the output "milk" is printed to the console (what you just did was log the output of the function kettle by using the variable hotMilk)
// checked and looks good

// STEP 5: now try calling the kettle function with a different argument
kettle("tea");

// STEP 6: assign that function call to a variable of your choosing
const hotTea = kettle("tea");

// STEP 7: console.log that variable
console.log(hotTea);

// STEPS 8-10: create a new function named coffeeMachine.
//             have coffeeMachine accept TWO parameters named beanType and cream (just separate your parameters between the parentheses with a comma. (first, second))
//             add a return statement to your function that returns beanType
// const coffeeMachine = (beanType, cream) => {
//     return beanType;
// }

/* ================================= */




/* ========= CONDITIONALS ========= */

// STEP 1: move your coffeeMachine function here. (cut and paste, or comment it out and paste the function here)
const coffeeMachine = (beanType, cream) => {
    return beanType;
}

// STEPS 2-4: invoke the coffeeMachine function, and pass in the variable you created in "variables recap STEP 2" as an argument
//            now assign that function invocation to a variable called myCoffee
// const myCoffee = coffeeMachine(specialBlend);
const myCoffee = coffeeMachine(specialBlend, true);

// STEP 5: console.log the myCoffee variable
console.log(myCoffee);

// STEP 6: adjust the coffeeMachine invocation from STEP 2 so that a second argument is passed in. make it the boolean true
// const myCoffee = coffeeMachine(specialBlend, true);

// STEP 7: in our coffeeMachine function, add an if statement (conditional) before the return statement
// const coffeeMachine = (beanType, cream) => {
//     if() {

//     }
//     return beanType;
// }

// STEP 8: 














let megaCoffeeMachine = (coffeeType, cream) => {

    if(!coffeeType && !cream) {
        return "fuck you";
    }

    let yourDrink;

    if(cream === true) {
        yourDrink = "heres a tasty cup of " + coffeeType + " coffee with cream. Enjoy!";
    } else if(cream === false) {
        yourDrink = "heres a tasty cup of " + coffeeType + " coffee. Enjoy!";
    } else {
        yourDrink = "You didn't order any coffee!!";
    }

    return yourDrink;

}

// megaCoffeeMachine(anyBean, true);
// megaCoffeeMachine(newStrainOfBean, true);
megaCoffeeMachine();

/* ================================ */

}