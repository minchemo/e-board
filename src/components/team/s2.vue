<template>
  <div class="s2">
    <div class="left">
      <h1 data-aos="fade-right">森聯40年<br />精鑄誠信建築</h1>
    </div>
    <div class="right">
      <div
        class="img-box"
        v-bind:style="{ backgroundImage: `url('${activeData.cover}')` }"
      ></div>
      <div class="selection">
        <div
          class="item"
          v-for="item in imgs"
          :key="item.name"
          v-bind:class="{ active: selection == item.name }"
          @click="selection = item.name"
        >
          <img src="@/assets/team/home.svg" alt="" srcset="" />
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="content" data-aos="fade-up">
        以森為名三兄弟同心齊力，投注專業誠信經營理念在業界紮根，森聯機構資本總額3億9百萬，機構旗下擁建築、營造、土地開發、產業投資等11家公司，並以子公司文森建設名義掛牌上市，至今打造18000戶幸福宅邸，實現城市生生不息建築森林廣大遠景。
      </div>
    </div>
    <div class="popup" v-bind:class="{ active: popupOpen }">
      <img :src="activeData.big" alt="" srcset="" />
      <div class="close" @click="popupOpen = false">
        <img src="@/assets/team/close.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.s2 {
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;

  .left {
    background-image: url("../../assets/team/s2/bg.jpg");
    background-size: cover;
    background-position: center;
    height: 100vh;
    flex: 1;
    h1 {
      font-size: size(48);
      color: #fff;
      line-height: size(60);
      letter-spacing: size(3);
      position: absolute;
      top: size(30);
      left: size(120);
    }
  }
  .right {
    height: 100vh;
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    .img-box {
      width: 100%;
      height: 45%;
      background-size: 110%;
      background-position: center top;
    }

    .selection {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      width: size(650);
      row-gap: size(12);
      column-gap: size(12);
      margin-top: size(50);
      .item {
        display: flex;
        align-items: center;
        background: #000;
        padding: size(6);
        border-radius: size(5);
        img {
          height: size(25);
          width: size(25);
        }
        span {
          display: block;
          color: #fff;
          font-size: size(25);
          width: 100%;
          text-align: center;
        }
        &:hover {
          background: #850010;
          cursor: pointer;
        }
        &.active {
          background: #850010;
          cursor: pointer;
        }
      }
    }

    .content {
      font-size: size(20);
      line-height: 2.5;
      letter-spacing: size(1.5);
      width: size(650);
      text-align: justify;
      margin-top: size(50);
    }
  }

  .popup {
    position: fixed;
    width: 60vw;
    height: 38.49vw;
    z-index: 50;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(300%, -50%);
    border-radius: size(20);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .close {
      position: absolute;
      right: size(10);
      top: size(10);
      cursor: pointer;
      width: size(50);
    }
    img {
      width: 100%;
    }

    &.active {
      transform: translate(-50%, -50%);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      selection: '百水硯',
      popupOpen: false,
      imgs: [
        {
          name: '百水硯',
          cover: require('@/assets/team/s2/1.jpg'),
          big: require('@/assets/team/s2/2-1.jpg'),
        },
        {
          name: '森JIA',
          cover: require('@/assets/team/s2/2.jpg'),
          big: require('@/assets/team/s2/2-2.jpg'),
        },
        {
          name: '森聯41',
          cover: require('@/assets/team/s2/3.jpg'),
          big: require('@/assets/team/s2/2-3.jpg'),
        },
      ],
    }
  },
  computed: {
    activeData() {
      return this.imgs.find(item => item.name == this.selection);
    }
  },
  watch: {
    selection(newVal, oldVal) {
      this.popupOpen = true;
      this.activeData = this.imgs.find(item => item.name == newVal);
    }
  },
  mounted() {
    this.$store.commit('toggleNavbar', true)
  },
}
</script>