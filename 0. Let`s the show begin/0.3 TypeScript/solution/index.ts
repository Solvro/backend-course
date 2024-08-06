type Student = {
    firstName: string;
    lastName: string;
    index: number;
}

function getEmailFromStudent(student: Student): string {
    return `${student.index}@pwr.edu.pl`
}

const studentDawid: Student = {
    firstName: "Dawid",
    lastName: "Linek",
    index: 273905
}

console.log(getEmailFromStudent(studentDawid))