function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
      return  grade = 'A';
    } 
     if (score > 20 && score <= 25) {
        console.log(grade = 'B');
    } 
    if (score > 15 && score <= 20) {
        console.log (grade = 'C');
    } 
    if (score > 10 && score <= 15) {
        console.log(grade = 'D');
    }  
    if (score > 5 && score <= 10) {
       console.log(grade = 'E');
    } 
    if (score > 0 && score <= 5) {
       console.log(grade = 'F');
    } else {
        'this is not working'
    }
    
    //return grade;
}

getGrade(40);