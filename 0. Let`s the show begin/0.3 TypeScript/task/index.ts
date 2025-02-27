interface Student {
    firstName: string;
    lastName: string;
    index: number;
}

const getStudentEmail = (student: Student): string => {
    return `${student.index}@student.pwr.edu.pl`;
};

const debil: Student = {
    firstName: 'Mateusz',
    lastName: 'Topczewski',
    index: 266497,
};

console.log(getStudentEmail(debil));
