type Student = {
    firstName: string;
    lastName: string;
    index: number;
}

function generateEmailForStudent(student: Student) {
    return `${student.index}@student.pwr.edu.pl`;
}

const student :Student = {
    firstName: "John",
    lastName: "Doe",
    index: 213742
};

console.log(generateEmailForStudent(student));