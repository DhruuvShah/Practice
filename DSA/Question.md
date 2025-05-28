if-else:
1. movie rating
2. profile based program
https://drive.google.com/file/d/1TvfLLb0VDj6qNpWGJtwlKueZHj8GIMjy/view?usp=sharing

3- Accept an english alphabet from user and check if it is a consonant or a vowel;

Loop:-

4. ISBN number: https://www.geeksforgeeks.org/program-check-isbn/
5. Harshad number
6. perfect square
7. Abundant number
8. Find Number of integers which has exactly x divisors using java
9. Program for Finding out the Prime Factors of a number in Java
10. Write a program to calculate the area of a
 circle, rectangle, and triangle using a switch statement
11. A neon number is a number where the sum of digits
 of the square of the number is equal to the number. 
   Input  : 9
Output : Given number  9 is Neon number

Explanation : square of 9=9*9=81;
              sum of digit of square : 
              8+1=9(which is equal to given number)
              -Armtsrong number
12. perfect number
13. friendly pairs : https://prepinsta.com/java-program/friendly-pair-or-notamicable-or-not-using-java/
14. Permutations in which n people can occupy r seats in a classroom : https://prepinsta.com/java-program/permutations-in-which-n-people-can-occupy-r-seats-in-a-classroom/
15. Maximum number of handshakes : https://prepinsta.com/java-program/maximum-number-of-handshakes/
16. Counting number of days in a given month of a year : https://prepinsta.com/java-program/counting-number-of-days-in-a-given-month-of-a-year/
17. For a given positive integer N, the purpose is to find the
 value of F2 + F4 + F6 +………+ F2n till N number.
 Where Fi indicates the i’th Fibonacci number.
   Input: n = 4
Output: 33
N = 4, So here the Fibonacci series will be produced from 0th term till 8th term:
0, 1, 1, 2, 3, 5, 8, 13, 21
Sum of numbers at even indexes = 0 + 1 + 3 + 8 + 21 = 33.

Input: n = 7
Output: 609
0 + 1 + 3 + 8 + 21 + 55 + 144 + 377 = 609.



// array
18. Given a sorted array of distinct elements, the task is to 
find the summation of absolute differences of all pairs in the given array.

Examples: 

Input : arr[] = {1, 2, 3, 4}
Output: 10
Sum of |2-1| + |3-1| + |4-1| +
       |3-2| + |4-2| + |4-3| = 10

19. You are given two arrays of **equal length**:

* An **integer array** `A[]`
* A **character array** `B[]`, where each character is one of `'a'`, `'b'`, or `'c'`

Each element in array `B` is associated with the corresponding element in array `A`, i.e., `B[i]` is linked to `A[i]` for all valid indices `i`.

---

### 🎯 **Task:**

Find the **minimum** value of the expression:

```
min(sum of values linked with 'a' + sum of values linked with 'b', 
    sum of values linked with 'c')
```

That is:

```
min(a_sum + b_sum, c_sum)
```

Where:

* `a_sum` = sum of all A[i] where B[i] == 'a'
* `b_sum` = sum of all A[i] where B[i] == 'b'
* `c_sum` = sum of all A[i] where B[i] == 'c'

---

### 🧾 Examples:

**Example 1:**

```
Input:
A[] = {3, 6, 4, 5, 6}
B[] = {'a', 'c', 'b', 'b', 'a'}

Output:
6

Explanation:
'a' → 3 + 6 = 9  
'b' → 4 + 5 = 9  
'c' → 6  
→ min(9 + 9, 6) = min(18, 6) = 6
```

---

**Example 2:**

```
Input:
A[] = {4, 2, 6, 2, 3}
B[] = {'b', 'a', 'c', 'a', 'b'}

Output:
5

Explanation:
'a' → 2 + 2 = 4  
'b' → 4 + 3 = 7  
'c' → 6  
→ min(4 + 7, 6) = min(11, 6) = 6
Oops! Looks wrong. Let's double check.

Actually:
→ a_sum = 2 + 2 = 4  
→ b_sum = 4 + 3 = 7  
→ c_sum = 6  
→ a + b = 4 + 4 = **8** (mistake before)

Still:
→ min(4 + 7 = 11, 6) = **6**

```

