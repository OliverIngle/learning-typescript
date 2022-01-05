//      ------ TYPES ------
//      --- Union Types ---
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