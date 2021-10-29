<template>
  <div class="s1">
    <div class="left">
      <h1 data-aos="fade-right">長虹半世紀<br />營建股王信譽</h1>
    </div>
    <div class="right">
      <swiper :options="swiperOptions" class="swiper">
        <swiper-slide
          v-for="(img, i) in slide"
          :key="i"
          v-bind:style="{ backgroundImage: `url('${img}')` }"
        >
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <div class="content" data-aos="fade-up">
        走過半世紀，奠定「老字號」口碑，1973年成立宏林營造廠，1975年成立長虹建設，登記資本額40億，2004年掛牌上市以來，屢次登上營建股王寶座，今日仍屹立前三大績優營建股地位，建築作品更是獲獎常勝軍，堪稱業界典範。
      </div>
    </div>
  </div>
</template>

<style lang="scss" >
.s1 {
  .swiper-pagination {
    .swiper-pagination-bullet {
      width: size(12);
      height: size(12);
      background: transparent;
      border: 1px solid #000;
      opacity: 1;
      margin: 0 size(8);
      &.swiper-pagination-bullet-active {
        background: #000;
      }
    }
  }
}
</style>

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
    justify-content: center;
    flex-direction: column;

    .swiper {
      position: relative;
      top: size(80);
      width: size(803);
      height: size(521);
      padding-bottom: size(60);
      margin-bottom: size(100);
      margin-top: -#{size(150)};
      .swiper-slide {
        background-size: cover;
      }
    }

    .content {
      font-size: size(20);
      line-height: 2.5;
      letter-spacing: size(1.5);
      width: size(600);
    }
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper2.use([Navigation, Pagination, Autoplay]);
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
      },
      slide: [
        require('@/assets/team/s1/1.jpg'),
        require('@/assets/team/s1/2.jpg'),
        require('@/assets/team/s1/3.jpg'),
        require('@/assets/team/s1/4.jpg'),
        require('@/assets/team/s1/5.jpg'),
        require('@/assets/team/s1/6.jpg'),
        require('@/assets/team/s1/7.jpg'),
        require('@/assets/team/s1/8.jpg'),
      ],
    }
  },
  mounted() {
    this.$store.commit('toggleNavbar', true)
  },
}
</script>