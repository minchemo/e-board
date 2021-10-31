<template>
  <div class="s1">
    <div class="left">
      <h1 data-aos="fade-right">森聯40年<br/>精鑄誠信建築</h1>
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
        以森為名三兄弟同心齊力，投注專業誠信經營理念在業界紮根，森聯機構資本總額3億9百萬，機構旗下擁建築、營造、土地開發、產業投資等11家公司，並以子公司文森建設名義掛牌上市，至今打造18000戶幸福宅邸，實現城市生生不息建築森林廣大遠景。
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
          el: '.swiper-pagination',
          clickable: true
        },
      },
      slide: [
        require('@/assets/team/s2/1.jpg'),
        require('@/assets/team/s2/2.jpg'),
        require('@/assets/team/s2/3.jpg'),
      ],
    }
  },
  mounted(){
    this.$store.commit('toggleNavbar', true)
  },
}
</script>