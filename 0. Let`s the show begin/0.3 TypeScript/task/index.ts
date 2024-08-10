type Student = {
    firstName:  string;
    lastName:   string;
    index:      number;
};

function getEmailFromStudent(student: Student): string {
    return `${student.index}@student.pwr.edu.pl`;
}

const exampleStudent: Student = {
    firstName: "Mateusz",
    lastName: "Płaska",
    index: 280480
};

console.log(getEmailFromStudent(exampleStudent));