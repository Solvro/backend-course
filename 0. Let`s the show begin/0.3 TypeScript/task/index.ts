// utwórz typ Studenta
type Student = {
    name: string;
    surname: string;
    index: number;
};

// utwórz funkcję generującą email studenta na podstawie indexu
let universityName: string = "pwr"
let countryName: string = "pl"

function generateStudentEmail(student: Student): string {
    return `${student.index}@student.${universityName}.edu.${countryName}`
}

// utwórz obiekt studenta wraz z typem
let student: Student = {
    name: "John",
    surname: "Doe",
    index: 112233
};

// wygeneruj i wyświetl email dla studenta
console.log(generateStudentEmail(student))

// skompiluj i uruchom kod