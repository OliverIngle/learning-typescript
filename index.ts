//      ------ TYPES ------
//      --- ---
type Biome = 'forest' | 'desert' | 'ocean' | 'jungle' | 'mountains';
var sahara: Biome = 'desert'

//      --- Tuples ---
type Vector2 = [number, number];

//      ------ INTERFACES ------

interface Place {
    readonly name: string;
    biome: Biome;
    coordinates: Vector2;
    [key: string]: any;

}
var amazon: Place = {
    name: 'Amazon rainforest',
    biome: 'jungle',
    coordinates: [4, 7],
    description: 'The amazon is a beutifull rainforest located in south america'
}

interface NumArray {
    [index: number]: number;
}
var MyNR: NumArray = [1, 5, 6]

//      ------ EXTENDING TYPES ------
interface Computer {
    CPU: string;
    GPU?: string;
    motherBoard: {
        name: string;
        voltage: number;
    }
}

interface Setup extends Computer {
    screen: string;
    keyboard: string;
}

var mySetup: Setup = {
    CPU: 'Intel i5',
    motherBoard: {
        name: 'Acer',
        voltage: 16
    },
    screen: 'Asus',
    keyboard: 'RK'
}

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

//      ------ GENERICS ------
//      --- Typed Arrays ---
//      - method 1 -
interface TypeArray1<Type> {
    [index: number]: Type;
}

type BoolArray = TypeArray1<boolean>;
var boolArr: BoolArray = [true, false, false]

//      - method 2 -
type TypeArray2<Type> = Type[];

type StringArray = TypeArray2<string>;
var strArr: StringArray = ['hello', 'holla'];

//      - method 3: the array type -
type DateArray = Array<Date>;
var dateArr: DateArray = [new Date(), new Date(1)]