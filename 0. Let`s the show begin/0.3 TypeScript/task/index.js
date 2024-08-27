// utwórz typ Studenta
function generateEmail(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
var student1 = {
    firstName: "Marcin",
    lastName: "Dolatowski",
    index: 272680,
};
console.log(generateEmail(student1));
