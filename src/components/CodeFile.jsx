export const codeblock = {
python: 
`# HW02 (ไม่ลบหรือแก้ไขบรรทัดนี้ หรือเพิ่มอะไรก่อนบรรทัดนี้ โดยเด็ดขาด)
def get_sum(data):
        stud = []
        for i in range(0,len(data),2):
                if data[i] in stud:
                    pos = stud.index(data[i])
                    stud[pos+1].append(data[i+1])
                else:
                    stud.append(data[i])
                    stud.append([data[i+1]])
                
        for k in range(0,len(stud),2):
            if len(stud[k+1]) > 3:
                stud[k+1].remove(min(stud[k+1]))
                stud[k+1] = sum(stud[k+1])
            else:
                stud[k+1] = sum(stud[k+1])
                               
        return stud
    
    # -----------------------------
    d = [
      6610013121,4,
      6610021021,5, 6610021021,5,
      6610061121,5, 6610061121,5, 6610061121,1,
      6610000121,3, 6610000121,2, 6610000121,2, 6610000121,3
    ]
out = get_sum(d)
print(out) 
# ต้องแสดง [6610013121, 4, 6610021021, 10, 6610061121, 11, 6610000121, 8]
# ข้อแนะนำ: ควรทดสอบ get_sum ด้วยข้อมูลชุดอื่นด้วย (ลิสต์ d ข้างบนอาจมีไม่ครอบคลุมทุกกรณี)`
};