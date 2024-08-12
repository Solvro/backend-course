// utwórz typ Studenta
// utwórz funkcję generującą email studenta na podstawie indexu
var getStudentEmail = function (student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
};
// utwórz obiekt studenta wraz z typem
var lennon = {
    firstName: "John",
    lastName: "Lennon",
    index: 123456,
};
// wygeneruj i wyświetl email dla studenta
var lennonEmail = getStudentEmail(lennon);
console.log(lennonEmail);
// skompiluj i uruchom kod
