<template>
  <div class="s4">
    <div class="custom-nav">
      <div
        class="item"
        v-for="tab in tabs"
        :key="tab.name"
        @click="selectTabName = tab.name"
        v-bind:class="{ active: tab.name == selectTabName }"
      >
        <div class="title">
          {{ tab.name }}
        </div>
      </div>
    </div>
    <div
      class="seemore"
      v-bind:class="{ active: !detailOpened }"
      @click="detailOpened = true"
    >
      看更多
    </div>
    <div class="seemore-detail" v-bind:class="{ active: detailOpened }">
      <div class="detail-content">
        <div class="title">{{ activaTab.title }}</div>
        <div class="designer">{{ activaTab.designer }}</div>
        <div class="company">{{ activaTab.company }}</div>
        <div class="works-title">業績作品：</div>
        <div
          class="works"
          v-bind:class="{ oneline: activaTab.works.length < 4 }"
        >
          <div class="work-item" v-for="work in activaTab.works" :key="work">
            {{ work }}
          </div>
        </div>
        <div class="content" v-html="activaTab.content"></div>
        <img
          class="qr"
          v-if="activaTab.qr"
          :src="activaTab.qr"
          alt=""
          srcset=""
        />
      </div>
      <div class="close">
        <img
          @click="detailOpened = false"
          src="@/assets/team/s4/closeDetail.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="swiper-box" :key="activaTab.name">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(slide, i) in activaTab.imgs"
          :key="i"
          v-bind:style="{ backgroundImage: `url('${slide}')` }"
        >
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev">
          <i class="el-icon-caret-left"></i>
        </div>
        <div class="swiper-button-next" slot="button-next">
          <i class="el-icon-caret-right"></i>
        </div>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
