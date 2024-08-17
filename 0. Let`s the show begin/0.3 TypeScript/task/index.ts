type Student = {
    firstName: string;
    lastName: string;
    index: number;
}

const generateEmail = (student: Student): string => {
    return `${student.index}@student.pwr.edu.pl`;
}

const student: Student = {
    firstName: 'Your',
    lastName: 'Mother',
    index: 123456
}

console.log(generateEmail(student));