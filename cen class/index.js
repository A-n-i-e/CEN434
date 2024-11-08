let A = [1,2,3,4,5,6,7,8,9,10];

let sum = 0;
for (let i = 0; i < A.length; i++) {
    sum += A[i];
}
let average = sum / A.length;
console.log("Average:", average);

// Question 2

function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
    }
    let myMatricNo=92;
    console.log("The factorial of the last digits of my matric no is: ", factorial(myMatricNo)); 


//Question 3

function combination(X,Y){
    let X_factorial = factorial(X);
    let Y_factorial = factorial(Y);
    if (X>Y){
        let X_Y_factorial = factorial(X-Y);
        return X_factorial/(X_Y_factorial*Y_factorial);
    }
    else if (Y>X){
        let Y_X_factorial = factorial(Y-X);
        return Y_factorial/(Y_X_factorial*X_factorial);
    }
    else{
        let X_1_factorial = factorial(X+1);
        let X_Y_factorial = factorial((X+1)-Y);
        return X_1_factorial/(X_Y_factorial*Y_factorial);
    }
    
}
console.log("The combination of X and Y is: ", combination(2,5));