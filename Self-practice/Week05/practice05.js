/* 01) sumTwoNumbers
   เขียนฟังก์ชันรับเลข 2 ตัวแล้ว return ผลบวก */
function sumTwoNumbers(a, b) {
  return a + b;
}
console.log(sumTwoNumbers(3, 7)); 

/* 02) isEven
   เขียนฟังก์ชันตรวจว่าเลขที่รับเข้ามาเป็นเลขคู่หรือไม่ */
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 

/* 03) reverseString
   เขียนฟังก์ชันกลับสตริง */
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

/* 04) findMin
   เขียนฟังก์ชันคืนค่าที่น้อยที่สุดใน array ของตัวเลข */
function findMin(arr) {
  return Math.min(...arr);
}
console.log(findMin([5, 2, 9, 1])); 

/* 05) countVowels
   เขียนฟังก์ชันนับจำนวนสระ (a,e,i,o,u) ใน string */
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("Javascript")); 

/* 06) uniqueArray
   เขียนฟังก์ชันลบค่าซ้ำใน array */
function uniqueArray(arr) {
  return [...new Set(arr)];
}
console.log(uniqueArray([1, 2, 2, 3, 4, 4])); 

/* 07) factorial
   เขียนฟังก์ชันหาค่า n! (factorial) ด้วย recursion */
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5)); 
/* 08) fibonacci
   เขียนฟังก์ชันคืน array ของเลข Fibonacci n ตัวแรก */
function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq.slice(0, n);
}
console.log(fibonacci(7)); 

/* 09) isPalindrome
   เขียนฟังก์ชันตรวจว่าสตริงเป็น palindrome หรือไม่ */
function isPalindrome(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return s === s.split("").reverse().join("");
}
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("Hello"));  

/* 10) flattenArray
   เขียนฟังก์ชัน flattenArray(arr) ที่แปลง array ซ้อนกันหลายชั้นให้แบน */
function flattenArray(arr) {
  return arr.reduce(
    (flat, item) =>
      flat.concat(Array.isArray(item) ? flattenArray(item) : item),
    []
  );
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
