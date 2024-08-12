// utwórz typ Studenta
type Student = {
    firstName: string;
    lastName: string;
    index: number;
}
// utwórz funkcję generującą email studenta na podstawie indexu

function generateEmail (student: Student){
    return `${student.index}@pwr.edu.pl`
}

// utwórz obiekt studenta wraz z typem
const studentDebil: Student ={
    firstName: "Student",
    lastName: "Debilski",
    index: 198912
}

// wygeneruj i wyświetl email dla studenta
console.log(generateEmail(studentDebil))
// skompiluj i uruchom kod