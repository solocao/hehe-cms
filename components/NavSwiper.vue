<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div class="my-swiper" v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners">
        <img :src="banner">
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
const imgUrl = 'http://www.chinanews.com/part/society/508/U422P4T508D1F20424DT20180709135217.jpg'
export default {
  data() {
    return {
      banners: [
        imgUrl, imgUrl, imgUrl
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this)
          },
          tap() {
            console.log('onTap', this)
          }
        }
      }
    }
  },
  mounted() {
    console.log('app init', this)
    console.log(
      'This is current swiper instance object', this.mySwiper,
      'I will slideTo banners 3')
    this.mySwiper.slideTo(3)
  }
}
</script>


<style lang="stylus" scoped>
.my-swiper {
  height: 360px;
  width: 100%;

  .swiper-wrapper {
    height: 100%;
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
