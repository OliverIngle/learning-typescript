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