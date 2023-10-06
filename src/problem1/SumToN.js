// Problem 1: Three ways to sum to n

//Method - 1: Using a loop
//Time Complexity: O(n)  Space Complexity: O(1)
let sum_to_n_a = function(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

//Method - 2: Using AP formula for n consecutive integers
//Time Complexity: O(1)  Space Complexity: O(1) 
let sum_to_n_b = function(n) {
    return (n * (n + 1)) / 2;
};

//Method - 3: Recursive Approach
//Time Complexity: O(n)  Space Complexity: O(n)
let sum_to_n_c = function(n) {
    if (n === 1) {
        return 1;
    } else {
        return n + sum_to_n_c(n - 1);
    }
};

