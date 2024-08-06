// utwórz funkcję generującą email studenta na podstawie indexu
var generateMail = function (student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
};
// utwórz obiekt studenta wraz z typem
var newStudent = {
    firstName: 'Kamil',
    lastName: 'Fedio',
    index: 279932
};
// wygeneruj i wyświetl email dla studenta
var mail = generateMail(newStudent);
console.log(mail);
// skompiluj i uruchom kod
