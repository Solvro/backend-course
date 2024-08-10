function getEmailFromStudent(student) {
    return "".concat(student.index, "@student.pwr.edu.pl");
}
var exampleStudent = {
    firstName: "Mateusz",
    lastName: "Płaska",
    index: 280480
};
console.log(getEmailFromStudent(exampleStudent));
