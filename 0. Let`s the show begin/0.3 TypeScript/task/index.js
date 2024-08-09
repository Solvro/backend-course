// utwórz funkcję generującą email studenta na podstawie indexu
function generateEmailFromStudent(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
// utwórz obiekt studenta wraz z typem
var student = {
    firstName: "Tomasz",
    lastName: "Trela",
    index: 280598
};
// wygeneruj i wyświetl email dla studenta
console.log(generateEmailFromStudent(student));
// skompiluj i uruchom kod
