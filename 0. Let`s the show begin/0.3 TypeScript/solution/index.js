function getEmailFromStudent(student) {
    return "".concat(student.index, "@pwr.edu.pl");
}
var studentDawid = {
    firstName: "Dawid",
    lastName: "Linek",
    index: 273905
};
console.log(getEmailFromStudent(studentDawid));
