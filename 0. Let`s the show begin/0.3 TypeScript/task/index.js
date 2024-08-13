function generateEmail(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
var firstStudent = {
    firstName: 'Dawid',
    lastName: 'Blaszczyk',
    index: 234523,
};
console.log(generateEmail(firstStudent));
