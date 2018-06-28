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
const imgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530800114&di=833a62823bd0bbf8f23f87f055a78d9a&imgtype=jpg&er=1&src=http%3A%2F%2Fmxycsku.qiniucdn.com%2Fgroup5%2FM00%2F60%2F97%2FwKgBfVXjugCADLRuAAQ1wDHAr7A26.jpeg%3FimageMogr2%2Fstrip%2Fthumbnail%2F800%26gt%3B%2Fquality%2F95'
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
  height: 300px;
  width: 300px;

  .swiper-wrapper {
    height: 300px;
    width: 300px;

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
