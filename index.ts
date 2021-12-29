type Name = 'olly' | 'joe' | 'brian';
 
interface Person {
    name: Name;
    age: number;
    [key: string]: any;
}

const user: Person = {
    name: "brian",
    age: 44,
    tall: true
}

function add(a :number, b: number): string {
    return (a + b).toString()
}

function printout(arg: any): void {
    console.log(arg)
}