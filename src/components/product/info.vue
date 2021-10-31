<template>
  <div class="info">
    <div class="left" data-aos="fade" 
        data-aos-duration="1000">
      <p>3D外觀透視圖</p>
    </div>
    <div class="right" 
        data-aos="fade-up"
        data-aos-duration="1000"
        >
      <div
        class="right-item"
        v-for="item in info"
        :key="item.key"
      >
        <div class="key" v-html="item.key"></div>
        <div class="val" v-html="item.val"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.info {
  position: relative;
  width: size(1799);
  //   height: size(877);
  height: 80%;
  background-color: #fff;
  z-index: 10;
  transform: translate(-50%, -50%);
  top: size(20);
  left: 50%;
  top: 50%;
  border-radius: size(50);
  display: flex;
  overflow: hidden;
  font-size: size(22);
  .left {
    flex: 0.32;
    height: 100%;
    background-image: url("../../assets/product/info/bg.jpg");
    background-size: cover;
    background-position: center;
    p {
      font-size: size(25);
      color: #fff;
      position: absolute;
      left: size(30);
      bottom: 0;
      font-weight: 200;
    }
  }
  .right {
    position: relative;
    flex: 0.68;
    display: grid;
    grid-template-columns: 55% 45%;
    column-gap: 0;
    row-gap: 0;
    height: 85%;
    margin: 0 size(80);
    top: 10%;
    .right-item {
      display: grid;
      grid-template-columns: size(140) 70%;
      line-height: 2;
      column-gap: size(35);
      .key {
        font-weight: 500;
      }
      .val {
        font-weight: 200;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      info: [
        {
          key: "案名",
          val: "交響苑"
        },
        {
          key: " ",
          val: " "
        },
        {
          key: "投資興建",
          val: "長虹建設股份有限公司"
        },
        {
          key: "營造團隊",
          val: "宏林營造"
        },
        {
          key: "基地位址",
          val: "新北市林口區文化三路一段195-217號"
        },
        {
          key: "建築規劃",
          val: "簡俊卿建築師"
        },
        {
          key: "基地面積",
          val: "1568坪"
        },
        {
          key: "基地退縮空間",
          val: "15M/12M/6M"
        },
        {
          key: "樓層規劃",
          val: "24F / B4F"
        },
        {
          key: "學區",
          val: "新林國小、南勢國中"
        },
        {
          key: "棟戶規劃",
          val: "2棟；214戶住家；14間店面"
        },
        {
          key: "基地座向",
          val: "座東南朝西北"
        },
        {
          key: "坪數規劃",
          val: "29坪 2房 、50-58坪3房、63、92坪 4房"
        },
        {
          key: "樓高",
          val: "3.5M"
        },
        {
          key: "管理費",
          val: "90元/坪"
        },
        {
          key: "面前道路寬度",
          val: "30M/10M"
        },
        {
          key: "公設比",
          val: "34%"
        },
        {
          key: "建物高度",
          val: "85M"
        },
        {
          key: "公設項目",
          val: `挑高7.7米大廳、 閱覽室、交誼廳<br/>
          咖啡吧有氧健身房、室內溫水游泳池<br/>
          Sky Lounge、KTV、麻將室、重訓室<br/>
          瑜珈室、娛樂室
          `
        },
        {
          key: "棟距",
          val: `東南面60M<br/>
          西南面17M<br/>
          西北面34/45M<br/>
          東北面45M/52M
          `
        },
      ]
    }
  },
}
</script>