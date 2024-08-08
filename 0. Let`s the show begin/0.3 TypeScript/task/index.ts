interface Student {
  firstName: string;
  lastName: string;
  index: number;
}

const generateEmail = (student: Student) =>
  `${student.index}@student.pwr.edu.pl`;

const student = {
  firstName: "Bartosz",
  lastName: "Gotowski",
  index: 272647,
} satisfies Student;

console.log(generateEmail(student));
