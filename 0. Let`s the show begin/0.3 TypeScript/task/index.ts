// utwórz typ Studenta
type Student = {
    firstName: string;
    lastName: string;
    index: number;
}
// utwórz funkcję generującą email studenta na podstawie indexu
function generateEmailFromStudent(student: Student){
    return `${student.index}@student.pwr.edu.pl`
}
// utwórz obiekt studenta wraz z typem
const student: Student = {
    firstName: "Tomasz",
    lastName: "Trela",
    index: 280598
}
// wygeneruj i wyświetl email dla studenta
console.log(generateEmailFromStudent(student));

// skompiluj i uruchom kod