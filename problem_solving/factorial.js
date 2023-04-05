// question gotten for hackerrank
// using recursion to solve the problem

function factorial(n) {
    if(n ==1) {
        return 1
    } else {
       return n * factorial(n - 1)
    }
}