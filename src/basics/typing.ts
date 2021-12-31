//      ------ TYPING ------
//      --- Variables ---
var foo = 42;           //foo is now strongly typed as a number
var bar: number;        //bar is also strongly typed as a number
var bas: number = 69;    //redundant

var stringArr: string[]; //bas is an array that can only accept strings

//      --- Functions ---

function addTwo(a: number, b: number): number {     //accepts 2 args that are numbers and returns a number
    return a + b
}

function say(txt: string): void {                   //accepts 1 string and doesn't return anything (void)
    console.log(txt);
}