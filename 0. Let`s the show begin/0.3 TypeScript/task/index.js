function generateEmail(student) {
    return student.index + "@student.pwr.edu.pl";
}
var student = {
    firstName: "Yan",
    lastName: "Samokar",
    index: 280568
};
console.log(generateEmail(student));
