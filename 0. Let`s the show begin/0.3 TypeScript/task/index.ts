// utwórz typ Studenta
type Student = {
    firstName: string;
    lastName: string;
    index: number;
  };

// utwórz funkcję generującą email studenta na podstawie indexu
function generateStudEmail(student) {
    return `${student.index}@student.pwr.edu.pl`;
  }
// utwórz obiekt studenta wraz z typem
let student1: Student = {
    firstName: "Dawid",
    lastName: "Linek",
    index: 696969
};
// wygeneruj i wyświetl email dla studenta
console.log(generateStudEmail(student1));
// skompiluj i uruchom kod