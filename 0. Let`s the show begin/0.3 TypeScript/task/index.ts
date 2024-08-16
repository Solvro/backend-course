/**
 * Created student type
 */
type Student = {
    firstName: string,
    lastName: string,
    index: number
}

/**
 * Function to generate student email, basic on student index
 * @param student
 */
function generatingStudentsEmail(student: Student): string  {
    return `${student.index}@pwr.edu.pl`
}

/**
 * Providing sample student data
 */
const studentMichal: Student = {
    firstName: "Michal",
    lastName: "Bialek",
    index: 264285
}
/**
 * Generating student email
 */
let email = generatingStudentsEmail(studentMichal);

/**
 * Displaying student email
 * @param studentEmail
 */
function displayEmail(studentEmail: string){
    console.log(studentEmail);
}


function main(){
    displayEmail(generatingStudentsEmail(studentMichal));
}

main();
