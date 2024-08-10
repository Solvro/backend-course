type Student = {
    firstName:string,
    lastName:string,
    index:Number

}

function getEmail(s : Student) {
    return `${s.index}@student.pwr.edu.pl`;
}

const samplestudent : Student = {
    firstName: "Bartek",
    lastName: "Fopke",
    index: 284241
}

console.log(getEmail(samplestudent))

// utwórz typ Studenta

// utwórz funkcję generującą email studenta na podstawie indexu

// utwórz obiekt studenta wraz z typem

// wygeneruj i wyświetl email dla studenta

// skompiluj i uruchom kod