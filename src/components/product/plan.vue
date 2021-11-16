<template>
  <div class="main-plain">
    <div class="plan">
      <div class="left" data-aos="fade-right">
        <div
          class="btn"
          v-for="plan in plans"
          :key="plan.name"
          @click="selectedFloor = plan.name"
          v-bind:class="{ active: selectedFloor == plan.name }"
        >
          {{ plan.name }}
        </div>
      </div>
      <div class="right">
        <div class="floor" data-aos="fade-right">{{ activeFloor.name }}</div>
        <div class="floor-subtitle" data-aos="fade-right" data-aos-delay="200">
          平面參考示意圖
        </div>
        <div class="plan-box" data-aos="fade-up" data-aos-delay="400">
          <img
            class="draggable"
            ref="draggable"
            :src="activeFloor.plan"
            alt=""
            srcset=""
            v-bind:style="{
              transform: `scale(${scaleLevel}) translate3d(${dragPos.x}px, ${dragPos.y}px, 0)`,
            }"
          />
          <div
            class="detail-item"
            v-for="(detail, i) in activeFloor.detail"
            :key="i"
            v-bind:style="{
              transform: `
            scale(${scaleLevel}) 
            translate3d(${detail.x + dragPos.x}px, ${
                detail.y + dragPos.y
              }px, 0)`,
            }"
            @click="activeDetailImg = detail.img"
          >
            +
          </div>
        </div>
        <div class="control">
          <div class="zoom zoom-in" @click="zoomIn">+</div>
          <div class="zoom zoom-out" @click="zoomOut">–</div>
        </div>
        <img
          class="compass"
          src="@/assets/product/plan/compass.svg"
          alt=""
          srcset=""
        />
        <img
          data-aos="fade-left"
          data-aos-delay="400"
          class="warning"
          src="@/assets/product/plan/warning.svg"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div
      class="detail-popup"
      v-bind:class="{ active: activeDetailImg.length > 0 }"
    >
      <div class="swiper-box">
        <swiper :options="swiperOptions">
          <swiper-slide
            v-for="(slide, i) in activeDetailImg"
            :key="i"
            v-bind:style="{ backgroundImage: `url('${slide}')` }"
          >
          </swiper-slide>
          <div
            class="swiper-pagination"
            slot="pagination"
            v-show="activeDetailImg.length > 1"
          ></div>
          <div
            class="swiper-button-prev"
            slot="button-prev"
            v-if="activeDetailImg.length > 1"
          >
            <i class="el-icon-caret-left"></i>
          </div>
          <div
            class="swiper-button-next"
            slot="button-next"
            v-if="activeDetailImg.length > 1"
          >
            <i class="el-icon-caret-right"></i>
          </div>
        </swiper>
      </div>

      <div class="close" @click="activeDetailImg = []">
        <img src="@/assets/product/plan/detailClose.svg" alt="" srcset="" />
      </div>
    </div>
  </div>
</template>


