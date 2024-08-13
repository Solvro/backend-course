// utwórz typ Studenta
type Student = {
  firstName: string;
  lastName: string;
  index: number;
};

// utwórz funkcję generującą email studenta na podstawie indexu
const getEmailFromStudent = (student: Student): string => `${student.index}@pwr.edu.pl`;

//utwórz obiekt studenta wraz z typem
 const Patryk: Student = {
     firstName: "Patryk",
     lastName: "Kuzdrowski",
     index: 284073
 }
// wygeneruj i wyświetl email dla studenta

console.log(getEmailFromStudent(Patryk))

// skompiluj i uruchom kod
