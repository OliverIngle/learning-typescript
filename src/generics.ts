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
var dateArr: DateArray = [new Date(), new Date]