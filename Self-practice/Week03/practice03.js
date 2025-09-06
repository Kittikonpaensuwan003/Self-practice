//นำโจทย์ที่ยังไม่ค่อยเข้าใจมาทำใหม่อีกครั้ง และใช้ chat gpt ช่วยอธิบายส่วนที่ไม่เข้าใจ

/**
 * นับความถี่ของ "คำ" ในข้อความที่รับเข้ามา
 * - รับเฉพาะ string ที่ไม่ว่าง (trim แล้วต้องไม่เป็น "")
 * - ไม่สนตัวพิมพ์ใหญ่/เล็ก (แปลงเป็น lower case)
 * - ตัดคำแบบรองรับยูนิโค้ด (ภาษาและตัวอักษรหลากหลาย) ด้วย RegExp
 * - คืนค่าเป็นอ็อบเจ็กต์ { คำ: จำนวนครั้ง }
 * - ถ้าข้อมูลไม่ใช่ string หรือเป็นข้อความว่าง → คืน undefined
 */
function getWordFrequency(text) {
  // 1) Validation ขั้นต้น
  if (typeof text !== 'string') return undefined;      // ประกันว่าเป็น string เท่านั้น
  const trimmed = text.trim();                          // ตัดช่องว่างหัวท้าย
  if (trimmed === '') return undefined;                 // ถ้าว่างหลัง trim → undefined

  // 2) Normalize ตัวอักษรให้เทียบได้ง่าย (ไม่สน case)
  const lower = trimmed.toLowerCase();

  /**
   * 3) Tokenize (แยกคำ)
   * ใช้ RegExp แบบยูนิโค้ดเพื่อ "ดึงคำ" ที่ประกอบด้วย:
   * \p{L}    = ตัวอักษรทุกภาษา (Letter)
   * \p{N}    = ตัวเลข
   * ' -      = อนุญาตเครื่องหมาย ' และ - อยู่ในคำ เช่น don't, state-of-the-art
   * รูปแบบ: เริ่มด้วย Letter แล้วตามด้วย [Letter/Number/'/-] ต่อเนื่องได้
   * ธง u     = โหมดยูนิโค้ด
   * ธง g     = ค้นหาทั้งสตริง (global)
   *
   * ผลลัพธ์: ได้อาร์เรย์ของ "คำ" (ถ้าไม่เจอจะได้ null → เราแปลงเป็น [])
   */
  const tokens = lower.match(/\p{L}[\p{L}\p{N}'-]*/gu) || [];

  // 4) นับความถี่
  const freq = {};
  for (const tk of tokens) {
    // ใช้ Nullish coalescing (??) ป้องกัน undefined แล้วบวก 1
    freq[tk] = (freq[tk] ?? 0) + 1;
  }

  // 5) คืนผลลัพธ์
  return freq;
}






