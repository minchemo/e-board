<template>
  <div class="s1">
    <div class="left">
      <h1 data-aos="fade-right">長虹半世紀<br />營建股王信譽</h1>
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
        走過半世紀，奠定「老字號」口碑，1973年成立宏林營造廠，1975年成立長虹建設，登記資本額40億，2004年掛牌上市以來，屢次登上營建股王寶座，今日仍屹立前三大績優營建股地位，建築作品更是獲獎常勝軍，堪稱業界典範。
      </div>
    </div>
    <div class="popup" v-bind:class="{active: popupOpen}">
      <img :src="activeData.big" alt="" srcset="">
      <div class="close" @click="popupOpen = false">
        <img src="@/assets/team/close.svg" alt="" srcset="">
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
    background-image: url("../../assets/team/s1/bg.jpg");
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
    width: auto;
    height: 38.49vw;
    z-index: 50;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(300%, -50%);
    border-radius: size(25);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    .close {
      position: absolute;
      right: size(20);
      top: size(10);
      cursor: pointer;
      width: size(50);
    }
    img {
      height: 100%;
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
      selection: '帝璽',
      popupOpen: false,
      imgs: [
        {
          name: '帝璽',
          cover: require('@/assets/team/s1/1.jpg'),
          big: require('@/assets/team/s1/1-1.png'),
        },
        {
          name: '長虹虹頂',
          cover: require('@/assets/team/s1/2.jpg'),
          big: require('@/assets/team/s1/1-2.png'),
        },
        {
          name: '世紀長虹',
          cover: require('@/assets/team/s1/3.jpg'),
          big: require('@/assets/team/s1/1-3.png'),
        },
        {
          name: '忠孝詠吉',
          cover: require('@/assets/team/s1/4.jpg'),
          big: require('@/assets/team/s1/1-4.png'),
        },
        {
          name: '長虹天蔚',
          cover: require('@/assets/team/s1/5.jpg'),
          big: require('@/assets/team/s1/1-5.png'),
        },
        {
          name: '長虹天際',
          cover: require('@/assets/team/s1/6.jpg'),
          big: require('@/assets/team/s1/1-6.png'),
        },
        {
          name: '明日博',
          cover: require('@/assets/team/s1/7.jpg'),
          big: require('@/assets/team/s1/1-7.png'),
        },
        {
          name: '長虹天薈',
          cover: require('@/assets/team/s1/8.jpg'),
          big: require('@/assets/team/s1/1-8.png'),
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