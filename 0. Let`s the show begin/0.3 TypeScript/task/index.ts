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

function generateEmail(student: Student) {
  return `${student.index}@student.pwr.edu.pl`;
}

const student1: Student = {
  firstName: "Marcin",
  lastName: "Dolatowski",
  index: 272680,
};

console.log(generateEmail(student1));
