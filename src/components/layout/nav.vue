<template>
  <div>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/layout/logo.png" alt="" srcset="" />
      </router-link>
    </div>
    <div
      class="navigation"
      ref="navigation"
      v-bind:class="{ active: $store.state.navOpen, [saveTheme]: saveTheme }"
      @mouseenter="$store.dispatch('navMouseEnter')"
      @mouseleave="$store.dispatch('navMouseLeave')"
    >
      <div class="nav" ref="nav">
        <router-link
          class="nav-item"
          :to="nav.path + '/1'"
          v-for="nav in navList"
          :key="nav.title"
          v-bind:class="{ selected: $props.theme == nav.themeName }"
        >
          <div class="nav-icon">
            <img :src="nav.icon" alt="" srcset="" />
          </div>
          <div class="nav-title">{{ nav.title }}</div>
        </router-link>
      </div>
      <div class="subnavbar" ref="subnavbar" v-if="subnavList.length > 0">
        <template v-for="nav in subnavList">
          <router-link :key="nav.title" :to="nav.path" class="item">
            <div class="title">
              {{ nav.title }}
            </div>
          </router-link>
        </template>
      </div>
    </div>
    <div
      class="show-navigation"
      v-bind:class="{ active: !$store.state.navOpen }"
      @click="$store.commit('toggleNavbar', true)"
    >
      <img src="@/assets/layout/nav-hide.svg" alt="" srcset="" />
    </div>
    <div
      class="hover-detect-area"
      @mouseenter="$store.dispatch('navMouseEnter')"
      @mouseleave="$store.dispatch('navMouseLeave')"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.logo {
  position: fixed;
  left: size(30);
  bottom: size(30);
  z-index: 1000;
  img {
    width: size(230);
  }
}
.navigation {
  left: 0;
  bottom: 0;
  position: fixed;
  width: 100%;
  height: 22%;
  z-index: 10;
  transform: translateY(150%);
  transition: all 0.5s;

  &.active {
    transform: translateY(0%);
  }

  .nav {
    position: absolute;
    width: size(1060);
    height: size(96);
    background: #fff;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.4));
    border-radius: size(30);
    bottom: size(30);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 size(20);
    overflow: hidden;
    transition: all 0.5s;
    z-index: 1;

    .nav-item {
      display: flex;
      align-items: center;
      padding: size(10) size(24);
      border-radius: size(20);
      .nav-icon {
        height: size(43);
        width: size(43);
        margin-right: size(12);
        img {
          height: 100%;
        }
      }
      .nav-title {
        font-size: size(30);
        letter-spacing: size(3);
      }
    }
  }
  .subnavbar {
    position: absolute;
    width: auto;
    height: size(74.81);
    display: flex;
    align-items: center;
    bottom: size(150);
    left: 50%;
    background: #fff;
    filter: drop-shadow(0 0 size(5) rgba(0, 0, 0, 0.4));
    border-radius: size(30);
    padding: 0 size(35);
    transform: translateX(-50%);
    z-index: 0;
    .item {
      position: relative;
      margin-right: size(40);
      .title {
        font-size: size(30);
      }
      &.router-link-active {
        &:after {
          width: 100%;
        }
      }
      &:hover {
        &:after {
          width: 100%;
        }
      }
      &:last-child {
        margin-right: 0;
      }

      &:after {
        content: "";
        width: 0%;
        height: size(5);
        position: absolute;
        left: 0;
        bottom: -30%;
        transition: all 0.4s;
      }
    }
  }

  //theme
  &.env-theme {
    .nav {
      .nav-item {
        .nav-icon {
          img {
            filter: invert(61%) sepia(20%) saturate(4675%) hue-rotate(41deg)
              brightness(95%) contrast(101%);
          }
        }
        &.selected,
        &:hover {
          background-color: #7baf00;
          .nav-icon {
            img {
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(303deg)
                brightness(103%) contrast(102%);
            }
          }
          .nav-title {
            color: #fff;
          }
        }
      }
    }
    .subnavbar {
      .item {
        &:after {
          background-color: #7baf00;
        }
      }
    }
  }

  &.home-theme {
    .nav {
      .nav-item {
        .nav-icon {
          img {
            filter: invert(25%) sepia(5%) saturate(5125%) hue-rotate(323deg)
              brightness(100%) contrast(83%);
          }
        }
        &.selected,
        &:hover {
          background-color: #734136;
          .nav-icon {
            img {
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(303deg)
                brightness(103%) contrast(102%);
            }
          }
          .nav-title {
            color: #fff;
          }
        }
      }
    }
    .subnavbar {
      .item {
        &:after {
          background-color: #734136;
        }
      }
    }
  }

  &.product-theme {
    .nav {
      .nav-item {
        .nav-icon {
          img {
            filter: invert(64%) sepia(51%) saturate(5816%) hue-rotate(5deg)
              brightness(97%) contrast(101%);
          }
        }
        &.selected,
        &:hover {
          background-color: #ec7900;
          .nav-icon {
            img {
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(303deg)
                brightness(103%) contrast(102%);
            }
          }
          .nav-title {
            color: #fff;
          }
        }
      }
    }
    .subnavbar {
      .item {
        &:after {
          background-color: #ec7900;
        }
      }
    }
  }

  &.team-theme {
    .nav {
      .nav-item {
        .nav-icon {
          img {
            filter: invert(20%) sepia(33%) saturate(4804%) hue-rotate(330deg)
              brightness(72%) contrast(130%);
          }
        }
        &.selected,
        &:hover {
          background-color: #850010;
          .nav-icon {
            img {
              filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(303deg)
                brightness(103%) contrast(102%);
            }
          }
          .nav-title {
            color: #fff;
          }
        }
      }
    }
    .subnavbar {
      .item {
        &:after {
          background-color: #850010;
        }
      }
    }
  }
  // theme end
}
.show-navigation {
  position: fixed;
  z-index: 10;
  width: size(228.5);
  height: size(30.17);
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 150%);
  transition: all 0.3s;
  border-radius: 10px 10px 0 0;
  cursor: pointer;
  img {
    width: 100%;
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
  }
  &.active {
    transform: translate(-50%, 0%);
  }
  &:hover {
    filter: drop-shadow(0 5px 10px rgba(0, 0, 0, 0.5));
  }
}
.hover-detect-area {
  position: fixed;
  width: 100%;
  height: size(100);
  bottom: 0;
  left: 0;
  z-index: 1;
}
</style>

<script>
export default {
  name: "navbar",
  props: {
    theme: String,
  },
  computed: {
    navList() {
      return this.$router.options.routes.filter(
        (item) => item.children.length > 0
      );
    },
    subnavList() {
      const nav = this.$router.options.routes.find(
        (item) => item.path == this.$route.matched[0].path
      );
      return nav ? nav.children : [];
    },
    navOpen() {
      return this.$store.state.navOpen;
    },
    saveTheme() {
      return this.$props.theme;
    },
  },
  watch: {
    navOpen(newVal, oldVal) {
      if (newVal == true) {
        this.$refs.navigation.classList.add(this.saveTheme);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit("toggleNavbar", true);
    }, 500);
  },
};
</script>