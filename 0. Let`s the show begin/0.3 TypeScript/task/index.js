var getStudentEmail = function (student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
};
var debil = {
    firstName: 'Mateusz',
    lastName: 'Topczewski',
    index: 266497,
};
console.log(getStudentEmail(debil));
