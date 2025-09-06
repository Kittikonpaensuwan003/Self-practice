// object literal 
// ให้แชท gpt เจนโจทย์ให้จากไฟล์ที่เรียนในห้อง และให้ chat ช่วยอธิบายการทำงานในส่วนที่ไม่เข้าใจ

//ข้อ 1

//สร้างอ็อบเจ็กต์ด้วย object literal
// และลองสร้าง username ซ้ำเพื่อดูว่าค่าไหนถูกใช้ 
// เพิ่มคีย์แบบคำนวณชื่อคีย์ (computed property name)
const personAge = 22;

const profile = {
  username: "arm",
  age: 20,  
  username: "Armin",                    // คีย์ซ้ำ ค่านี้ทับค่าเดิม เมื่อมีคีย์ชื่อเดียวกันใน literal ตัวท้ายสุด ทับค่า ตัวก่อนหน้า(overwrite)
  ["level_" + personAge]: personAge < 25 ? "junior" : "senior" // computed key   
};

// ? Conditional (ternary) operator ตัดสินใจสองค่าอย่างรวดเร็ว

console.log(profile);
// { username: 'Armin', age: 20, level_22: 'junior' }


//ข้อ 2
class User {
  constructor(nickname, years) {
    this.nickname = nickname;   // this อ้างถึงอินสแตนซ์ที่กำลังสร้าง
    this.years = years;
  }
  describe() {
    return `${this.nickname} (${this.years})`;      
  }                                                     // เมธอดอินสแตนซ์ ถูกเก็บบน prototype ของคลาส (ใช้หน่วยความจำร่วมกัน)
  haveBirthday() {
    this.years += 1;
    return this.years;
  }
}

const u1 = new User("mint", 19); //สร้างอินสแตนซ์ใหม่
console.log(u1.describe());   // "mint (19)"
console.log(u1.haveBirthday()); // 20





































