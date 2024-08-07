// utwórz typ Studenta
function createEmail(stud) {
    return "".concat(stud.index, "@student.pwr.edu.pl");
}
var stud1 = {
    firstName: "Wojtek",
    lastName: "Kosmalski",
    index: 123456
};
console.log(createEmail(stud1));
console.log(stud1);
