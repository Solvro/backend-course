// utwórz typ Studenta

interface Student {
  firstName: string;
  lastName: string;
  index: number;
}

// utwórz funkcję generującą email studenta na podstawie indexu

const getStudentEmail = (student: Student) => {
  return `${student.index}@student.pwr.edu.pl`;
};

// utwórz obiekt studenta wraz z typem

const lennon: Student = {
  firstName: "John",
  lastName: "Lennon",
  index: 123456,
};

// wygeneruj i wyświetl email dla studenta

const lennonEmail = getStudentEmail(lennon);
console.log(lennonEmail);

// skompiluj i uruchom kod
