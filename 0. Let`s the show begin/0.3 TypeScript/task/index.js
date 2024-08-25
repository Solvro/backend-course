function studentEmail(user) {
    return user.firstName + user.lastName + '.' + user.index + '@student.pwr.edu.pl';
}
var student1 = {
    firstName: 'szymon',
    lastName: 'protyński',
    index: 280479,
};
var getStudentsEmail = studentEmail(student1);
console.log(getStudentsEmail);