Input:
A\[] = {4, 2, 6, 1, 3}
B\[] = {'b', 'a', 'c', 'a', 'b'}

'a' → 2 + 1 = 3
'b' → 4 + 3 = 7
'c' → 6
→ min(3 + 7, 6) = min(10, 6) = 6

```
```


20. Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions.

a) The First element is replaced by the multiplication of the first and second. 
b) The last element is replaced by multiplication of the last and second last.

Example:  

Input  : arr[] = {2, 3, 4, 5, 6}
Output : arr[] = {6, 8, 15, 24, 30}

21. We are given an array of Integers. We have to perform the following operation on the array until it is fully exhausted. 

Select the max number in the array and delete that number including all the numbers to its right side in the array.
Repeat the step 1 for the left elements of the array i.e select the maximum element in the left elements  and delete it including all numbers to its right.
Our task is to simulate the above procedure and return the number of steps that will be taken until the first element(index 0) of the array is also deleted and array is said to be exhausted.

Input : Array = [2, 3, 5, 4, 1]
Output : Steps Taken: 3
Explanation: Step 1: Remove 5 and elements to its right
             so, Array becomes [2, 3]
             Step 2: Remove 3 as it is the maximum and 
             right most already so, Array becomes [2]
             Step 3: Remove 2 and the array becomes EMPTY
             Hence, at the end of step 3 the array stands 
             exhausted.


22.Given an array of even size, task is to find minimum value that can be added to an element so that array become balanced.
An array is balanced if the sum of the left half of the array elements is equal to the sum of right half. Suppose, we have an array 1 3 1 2 4 3.
The Sum of first three elements is 1 + 3 + 1 = 5 and sum of last three elements is 2 + 4 + 3 = 9 
So this is unbalanced, to make it balanced the minimum number we can add is 4 to any element in first half.

Examples : 

Input : 1 2 1 2 1 3
Output : 2
Sum of first 3 elements is 1 + 2 + 1 = 4, 
sum of last three elements is 2 + 1 + 3 = 6
To make the array balanced you can add 2.

Input : 20 10
Output : 10
19. Sort First half in Ascending and Second half in descending order in an array
20. find sum of minimum absolute difference of the given array
     https://prepinsta.com/java-program/to-find-sum-of-minimum-absolute-difference-of-the-given-array/



23. 2206. Divide Array Into Equal Pairs
24. 2341. Maximum Number of Pairs in Array  
25. 2154. Keep Multiplying Found Values by Two  

26. 2057. Smallest Index With Equal Value
27. 2169. Count Operations to Obtain Zero
28. 2357. Make Array Zero by Subtracting Equal Amounts 


29. 1979. Find Greatest Common Divisor of Array
30. 1732. Find the Highest Altitude
31. 2160. Minimum Sum of Four Digit Number After Splitting Digits
32. 2164. Sort Even and Odd Indices Independently

33. 2293. Min Max Game - Array
34. 2078. Two Furthest Houses With Different Colors
36. Print the count of subarrays whose sum is equal to the target.
	Ex - {1,2,3,7,5}, T = 12  O/P - 2 - [ {2,3,7}, {7,5} ] - Both the subarrays has sum 12 

37. Leetcode 1929 - Concatenation of array 
38. Leetcode 1920 - Build Array from Permutation


//string
39. Remove the vowels from a String 
40. Count Asterisks
41. 2278. Percentage of Letter in String
42. 2124. Check if All A's Appears Before All B's  
43. 2299. Strong Password Checker II
44. Greatest English Letter in Upper and Lower Case
45. 2283. Check if Number Has Equal Digit Count and Digit Value
46. 2243. Calculate Digit Sum of a String
47. 2068. Check Whether Two Strings are Almost Equivalent
48. 2042. Check if Numbers Are Ascending in a Sentence
49. 2000. Reverse Prefix of Word

   
//hashing
50. Replace each element of the array by its rank in the array
     https://prepinsta.com/java-program/to-replace-each-element-by-its-rank-in-the-given-array/
51. 2404. Most Frequent Even Element
52. 575. Distribute Candies 
53. 389. Find the Difference
54. 2062. Count Vowel Substrings of a String
55. 2053. Kth Distinct String in an Array
56. 645. Set Mismatch 
57. 804. Unique Morse Code Words
58. 819. Most Common Word



