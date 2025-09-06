
// ------------------ 1. filter() ------------------
// โจทย์: จากลิสต์ชื่อเมือง ให้เลือกเมืองที่ชื่อมีตัวอักษร ≤ 5 ตัว

const cities = ['Tokyo','Rome','Paris','Bangkok','Oslo'];

const shortCities = cities.filter((c) => c.length <= 5);
console.log(shortCities);  // ['Rome','Paris','Oslo']


// ------------------ 2. map() ------------------
// โจทย์: เปลี่ยนชื่อเมืองทั้งหมดให้เป็นตัวพิมพ์ใหญ่

const upperCities = cities.map((c) => c.toUpperCase());
console.log(upperCities);  // ['TOKYO','ROME','PARIS','BANGKOK','OSLO']


// ------------------ 3. map() + filter() ------------------
// โจทย์: จาก array ของนักเรียน ดึง id ของนักเรียน แล้วเลือก id ที่เป็นเลขคี่ออกมา

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const oddIds = students.map((s) => s.id).filter((id) => id % 2 !== 0);
console.log(oddIds);  // [1,3]


// ------------------ 4. includes() ------------------
// โจทย์: จากลิสต์ผลไม้ ให้หาเฉพาะคำที่มีคำว่า "berry"

const fruits = ['Strawberry','Mango','Blueberry','Orange'];
const berries = fruits.filter((f) => f.toLowerCase().includes("berry"));
console.log(berries);  // ['Strawberry','Blueberry']


// ------------------ 5. find() ------------------
// โจทย์: ตรวจสอบว่ามีคำว่า "orange" อยู่ใน array หรือไม่

const check = fruits.find((f) => f.toLowerCase().includes("orange"));
if(check !== undefined){
  console.log("has orange");
}
else{
  console.log("does not have orange");
}









































































































