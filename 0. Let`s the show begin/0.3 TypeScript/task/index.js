// utwórz funkcję generującą email studenta na podstawie indexu
var universityName = "pwr";
var countryName = "pl";
function generateStudentEmail(student) {
    return "".concat(student.index, "@student.").concat(universityName, ".edu.").concat(countryName);
}
// utwórz obiekt studenta wraz z typem
var student = {
    name: "John",
    surname: "Doe",
    index: 112233
};
// wygeneruj i wyświetl email dla studenta
console.log(generateStudentEmail(student));
// skompiluj i uruchom kod
