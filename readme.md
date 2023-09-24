# Switcheo Code Challenge - Frontend

This repository contains solutions to the following problems as part of the Switcheo Code Challenge for the Frontend development role:

1. **Problem 1: Three Ways to Sum to N**
   - Implementations for three different ways to sum to an integer `n` in JavaScript.
   - Three functions, `sum_to_n_a`, `sum_to_n_b`, and `sum_to_n_c`, demonstrate different approaches to solve this problem.
   - Each function is documented for clarity.

2. **Problem 2: Fancy Form**
   - The Fancy Form problem's solution is implemented in this repository.
   - [Provide a brief description of the Fancy Form problem and your solution here, if necessary.]

3. **Problem 3: Messy React**
   - The Messy React problem's solution is implemented.
   - The details are covered in the issues.txt file
   - The .keep file has the new implemented solution
   - The originalPrompts.ts file is the code from the original prompt

## Problem-Specific Details

### Problem 1: Three Ways to Sum to N

#### Solution

- Three JavaScript functions (`sum_to_n_a`, `sum_to_n_b`, and `sum_to_n_c`) are provided in the code.
-    1. **Method - 1: Using a Loop**
        - Time Complexity: O(n)
        - Space Complexity: O(1)
        - Implementation: This solution uses a loop to iterate from 1 to `n` and adds all the integers in the range.
     2. **Method - 2: Using AP Formula for n Consecutive Integers**
        - Time Complexity: O(1)
        - Space Complexity: O(1)
        - Implementation: This solution applies the arithmetic progression (AP) formula for the sum of n consecutive integers to calculate the sum.
     3. **Method - 3: Recursive Approach**
        - Time Complexity: O(n)
        - Space Complexity: O(n)
        - Implementation: This solution uses a recursive approach to calculate the sum by breaking it down into smaller subproblems.
   - Each function is documented for clarity.

### Problem 2: Fancy Form

#### Solution

The example sets up the basic structure of a currency swap form, including input fields for the input amount and output amount. It also includes a simple JavaScript logic for calculating the output amount based on predefined token prices and updating the output amount when the input amount changes. Will need help to put in more functionalities.

### Problem 3: Messy React

#### Solution

The Messy React problem is solved using React.js. The provided code presented several inefficiencies and anti-patterns, which have been addressed and optimized:

#### Code Improvements and Optimizations

##### Inefficient Sorting in `useMemo`

The original code sorts the `balances` array on each re-render, even if balances haven't changed. In the updated code, the sorting is optimized by using the `useMemo` hook with a dependency array that includes only `balances` and `prices`, ensuring that sorting only occurs when these dependencies change.

##### Mapping Arrays Separately

The original code separately mapped `sortedBalances` and `formattedBalances` arrays, resulting in unnecessary array iterations. In the updated code, the mapping operation is optimized by formatting balances and calculating `usdValue` directly within the `map` function, eliminating the need for an extra array (`formattedBalances`).

##### Inefficient `useEffect` Dependencies

In the original code, the `useEffect` hook had no dependency array, causing it to run on every render. In the updated code, the `useEffect` hook fetches prices only once when the component mounts by using an empty dependency array (`[]`).

##### Missing Implementation of Datasource

The code provided is incomplete as it lacks the implementation of the `Datasource` class. You need to implement this class to fetch prices, as indicated by the comment `// TODO: Implement datasource class` in the original code.

##### Error Handling

In the original code, there was an error in the error handling code where `console.err` was used instead of `console.error`. This issue was fixed in the updated code.

By addressing these issues and optimizing the code, the functionality, clarity, and maintainability of the React application have been significantly improved.



## Repository Structure

- `/problem1`: Contains the code for Problem 1.
- `/problem2`: Contains the code for Problem 2.
- `/problem3`: Contains the code for Problem 3.