<style lang="scss">
.main-plain {
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

    .swiper-pagination {
      bottom: size(20);
      .swiper-pagination-bullet {
        width: size(12);
        height: size(12);
        background: transparent;
        border: size(3) solid #fff;
        opacity: 1;
        margin: 0 size(8);
        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.plan {
  position: absolute;
  width: size(1668);
  height: 80vh;
  z-index: 1;
  display: flex;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .left {
    flex: 0.15;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .btn {
      width: size(141);
      height: size(40);
      font-size: size(20);
      text-transform: uppercase;
      background-color: #fff;
      margin-bottom: size(10);
      border-radius: size(10);
      filter: drop-shadow(0 0 size(5) rgba(0, 0, 0, 0.5));
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.1s;
      &.active {
        font-size: size(25);
        background-color: #ec7900;
        color: #fff;
        font-weight: bold;
      }
      &:hover {
        cursor: pointer;
        background-color: #ec7900;
        color: #fff;
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:nth-child(3),
      &:nth-child(7),
      &:nth-child(11) {
        margin-bottom: size(30);
      }
    }
  }
  .right {
    position: relative;
    flex: 0.85;
    background-color: #fff;
    height: 100%;
    border-radius: size(20);
    filter: drop-shadow(0 0 size(5) rgba(0, 0, 0, 0.5));
    overflow: hidden;
    .plan-box {
      position: absolute;
      width: 80%;
      height: 80%;
      z-index: 1;
      background-size: 50%;
      background-repeat: no-repeat;
      top: 15%;
      left: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      img {
      }
      .detail-item {
        position: absolute;
        width: size(35);
        height: size(35);
        border-radius: 100%;
        background-color: #ec7900;
        color: #fff;
        font-size: size(30);
        font-weight: 200;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.04s;
        &:hover {
          width: size(40);
          height: size(40);
        }
      }
    }
    .control {
      position: absolute;
      right: size(120);
      bottom: size(80);
      font-size: size(30);
      box-shadow: 0 0 size(5) rgba(0, 0, 0, 0.2);
      border-radius: size(10);
      overflow: hidden;
      z-index: 15;
      background-color: #fff;
      .zoom {
        width: size(62);
        height: size(62);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ec7900;
        &.zoom-in {
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }
        &:hover {
          color: #fff;
          background-color: #ec7900;
          cursor: pointer;
        }
      }
    }
    .floor {
      position: absolute;
      left: size(120);
      top: size(50);
      font-size: size(80);
      font-weight: 100;
      text-transform: uppercase;
      z-index: 20;
    }
    .floor-subtitle {
      position: absolute;
      letter-spacing: size(5);
      font-size: size(30);
      left: size(120);
      top: size(150);
      z-index: 20;
    }
    .compass {
      position: absolute;
      width: size(43);
      left: size(120);
      bottom: size(80);
    }
    .warning {
      position: absolute;
      width: size(10);
      right: size(90);
      top: size(70);
    }
  }
}
.detail-popup {
  position: fixed;
  width: size(1500);
  height: size(865);
  z-index: 50;
  left: 50%;
  top: 50%;
  background-color: #fff;
  transform: translate(150%, -50%);
  transition: all 0.5s;
  border-radius: size(30);
  &.active {
    transform: translate(-50%, -50%);
  }
  .close {
    width: size(53);
    height: size(53);
    background-color: #ec7900;
    position: absolute;
    right: size(10);
    top: size(10);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.1s;
    z-index: 1;
    img {
      width: 50%;
    }
    &:hover {
      transform: scale(1.1);
    }
  }

  .swiper-box {
    position: relative;
    width: 97%;
    height: 95%;
    border-radius: size(30);
    top: 2.5%;
    left: 1.5%;
    overflow: hidden;
    .swiper-container {
      height: 100%;
      .swiper-slide {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>

<script>
import interact from "interactjs";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";

import Swiper2, { Navigation, Pagination, Autoplay } from "swiper";
Swiper2.use([Navigation, Pagination, Autoplay]);

export default {
  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
      },
      plans: [
        {
          name: "b4 f",
          plan: [require("@/assets/product/plan/b4f.svg")],
        },
        {
          name: "b3 f",
          plan: [require("@/assets/product/plan/b3f.svg")],
        },
        {
          name: "b2 f",
          plan: [require("@/assets/product/plan/b2f.svg")],
        },
        {
          name: "b1 f",
          plan: [require("@/assets/product/plan/b1f.svg")],
          detail: [
            {
              x: -115,
              y: 40,
              img: [require("@/assets/product/plan/db1-1.jpg")],
            },
          ],
        },
        {
          name: "1f",
          plan: [require("@/assets/product/plan/1f.svg")],
          detail: [
            {
              x: -215,
              y: 110,
              img: [require("@/assets/product/plan/d1-2.jpg")],
            },
            {
              x: -140,
              y: 110,
              img: [require("@/assets/product/plan/d1-1.jpg")],
            },
            {
              x: 100,
              y: 110,
              img: [require("@/assets/product/plan/d1-3.jpg")],
            },
            {
              x: 170,
              y: 150,
              img: [require("@/assets/product/plan/d1-4.jpg")],
            },
          ],
        },
        {
          name: "2f",
          plan: [require("@/assets/product/plan/2f.svg")],
        },
        {
          name: "3f",
          plan: [require("@/assets/product/plan/3f.svg")],
        },
        {
          name: "4-10f",
          plan: [require("@/assets/product/plan/4-10f.svg")],
          detail: [
            {
              x: -150,
              y: 170,
              img: [require("@/assets/product/plan/d4-1.jpg")],
            },
            {
              x: -235,
              y: 170,
              img: [require("@/assets/product/plan/d4-2.jpg")],
            },
            {
              x: -325,
              y: 170,
              img: [require("@/assets/product/plan/d4-3.jpg")],
            },
            {
              //a3
              x: -150,
              y: -160,
              img: [require("@/assets/product/plan/家配圖A3 4-10F.jpg")],
            },
            {
              //a2
              x: -235,
              y: -160,
              img: [require("@/assets/product/plan/家配圖A2 4-10F.jpg")],
            },
            {
              //a1
              x: -325,
              y: -160,
              img: [require("@/assets/product/plan/家配圖A1 4-10F.jpg")],
            },
            {
              //b3
              x: 150,
              y: -160,
              img: [require("@/assets/product/plan/家配圖B3 4-10F.jpg")],
            },
            {
              //b2
              x: 240,
              y: -160,
              img: [require("@/assets/product/plan/家配圖B2 4-10F.jpg")],
            },
            {
              //b1
              x: 330,
              y: -160,
              img: [require("@/assets/product/plan/家配圖B1 4-10F.jpg")],
            },
            {
              //b3
              x: 150,
              y: 170,
              img: [require("@/assets/product/plan/家配圖B5 4-10F.jpg")],
            },
            {
              //b2
              x: 240,
              y: 170,
              img: [require("@/assets/product/plan/家配圖B6 4-10F.jpg")],
            },
            {
              //b1
              x: 330,
              y: 170,
              img: [require("@/assets/product/plan/家配圖B7 4-10F.jpg")],
            },
          ],
        },
        {
          name: "11f",
          plan: [require("@/assets/product/plan/11f.svg")],
        },
        {
          name: "12-22f",
          plan: [require("@/assets/product/plan/12-22f.svg")],
          detail: [
            {
              x: -190,
              y: -100,
              img: [require("@/assets/product/plan/d12-1.jpg")],
            },
            {
              x: -260,
              y: -100,
              img: [require("@/assets/product/plan/d12-2.jpg")],
            },
            {
              //a3
              x: -190,
              y: 90,
              img: [require("@/assets/product/plan/家配圖A3 12-22F.jpg")],
            },
            {
              //a5
              x: -260,
              y: 90,
              img: [require("@/assets/product/plan/家配圖A5 12-22F.jpg")],
            },
            {
              //b2
              x: 190,
              y: -100,
              img: [require("@/assets/product/plan/家配圖B2 12-22F.jpg")],
            },
            {
              //b1
              x: 280,
              y: -100,
              img: [require("@/assets/product/plan/家配圖B1 12-22F.jpg")],
            },
            {
              //b3
              x: 190,
              y: 90,
              img: [require("@/assets/product/plan/家配圖B3 12-22F.jpg")],
            },
            {
              //b5
              x: 280,
              y: 90,
              img: [require("@/assets/product/plan/家配圖B5 12-22F.jpg")],
            },
          ],
        },
        {
          name: "23f",
          plan: [require("@/assets/product/plan/23f.svg")],
        },
        {
          name: "24f",
          plan: [require("@/assets/product/plan/24f.svg")],
        },
        {
          name: "r1f",
          plan: [require("@/assets/product/plan/r1f.svg")],
          detail: [
            // {
            //   x: -195,
            //   y: 40,
            //   img: [require("@/assets/product/plan/dr1-1.jpg")],
            // },
          ],
        },
        {
          name: "r2f",
          plan: [require("@/assets/product/plan/r2f.svg")],
          detail: [
            // {
            //   x: -270,
            //   y: -15,
            //   img: [require("@/assets/product/plan/dr2-1.jpg")],
            // },
          ],
        },
        {
          name: "r3f",
          plan: [require("@/assets/product/plan/r3f.svg")],
          detail: [
            // {
            //   x: -260,
            //   y: 100,
            //   img: [
            //     require("@/assets/product/plan/dr3-1.jpg"),
            //     require("@/assets/product/plan/dr3-2.jpg"),
            //     require("@/assets/product/plan/dr3-3.jpg"),
            //   ],
            // },
          ],
        },
      ],
      selectedFloor: "4-10f",
      scaleLevel: 0.75,
      dragPos: { x: 0, y: 0 },
      activeDetailImg: [],
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    activeFloor() {
      return this.plans.find((item) => item.name == this.selectedFloor);
    },
  },
  watch: {
    selectedFloor(newVal, oldVal) {
      this.activeFloor = this.plans.find((item) => item.name == newVal);
      this.scaleLevel = 0.5;
      this.dragPos = { x: 0, y: 0 };
    },
  },
  methods: {
    zoomIn() {
      if (this.scaleLevel <= 6) {
        this.scaleLevel += 0.5;
      }
    },
    zoomOut() {
      if (this.scaleLevel >= 1) {
        this.scaleLevel -= 0.5;
      }
    },
  },
  created() {
    this.plans = this.plans.reverse();

    const self = this;
    interact(".draggable").draggable({
      listeners: {
        move(event) {
          self.dragPos.x += event.dx;
          self.dragPos.y += event.dy;
        },
      },
    });
  },
};
</script>