.s4 {
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
</style>

<style lang="scss" scoped>
.s4 {
  position: relative;
  overflow: hidden;

  .swiper-box {
    position: relative;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    .swiper-container {
      .swiper-slide {
        width: 100%;
        height: 100vh;
        background-size: cover;
      }
    }
  }

  .custom-nav {
    position: absolute;
    width: size(660);
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    top: size(30);
    left: 50%;
    background: #fff;
    filter: drop-shadow(0 0 size(5) rgba(0, 0, 0, 0.4));
    border-radius: size(35);
    padding: size(10) size(20);
    transform: translateX(-50%);
    z-index: 10;
    .item {
      position: relative;
      margin-right: size(40);
      padding: size(10) size(30);
      border-radius: size(30);
      .title {
        font-size: size(35);
      }
      &.active {
        color: #fff;
        background-color: #850010;
      }
      &:hover {
        color: #fff;
        cursor: pointer;
        background-color: #850010;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }

  .seemore {
    position: absolute;
    z-index: 0;
    font-size: size(25);
    letter-spacing: size(2);
    background: #fff;
    padding: size(12) size(40);
    border-radius: size(15);
    left: 50%;
    transform: translate(-50%, -200%);
    top: size(125);
    filter: drop-shadow(0 0 size(2) rgba(0, 0, 0, 0.2));
    transition: all 0.4s;
    cursor: pointer;
    &.active {
      transform: translate(-50%, 0%);
      z-index: 10;
    }
    &:hover {
      background-color: #850010;
      color: #fff;
    }
  }
  .seemore-detail {
    position: absolute;
    top: size(95);
    height: auto;
    width: size(660);
    left: 50%;
    transform: translateX(-50%) scaleY(0);
    transform-origin: top;
    background: rgba(255, 255, 255, 0.7);
    z-index: 9;
    padding: size(60) size(10) size(40) size(10);
    box-sizing: border-box;
    transition: all 0.2s;
    &.active {
      transform: translateX(-50%) scaleY(1);
    }
    .close {
      margin-top: size(30);
      text-align: center;
      img {
        width: size(32);
        &:hover {
          cursor: pointer;
          opacity: 0.7;
        }
      }
    }

    .detail-content {
      position: relative;
      max-height: 50vh;
      overflow: auto;
      padding: 0 size(30);
      .title {
        font-size: size(25);
      }
      .designer {
        font-size: size(20);
        margin-top: size(10);
      }
      .company {
        font-size: size(20);
        position: absolute;
        top: size(4);
        left: size(290);
      }
      .works-title {
        font-size: size(20);
        margin: size(35) 0;
      }
      .works {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        row-gap: size(10);
        margin-bottom: size(35);
        .work-item {
          font-size: size(16);
          letter-spacing: size(2);
          white-space: nowrap;
        }
      }
      .content {
        font-size: size(18);
        line-height: size(36);
      }
      .qr {
        position: absolute;
        right: 0;
        top: size(4);
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .qr {
    width: size(100);
  }
  .works {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import Swiper2, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper2.use([Navigation, Pagination, Autoplay]);

export default {
  name: "s4",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      selectTabName: '29坪',
      tabs: [
        {
          name: '29坪',
          title: 'A6-8F  29坪實品屋',
          designer: '潘福睿、Eddie',
          company: '梵舍設計制研所',
          works: [`天賞大願接待中心`,
            `新北市 、台北市住宅案`,
            `Fan Lab  |  PROJECT`],
          content: `引用北歐簡約的空間基調，整體以暖白、木質地、莫蘭迪色系呈現，大量引入溫暖的日光，室內倒映出舒適的清新粉綠光影。<br/>在公領域客廳中，電視牆與電器櫃整併設計處理，拓寬主牆視覺感並於視線對立面下重點跳色，讓空間年輕活潑化。開放式餐廚區延伸廚具台面與餐桌做連結，於小戶型中營造出輕食吧檯的意象，放大儲物空間與機能性。<br/>臥室空間延續整體設計風格，將木質面積擴大，局部帶入大地色系，呈現出溫暖的起居空間，規劃多樣使用機能的更衣室，提升整體坪效利用。次臥的空間定義為多功能使用空間，以靈活性作為主要導向，使空間能滿足客房、小孩房、和室、書房多樣機能需求，收納空間極大化利用。`,
          imgs: [
            require('@/assets/team/s4/1-1.jpg'),
            require('@/assets/team/s4/1-3.jpg'),
          ],
          qr: require('@/assets/team/s4/1-qr.svg'),
        },
        {
          name: '51坪',
          title: 'A5-8F  51坪實品屋',
          designer: '杜立筠',
          company: '唯將設計│WE JUMP DESIGN',
          works: [`遠雄建設 碧蓮天住宅設計案`,
            `禾億建設 石牌新建工程公設門廳設計案`,
            `遠雄建設 大學京都住宅設計案`, `禾億建設 石牌新建工程住宅設計案`, `華固建設 天鑄住宅設計案`, `Olivia Coffee旗艦店商業空間設計案`, `長耀建設 双丰双卉住宅設計案`],
          content: `整體空間設計以溫潤木質作為基調，搭配噴漆與銀河灰大理石堆疊出層次感， 營造柔和優雅的氛圍。在公領域藉由自然採光放大空間的視野，將樂活的態度帶入日常，客廳天花板的轉折處以鏡面點綴，創造空間的延伸性。<br/>在私領域的部份，床頭跳壁紙與繃布，演繹材質深淺交織與漸層變化。空間規劃較多的收納櫃，搭配整體色調與材質，將機能空間融入設計，在美感與實用之間取得平衡點。<br/>一進玄關，運用弧形木皮牆面引導至客餐廳，配置上不浪費多餘的走道空間，提供更多使用效能，主臥室牆面往左推伸較為舒適，提升臥室空間品質。<br/>將量體較大的收納櫃緊靠於牆面，讓進光亮極大化，空間明亮達到減能減碳的樂居生活。<br/>玄關配置充裕的鞋量收納，懸空設計視覺上不壓迫，下方也可放置雜物有利於彈性使用。餐廳藉由設計巧妙得將電器櫃隱藏至餐廳背牆與入口弧形牆之間，材質相呼應，客餐廳設計感趨於一致性外，兼具良好的收納機能。`,
          imgs: [
            require('@/assets/team/s4/2-1.jpg'),
            require('@/assets/team/s4/2-2.jpg'),
          ],
        },
        {
          name: '53坪',
          title: 'A7-8F  53坪實品屋',
          designer: '韓嘉儀、李政維',
          company: '元佑室內裝修有限公司',
          works: [`璞園實德的家公設大廳`,
            `璞園富富化合公設大廳`,
            `國泰禾公設大廳`,
            `興富謙公設大廳`,],
          content: `「家」一樣可以簡單抽象，以人為本為思考基點，室內以簡潔雅氣的線條，讓空間成為自然材質織理的畫布，呈現材質自有的肌理與溫度，滿足生活每一個空間機能產生出來的型態，並利用材質與線條原始的樣貌呈現出更富有溫度的空間氛圍。<br/>以白色為基調，大量搭配線板裝飾，簡捷中體現貴氣風雅，木紋地板讓白色牆面有溫度，客廳主牆面搭配白色大理石，協調中提升質感，臥室除了與客餐廳一樣使用白色加線板的牆面外，更搭配深色系木紋傢俱拉出設計的對比感，在較小空間中創造如景深般的立體空間。`,
          imgs: [
            require('@/assets/team/s4/3-1.jpg'),
            require('@/assets/team/s4/3-2.jpg'),
          ],
        },
        {
          name: '58坪',
          title: 'A1-20F  58坪實品屋',
          designer: '李文勝、林芝韻',
          company: '李文勝建築師事務所',
          works: [`法鼓山雲來別院`, `璞永建設至仁愛`, `國泰建設國泰川青`, `東騰開發東騰青一`, `聯上開發涵玥`, `中悦建設松苑`],
          content: `溫潤大器的成熟味是李文勝建築師設計此實品屋的主題思想，客廳使用大量的木頭材質，營造自然環境的感受，開放式書房使用愛瑪仕橘的書櫃，成熟中有著奢華的調性，餐廳搭配中島式的上餐櫃台，讓用餐的空間更有彈性。<br/>私領域臥室的設計依舊使用大量木頭搭配愛瑪仕橘的統一手法，溫暖舒適中帶有貴族氣息，進入主臥室的空間先經過兩側更衣室的洗禮，像極了五星飯店的優雅與奢華。`,
          imgs: [
            require('@/assets/team/s4/4-1.jpg'),
            require('@/assets/team/s4/4-2.jpg'),
          ],
        },
      ],
      detailOpened: false,
    }
  },
  computed: {
    activaTab() {
      return this.tabs.find((item) => item.name == this.selectTabName);
    }
  },
  watch: {
    selectTabName(newVal, oldVal) {
      this.activaTab = this.tabs.find((item) => item.name == newVal);
    }
  },
  mounted() {
    this.$store.commit('toggleNavbar', true)
  }
};
</script>
