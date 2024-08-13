type Student = {
    firstName: string;
    lastName: string;
    index: number;
};

function generateEmail (student: Student) {
    return `${student.index}@student.pwr.edu.pl`;
}

const firstStudent: Student = {
    firstName: 'Dawid',
    lastName: 'Blaszczyk',
    index: 234523,
};

console.log(generateEmail(firstStudent));