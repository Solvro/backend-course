// utwórz typ Studenta
function getStudentEmail(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
var ziutek = {
    firstName: "Ziutek",
    lastName: "Ziutson",
    index: 101010,
};
console.log(getStudentEmail(ziutek));
