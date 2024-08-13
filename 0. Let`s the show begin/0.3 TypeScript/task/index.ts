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

function getStudentEmail(student: Student): string {
  return `${student.index}@student.pwr.edu.pl`;
}

const ziutek: Student = {
  firstName: "Ziutek",
  lastName: "Ziutson",
  index: 101010,
};

console.log(getStudentEmail(ziutek));
