<template>
  <div class="page">
    <p class="small">PEOPLE / 人を知る</p>
    <h1>教員</h1>

    <div class="profile">
      <div class="info">
        <h2>教員</h2>
        <p>名前</p>
        <p class="blank"></p>
        <p>担当教科</p>
        <p class="blank"></p>
        <p>ひとこと紹介</p>
        <p class="blank"></p>
      </div>
      <div class="photo">写真</div>
    </div>

    <div class="section">
      <h2>01 研究</h2>
      <p>研究テーマ</p>
      <p class="blank"></p>
      <p>取り組んでいること・おもしろさ</p>
      <p class="text"></p>
    </div>

    <div class="section">
      <h2>02 趣味</h2>
      <p>好きなこと・休日の過ごし方</p>
      <p class="text"></p>
    </div>

    <div class="message">
      <h2>03 本人から</h2>
      <p class="text"></p>
    </div>

    <p class="footer">PEOPLE</p>
  </div>
</template>

<style scoped>
.page {
  box-sizing: border-box;
  width: 794px;
  max-width: 100%;
  margin: 30px auto;
  padding: 40px;
  background: #fbfaf6;
  color: #29433d;
  font-family: sans-serif;
}

h1 {
  font-size: 26px;
  border-bottom: 1px solid #6c897d;
  padding-bottom: 15px;
}

h2 {
  font-size: 18px;
}

p {
  font-size: 13px;
  line-height: 1.8;
}

.small {
  font-size: 11px;
}

.profile {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 25px;
}

.info {
  flex: 1;
  min-width: 180px;
}

.photo {
  width: 160px;
  height: 200px;
  background: #eef0e8;
  border: 1px dashed #bdc9bd;
  text-align: center;
  line-height: 200px;
  font-size: 13px;
}

.blank {
  min-height: 25px;
  border-bottom: 1px solid #ccd4c9;
}

.section {
  margin-top: 30px;
  border-bottom: 1px solid #ccd4c9;
}

.text {
  min-height: 100px;
}

.message {
  margin-top: 30px;
  padding: 15px 20px;
  background: #e9efe5;
}

.footer {
  margin-top: 30px;
  padding-top: 10px;
  border-top: 1px solid #ccd4c9;
  font-size: 10px;
}
</style>