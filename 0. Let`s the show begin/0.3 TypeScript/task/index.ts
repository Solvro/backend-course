type Student = {
    firstName: string
    lastName: string
    index: number
}

function getEmail(student: Student): string {
    return `${student.index}@student.pwr.edu.pl`
}

const stud: Student = {
    firstName: 'Jakub',
    lastName: 'Morawiec',
    index: 272411,
}

const email = getEmail(stud)
console.log(email)
