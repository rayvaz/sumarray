# Find Prime Number Sum Array

## Problem 

Consider numbers 15, 16 and 18

15 = 3x5 and 3+5 = 8
16 = 2x2x2x2 and 2+2+2+2 = 8
18 = 2x3x3 and 2+3+3 = 8


We define G(k) as a sum of all the numbers ’n’, where the sum of prime numbers is equal to ‘k’. The ‘k’ starts at value 2 (1 is ommited).
Ex. G(8) = 15 + 16 + 18 = 49

Other examples: 
G(1) = 0
G(2) = 2
G(3) = 3      <= 3+0=3 so we just add 3
G(5) = 5 + 6 = 11 <=  2+3=5 so we add 2x3=6 && 5+0=5 so we just add 5
G(8) = 15 + 16 + 18 = 49


the fibonacci sequence is F1 =1, F2= 1, F3 = 2, F4=3, F5=5, F6=8

---
Give us the array of next 4 digits of the SUM, defined by SUM from=n (G(Fn)) to=n+3, while the is always n>2

---


## Install
First install dependencies.

`npm install`

## Test
Run the simple tests

`npm test`