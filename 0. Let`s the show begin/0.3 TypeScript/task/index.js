function getEmail(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
var stud = {
    firstName: 'Jakub',
    lastName: 'Morawiec',
    index: 272411,
};
var email = getEmail(stud);
console.log(email);
