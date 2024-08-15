type Student = {
    firstName: string,
    lastName: string,
    index: number
}

function generateEmail(student: Student): string {
    return student.index + "@student.pwr.edu.pl";
}

let student: Student = {
    firstName: "Yan",
    lastName: "Samokar",
    index: 280568
}

console.log(generateEmail(student));