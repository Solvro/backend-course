type Student = {
    firstName:string;
    lastName:string;
    index:number;
    
  };
  
  function studentEmail(user: Student): string {
    return user.firstName + user.lastName + '.' + user.index + '@student.pwr.edu.pl';
  }
  
  const student1: Student = {
    firstName:'szymon',
    lastName:'protyński',
    index:280479,
  };
  
  const getStudentsEmail: string = studentEmail(student1);
  
  console.log(getStudentsEmail);

  