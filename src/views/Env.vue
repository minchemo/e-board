<template>
  <div class="env">
    <div class="swiper-box" :key="activeTabs.name">
      <div class="info">
        <h1 data-aos="fade-right" v-html="activeTabs.slideTitle"></h1>
        <p
          data-aos="fade-right"
          data-aos-delay="200"
          v-html="activeTabs.slideContent"
        ></p>
        <img class="mask" src="@/assets/env/mask.png" alt="" srcset="" />
      </div>
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(slide, i) in activeTabs.imgs"
          :key="i"
          v-bind:style="{ backgroundImage: `url('${slide}')` }"
        >
          <template v-if="activeTabs.name == '媒體園區' && i == 0">
            <svg
              class="s3-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 4000 2250"
            >
              <g id="圖層_6" data-name="圖層 6">
                <rect class="cls-1" width="4000" height="2250" />
              </g>
              <g id="圖層_2" data-name="圖層 2">
                <polyline
                  class="cls-2"
                  v-bind:class="{ active: activeS3 == 1 }"
                  @mouseenter="activeS3 = 1"
                  @mouseleave="activeS3 = 0"
                  points="2000 1617 1938.67 1510.33 1816 1510.33 1823.33 1456.33 1652.67 1447 1508 1672.33 1950 1811.67"
                />
              </g>
              <g id="圖層_3" data-name="圖層 3">
                <polygon
                  class="cls-2"
                  v-bind:class="{ active: activeS3 == 2 }"
                  @mouseenter="activeS3 = 2"
                  @mouseleave="activeS3 = 0"
                  points="1970.67 1427.67 2524.67 1454.33 2473.33 1665.67 2247.67 1653.67 2057.33 1625 2000 1617 1938.67 1510.33 1976.67 1511.67 1970.67 1427.67"
                />
              </g>
              <g id="圖層_4" data-name="圖層 4">
                <path
                  class="cls-2"
                  v-bind:class="{ active: activeS3 == 3 }"
                  @mouseenter="activeS3 = 3"
                  @mouseleave="activeS3 = 0"
                  d="M2000,1617s210.67,32.67,214,32.67,262.67,16,262.67,16l58.66,3.33,241.34-16.67,58.66,203.34-453.33,6-260-20-172-30Z"
                />
              </g>
            </svg>
          </template>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <i class="el-icon-caret-right"></i>
        </div>
      </swiper>
    </div>
    <Nav :theme="'env-theme'" />
  </div>
</template>

<style lang="scss">
.s3-svg {
  position: absolute;
  .cls-1 {
    fill: transparent;
  }
  .cls-2 {
    fill: rgba(255, 255, 255, 0.3);

    &.active {
      fill: rgba(255, 251, 0, 0.5);
    }
  }
}
.env {
  .swiper-box {
    .swiper-button-prev,
    .swiper-button-next {
      color: #fff;
      &:after {
        font-size: size(60);
      }
    }

    .swiper-button-next {
      right: size(60);
    }

    .swiper-button-prev {
      left: size(60);
    }
  }
}

@media screen and (max-width: 1366px) {
  .s3-svg {
    bottom: 1%;
    width: 132%;
    left: -16%;
  }
}
</style>

<style lang="scss" scoped>
.env {
  position: relative;
  overflow: hidden;

  .swiper-box {
    position: relative;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    .info {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      color: #fff;
      height: 100%;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      margin-left: size(150);
      margin-top: -#{size(60)};
      letter-spacing: size(3);
      h1 {
        font-size: size(48);
        line-height: size(72);
      }
      p {
        font-size: size(24);
        line-height: size(48);
        font-weight: bold;
        max-width: size(360);
      }
      .mask {
        position: absolute;
        left: -#{size(150)};
        top: #{size(60)};
        height: 100%;
        z-index: -1;
      }
    }
    .swiper-container {
      .swiper-slide {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: top center;
      }
    }
  }
}
</style>

<script>
import Nav from "../components/layout/nav.vue";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper2.use([Navigation, Pagination, Autoplay]);

export default {
  name: "Env",
  components: {
    Nav,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeS3: 0,
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      tabs: [
        {
          name: '媒體園區',
          slideTitle: '北台灣最大OUTLET<br/>時尚貴賓席',
          slideContent: `「交響苑」高峰迎向三井OUTLET第一排，林口時尚朝聖第一位。三井OUTLET更於近期投入44億二期擴建計畫，導入親子數位娛樂設施、多媒體互動體適能設施、高級料理餐廳、健身中心…，與1館共同打造多達310國際時尚櫃位，造就未來北台灣最大規模購物商城，全球焦點都在您的眼下。`,
          imgs: [
            require('@/assets/env/3-6.jpg'),
            require('@/assets/env/3-1.jpg'),
            require('@/assets/env/3-2.jpg'),
            require('@/assets/env/3-3.jpg'),
            require('@/assets/env/3-4.jpg'),
            require('@/assets/env/3-5.jpg'),
          ]
        },
        {
          name: '交通',
          slideTitle: '台北衛星城<br/>國門第一站',
          slideContent: `坐首席、看世界，放眼全球立即起飛。「交響苑」出發，林口交流道約5分鐘直上國道；機捷A9站約600米步行轉眼到，三站直達機場靠近精彩世界。鄰近轉運站500米出門八方通，UBIKE租車站200米林口隨時任遙遊。。`,
          imgs: [
            require('@/assets/env/2-1.jpg'),
            require('@/assets/env/2-2.jpg'),
          ]
        },
        {
          name: '人口',
          slideTitle: '周邊環境＆<br>人口',
          slideContent: `
          新北市人口分布由板橋為首，<br/>依序為新莊、中和、三重、新<br/>
          店、土城、永和、汐止、蘆洲、淡水、樹林，而林口則排在第12位。<br/>2020新北市成長近兩萬人約0.31%，林口增加5610人，此外同時也是過去五年人口成長率最高的市轄區(五年增加約兩萬一千人)。`,
          imgs: [
            require('@/assets/env/1-1.jpg'),
            require('@/assets/env/1-2.jpg'),
          ]
        },
        {
          name: '學校',
          slideTitle: '全球化培育<br/>一路康莊道',
          slideContent: `孩子的錦繡前程，從「交響苑」啟程，AAIA 新北美國學校、康橋雙語學校、馬禮遜美國學校、新林雙語實驗小學，合力打造林口國際菁英學區，台北輕移民，讓孩子一路輕鬆造就非凡未來。`,
          imgs: [
            require('@/assets/env/4-1.jpg'),
            require('@/assets/env/4-2.jpg'),
          ]
        },
        {
          name: '景點',
          slideTitle: '壯麗大綠地<br/>公園氧城市',
          slideContent: `紐約中央公園、台北大安森林公園,因廣大公園綠地身價非凡；林口坐擁31座大公園及11座高爾夫球場，擁60％以上綠覆率，未來價值無可限量。「交響苑」擁豪大綠景、鄰近林口扶輪公園，頂端人士嚴選城市氧境。`,
          imgs: [
            require('@/assets/env/5-1.jpg'),
            require('@/assets/env/5-2.jpg'),
            require('@/assets/env/5-3.jpg'),
          ]
        }
      ]
    }
  },
  computed: {
    activeTabs() {
      return this.tabs.find(item => item.name == this.$route.name)
    }
  },
  mounted() {
    this.$store.commit('toggleNavbar', true)
  }
};
</script>
