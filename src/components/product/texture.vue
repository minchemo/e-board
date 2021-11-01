<template>
  <div class="main-texture">
    <div class="texture">
      <template v-for="(texture, i) in textures">
        <div
          class="texture-item"
          :key="texture.name"
          @click="selectedTexture = texture.name"
          data-aos="fade-down"
          :data-aos-delay="i * 50"
        >
          <div
            class="img"
            v-bind:style="{ backgroundImage: `url('${texture.cover}')` }"
          ></div>
          <div class="title">
            <span class="name">{{ texture.name }}</span>
            <span class="en">{{ texture.en }}</span>
          </div>
        </div>
      </template>
    </div>
    <div class="detailPopup" v-bind:class="{ active: selectedTexture != '' }" :key="selectedTexture">
      <template v-for="(content, i) in selectedTextureContent">
        <img
          class="content"
          :src="content.url"
          alt=""
          srcset=""
          :key="i"
          v-if="content.type == 'img'"
        />
        <video class="video-content" controls v-else :key="i">
          <source :src="content.url" type="video/mp4" />
        </video>
      </template>
    </div>

    <img
      v-bind:class="{ active: selectedTexture != '' }"
      class="close"
      src="@/assets/product/texture/close.svg"
      alt=""
      srcset=""
      @click="selectedTexture = ''"
    />
  </div>
</template>

<style lang="scss" scoped>
.texture {
  position: absolute;
  width: size(1500);
  height: size(725);
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: size(40);
  row-gap: size(60);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .texture-item {
    position: relative;
    overflow: hidden;
    .img {
      border-radius: size(30) size(30) 0 0;
      height: size(248);
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      filter: brightness(0.5);
      transition: all 0.3s;
    }
    .title {
      height: auto;
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: size(20) size(30);
      border-radius: 0 0 size(25) size(25);
      transition: all 0.3s;
      .name {
        font-weight: 500;
        font-size: size(28);
        transition: all 0.3s;
      }
      .en {
        font-size: size(15);
        transition: all 0.3s;
      }
    }
    &:hover {
      cursor: pointer;
      .img {
        filter: brightness(1);
      }
      .title {
        .name {
          transform: scale(1.1);
        }
        .en {
          transform: scale(1.1);
        }
      }
    }
  }
}
.detailPopup {
  position: fixed;
  width: 90vw;
  height: 90vh;
  background: #fff;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(150%, -50%);
  transition: all 0.5s;
  border-radius: size(20);
  overflow-y: scroll;
  text-align: center;
  padding-top: size(40);

  .content {
    width: 95%;
    margin: 0 auto;
  }

  .video-content {
    width: 70%;
    margin: size(100) 0;
  }

  &.active {
    transform: translate(-50%, -50%);
  }
}
.close {
  position: fixed;
  right: 7vw;
  top: 5vh;
  width: size(50);
  transition: all 0.5s;
  z-index: 51;
  transform: translateX(500%);
  &:hover {
    cursor: pointer;
    width: size(55);
  }
  &.active {
    transform: translateX(0%);
  }
}

@media screen and (max-width: 1366px) {
  .texture {
    .texture-item {
      .title {
        align-items: flex-start;
        .name {
          font-weight: 500;
          font-size: size(28);
          transition: all 0.3s;
          width: 45%;
        }
        .en {
          font-size: size(15);
          transition: all 0.3s;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "ProductTexture",
  data() {
    return {
      textures: [
        {
          name: '制震器',
          en: 'GRAST vibration control',
          cover: require('@/assets/product/texture/1.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/1-1.jpg')
            },
            {
              type: 'video',
              url: require('@/assets/product/texture/1-2.mp4')
            },
            {
              type: 'img',
              url: require('@/assets/product/texture/1-3.jpg')
            }
          ]
        },
        {
          name: '電子鎖',
          en: 'CISA Lock',
          cover: require('@/assets/product/texture/2.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/2-1.jpg')
            }
          ]
        },
        {
          name: '通訊',
          en: 'GRAST vibration control',
          cover: require('@/assets/product/texture/3.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/3-1.jpg')
            }
          ]
        },
        {
          name: '電梯',
          en: 'GFC elevators',
          cover: require('@/assets/product/texture/4.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/4-1.jpg')
            }
          ]
        },
        {
          name: '網路',
          en: 'GRAST vibration control',
          cover: require('@/assets/product/texture/5.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/5-1.jpg')
            }
          ]
        },
        {
          name: '廚具',
          en: 'GRAST vibration control',
          cover: require('@/assets/product/texture/6.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/6-1.jpg')
            },
            {
              type: 'video',
              url: require('@/assets/product/texture/6-2.mp4')
            },
            {
              type: 'img',
              url: require('@/assets/product/texture/6-3.jpg')
            }
          ]
        },
        {
          name: '衛浴',
          en: 'KALDEWEI',
          cover: require('@/assets/product/texture/7.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/7-1.jpg')
            }
          ]
        },
        {
          name: '鋁窗',
          en: 'Yung Shin',
          cover: require('@/assets/product/texture/8.jpg'),
          content: [
            {
              type: 'img',
              url: require('@/assets/product/texture/8-1.jpg')
            }
          ]
        },
      ],
      selectedTexture: '',
      selectedTextureContent: '',
    }
  },
  watch: {
    selectedTexture() {
      const texture = this.textures.find(item => item.name == this.selectedTexture);
      this.selectedTextureContent = texture.content
    }
  }
};
</script>
