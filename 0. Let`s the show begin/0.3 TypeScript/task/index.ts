// utwórz typ Studenta

// utwórz funkcję generującą email studenta na podstawie indexu

// utwórz obiekt studenta wraz z typem

// wygeneruj i wyświetl email dla studenta

// skompiluj i uruchom kod

type Student = {
    firstName: string;
    lastName: string;
    index: number;
};

function createEmail(stud: Student) {
    return `${stud.index}@student.pwr.edu.pl`
}

const stud1: Student = {
    firstName: "Wojtek",
    lastName: "Kosmalski",
    index: 123456
}

console.log(createEmail(stud1))
console.log(stud1)
console.log('test watch mode')

