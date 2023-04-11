//practicing using let and const keyword redefined 

function circle(r = 0) {
    PI = Math.PI

    // To calculate the area of a circle
    let area = PI * (r ** 2);
    console.log(area);

    //to calculate the perimeter of a circle

    let perimeter = (2*PI) * r;
    console.log(perimeter); 
}

