var sahara = 'desert';
var amazon = {
    name: 'Amazon rainforest',
    biome: 'jungle',
    coordinates: [4, 7],
    description: 'The amazon is a beutifull rainforest located in south america'
};
var MyNR = [1, 5, 6];
var mySetup = {
    CPU: 'Intel i5',
    motherBoard: {
        name: 'Acer',
        voltage: 16
    },
    screen: 'Asus',
    keyboard: 'RK'
};
//      ------ TYPING ------
//      --- Variables ---
var foo = 42; //foo is now strongly typed as a number
var bar; //bar is also strongly typed as a number
var bas = 69; //redundant
var stringArr; //bas is an array that can only accept strings
//      --- Functions ---
function addTwo(a, b) {
    return a + b;
}
function say(txt) {
    console.log(txt);
}
var boolArr = [true, false, false];
var strArr = ['hello', 'holla'];
var dateArr = [new Date(), new Date(1)];
