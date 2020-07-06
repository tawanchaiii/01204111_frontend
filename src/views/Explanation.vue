<template>
  <div id="Explanation">
    <v-container fluid>
      <!-- Explanation Card -->
      <v-row class="justify-center align-center mb-8">
        <v-col xs="6" sm="8" md="10" lg="10" xl="12">
          <v-card raised>
            <!-- explanation title -->
            <v-card-title class="display-2 font-weight-bold">
              <p class="ma-0 pa-0 mb-3">
                คำชี้แจง | Explanation
              </p>
            </v-card-title>

            <!-- explanation subtitle -->
            <v-card-subtitle class="body-2 text--primary">
              <p class="ma-0 pa-0 mb-1">
                กรุณาอ่าน และทำความเข้าใจข้อความต่อไปนี้เพื่อประโยชน์ของผู้ทำการทดสอบเอง
              </p>
            </v-card-subtitle>

            <v-divider></v-divider>

            <!-- explanation text -->
            <v-card-text class="body-1 text--primary">
              <p class="ma-0 pa-0 mb-1">
                แบบทดสอบชุดนี้ประกอบไปด้วยแบบทดสอบอัตนัยจำนวน 6 ข้อ
                และแบบทดสอบปรนัยจำนวน 40 ข้อ ซึ่งแบ่งออกเป็น 3 ส่วนดังนี้
              </p>
              <p class="ma-0 pa-0 mb-1">
                <span class="tab" /><u><b>ส่วนที่ 1:</b></u> ความสนใจและความคาดหวังต่อการเรียนในภาควิชาคอมพิวเตอร์
                  คณะวิศวกรรมศาสตร์ ( อัตนัยจำนวน 3 ข้อ )
              </p>
              <p class="ma-0 pa-0 mb-1">
                <span class="tab" /><u><b>ส่วนที่ 2:</b></u> ความรู้ทั่วไปเกี่ยวกับการใช้งานคอมพิวเตอร์
                และระบบปฏิบัติการ UNIX ขั้นพื้นฐาน
              ( ปรนัยจำนวน 40 ข้อ )
              </p>
              <p class="ma-0 pa-0 mb-1">
                <span class="tab" /><u><b>ส่วนที่ 3:</b></u> การเขียนโปรแกรมจำนวน
                3 ข้อ กำหนดให้ส่งเป็นไฟล์โปรแกรมที่ไม่ใช่ไฟล์ไบนารี่ขนาดไม่เกิน 1 mb จำนวน 1 ไฟล์ 
                ( หากไม่สามารถเขียนโปรแกรมได้สามารถอธิบายแนวคิดแล้วบันทึกส่งด้วยไฟล์สกุล .txt )
              </p>
              <p class="ma-0 pa-0">
                <span class="tab" />
              </p>
              <p class="ma-0 pa-0 mb-1">
                การทดสอบในครั้งนี้ มีเวลาทำทั้งหมด 2 ชั่วโมง 30 นาที โดยเริ่มตั้งแต่เมื่อนิสิต<b 
                  >กดเริ่มทำข้อสอบ (Start Test)</b
                >
                และการทดสอบจะเสร็จสิ้นเมื่อ <b
                  >กดปุ่มเสร็จสิ้นการทดสอบ (Finish)</b
                >
                หากกดปุ่มเสร็จสิ้นการทดสอบจะไม่สามารถแก้หรือส่งข้อสอบได้อีก ในกรณีที่หมดเวลาคำตอบทั้งหมดจะถูกส่งโดยอัตโนมัติ
              </p>
              <p class="ma-0 pa-0">
                <span class="tab" />
              </p>
              <p class="ma-0 pa-0 mb-1">
                <b>
                  การทดสอบครั้งนี้มีจุดประสงค์เพื่อวัดระดับความรู้พื้นฐานของนิสิต
                  ซึ่งผลการทดสอบนี้ไม่มีผลต่อคะแนนในทุกรายวิชา ดังนั้นจึงควรซื่อสัตย์และทำแบบทดสอบด้วยตนเอง
                  ( ไม่อนุญาตให้เปิดเว็บไซต์เพื่อหาคำตอบยกเว้นเว็บไซต์่ Text Editor เพื่อเขียนโปรแกรม หรือค้นหาคำตอบจากแหล่งอื่น ) เพื่อผลประโยชน์ของนิสิตเอง
               </b>
              </p>
              <p class="ma-0 pa-0">
                <span class="tab" />
              </p>
              <p class="ma-0 pa-0 mb-1">
                นิสิตไม่ต้อเป็นกังวลใดๆ
                หากนิสิตทำแบบทดสอบในครั้งนี้ไม่ได้
                หลังจากผ่านการเรียนการสอนรายวิชา Computer and Programing (01204111)
                นิสิตจะสามารถเข้าใจ และทำได้ด้วยตนเอง
              </p>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="text-center text--primary">
              <h3>ขอให้พลังจงสถิตอยู่กับท่าน</h3>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <!-- button -->
      <v-row class="text-center justify-center align-bottom mb-12">
        <v-col class="mb-8" cols="12">
          <v-btn x-large color="primary" @click="$router.push('/pre_test')">
            Start Test
          </v-btn>
        </v-col>
      </v-row>

      <!-- footer -->
      <Footer></Footer>
    </v-container>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Explanation",
  components: {
    Footer,
  },
  data() {
    return {
    }
  },
};
</script>

<style scoped>
.tab {
  padding-left: 2em;
}
.fade {
  opacity: 0.3;
}
</style>
