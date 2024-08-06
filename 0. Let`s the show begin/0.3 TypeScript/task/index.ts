// utwórz typ Studenta
type Student = {
    firstName:string;
    lastName:string;
    index:number;
}
// utwórz funkcję generującą email studenta na podstawie indexu
const generateMail = (student:Student) => {
    return `${student.index}@student.pwr.edu.pl`
}
// utwórz obiekt studenta wraz z typem
const newStudent: Student = {
    firstName: 'Kamil',
    lastName: 'Fedio',
    index: 279932
}
// wygeneruj i wyświetl email dla studenta
const mail:string = generateMail(newStudent)
console.log(mail);

// skompiluj i uruchom kod