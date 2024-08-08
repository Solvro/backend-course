// utwórz typ Studenta
var createEmail = function (student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
};
var sampleStudent = {
    firstName: "Robert",
    lastName: "Kubica",
    index: 123456,
};
console.log(createEmail(sampleStudent));
