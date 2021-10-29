<template>
  <div class="s1">
    <div class="left">
      <div class="info">
        <img
          data-aos="flip-left"
          class="title"
          src="@/assets/team/s3/left-title.svg"
          alt=""
          srcset=""
        />
        <div class="subtitle" data-aos="flip-down">
          豪邸推手<br />層峰創思藝術
        </div>
        <div class="content" data-aos="fade">
          富士比及商業週刊首選亞洲十大豪宅，團隊即參與七案設計。30年資深見識，世界觀高規胸襟，第一流團隊力量，縱橫兩岸三地大城市地標，業界領先地位屹立不搖。
        </div>
        <div class="work" data-aos="fade-up">
          <h2>知名作品 :</h2>
          ■陶朱隱園&nbsp;&nbsp;■皇翔御琚&nbsp;&nbsp;■信義ONEPARK&nbsp;&nbsp;■遠雄九五&nbsp;&nbsp;■THE
          ONE
        </div>
      </div>
    </div>
    <div class="right">
      <div class="info">
        <img
          class="title"
          src="@/assets/team/s3/right-title.svg"
          alt=""
          srcset=""
          data-aos="flip-left"
          data-aos-delay="400"
        />
        <div class="subtitle" data-aos="flip-down" data-aos-delay="400">
          建築活字典<br />林口新風範
        </div>
        <div class="content" data-aos="fade" data-aos-delay="400">
          縱橫業界30年，享有建築活字典美譽，簡俊卿建築師2021年淳白美學新經典代表作，在林口時尚特區，以紐約ARTDECO新經典，立下百年雋永地標。
        </div>
        <div class="work" data-aos="fade-up" data-aos-delay="400">
          <h2>知名作品 :</h2>
          ■華固天鑄&nbsp;&nbsp;■榮耀世紀&nbsp;&nbsp;■國美新美館&nbsp;&nbsp;■世紀匯
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s1 {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;

  .left {
    background-image: url("../../assets/team/s3/left.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    flex: 1;
    position: relative;
  }
  .right {
    background-image: url("../../assets/team/s3/right.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    flex: 1;
    position: relative;
  }
  .info {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #fff;
    letter-spacing: size(3);
    left: 0;
    bottom: 0;
    padding-left: size(100);
    padding-bottom: size(200);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    .title {
      position: absolute;
      right: size(170);
      top: size(300);
      width: size(103);
    }
    .subtitle {
      font-size: size(48);
      line-height: 1.5;
      font-weight: 500;
      margin-bottom: size(30);
    }
    .content {
      font-size: size(20);
      line-height: 1.5;
      width: size(600);
    }
    .work {
      font-size: size(20);
      h2 {
        font-size: size(24);
        margin-bottom: size(20);
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.$store.commit('toggleNavbar', true)
  },
}
</script>