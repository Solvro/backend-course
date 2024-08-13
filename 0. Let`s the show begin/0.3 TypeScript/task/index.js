// utwórz funkcję generującą email studenta na podstawie indexu
var getEmailFromStudent = function (student) { return "".concat(student.index, "@pwr.edu.pl"); };
//utwórz obiekt studenta wraz z typem
var Patryk = {
    firstName: "Patryk",
    lastName: "Kuzdrowski",
    index: 284073
};
// wygeneruj i wyświetl email dla studenta
console.log(getEmailFromStudent(Patryk));
// skompiluj i uruchom kod
