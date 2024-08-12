// utwórz funkcję generującą email studenta na podstawie indexu
function generateEmail(student) {
    return "".concat(student.index, "@pwr.edu.pl");
}
// utwórz obiekt studenta wraz z typem
var studentDebil = {
    firstName: "Student",
    lastName: "Debilski",
    index: 198912
};
// wygeneruj i wyświetl email dla studenta
console.log(generateEmail(studentDebil));
// skompiluj i uruchom kod
