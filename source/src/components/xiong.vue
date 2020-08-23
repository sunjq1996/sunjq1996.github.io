<template>
  <div class="banner">
    <!--/banner-->
    <div class="alert alert-warning" v-if="!keyVerified">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong>Sorry, Your Have Submitted a Wrong Key!</strong>
    </div>
    <div class="banner-info p-0" v-else>
      <div class="middile-inner-con">
        <div class="tab-main mx-auto">
          <label class="bg-transparent border-0" v-for="(item, index) in nav" v-bind:key="'nav'+index" @click="NavClick(item.name)">
            <i class="fa-2x" :class="'fa'+' '+item.icon" aria-hidden="true"></i>
          </label>
        </div>
      </div>
    </div>
    <video id="video" :src="songs.list[songs.idx].path" @ended="SongsSwitcher" hidden="hidden" controls="controls" :autoplay="keyVerified" :loop="false"> </video>
    <!--/*外层最大容器*/-->
    <div class="wrap" v-show="cube.isVisible">
      <!-- 包裹所有元素的容器 -->
      <div class="cube">
        <!--外部图片 -->
        <div v-for="(item, index) in cube.pathsout" v-bind:key="'cube-out-'+index" :class="'out_'+cube.cssspans[index]">
          <img :src="item" class="pic" />
        </div>
        <!--内部图片 -->
        <span v-for="(item, index) in cube.pathsin" v-bind:key="'cube-in-'+index" :class="'in_'+cube.cssspans[index]">
          <img :src="item" class="in_pic" />
        </span>
      </div>
    </div>
    <div @click="BarrageClose">
      <barrage :visible="barrage.isVisible"></barrage>
    </div>
  </div>
</template>

<script>
import barrage from './barrage.vue'
export default {
  name: 'xiong',
  components: { barrage },
  data () {
    return {
      key: 'sphinx',
      keyVerified: false,
      nav: [
        {
          name: 'music',
          icon: 'fa-music'
        },
        {
          name: 'envelope',
          icon: 'fa-envelope'
        },
        {
          name: 'cube',
          icon: 'fa-heart'
        }
      ],

      barrage: {
        isVisible: false
      },

      // 图片框
      cube: {
        isVisible: false,
        cssspans: ['front', 'back', 'left', 'right', 'top', 'bottom'],
        pathsout: [
          require('../assets/images/sun1.png'),
          require('../assets/images/xiong4.png'),
          require('../assets/images/sun2.png'),
          require('../assets/images/xiong5.png'),
          require('../assets/images/sun3.png'),
          require('../assets/images/xiong6.png')
        ],
        pathsin: [
          require('../assets/images/xiong1.png'),
          require('../assets/images/sun4.png'),
          require('../assets/images/xiong2.png'),
          require('../assets/images/sun5.png'),
          require('../assets/images/xiong3.png'),
          require('../assets/images/sun6.png')
        ]
      },

      // 背景音乐
      songs: {
        idx: 0,
        list: [
          {
            name: '遇见',
            path: require('../assets/songs/孙燕姿-遇见.mp3')
          },
          {
            name: 'Bicycle Tricycle',
            path: require('../assets/songs/Bicycle Tricycle.mp3')
          },
          {
            name: 'Travelling Alone',
            path: require('../assets/songs/Travelling Alone.mp3')
          }
        ]
      }
    }
  },

  beforeMount: function () {
    var key = this.$route.query.key
    if (key === this.key) {
      this.keyVerified = true
    }
    console.log(this.keyVerified)
  },

  methods: {
    // 自动播放下一首歌
    SongsSwitcher: function () {
      this.songs.idx = this.songs.idx < this.songs.list.length - 1 ? this.songs.idx + 1 : 0
    },

    // 点击导航栏
    NavClick: function (tab) {
      if (tab === 'music') {
        this.SongsSwitcher()
      } else if (tab === 'cube') {
        this.cube.isVisible = !this.cube.isVisible
      } else if (tab === 'envelope') {
        this.barrage.isVisible = !this.barrage.isVisible
      } else {}
    },

    // 关闭弹幕
    BarrageClose: function () {
      if (this.barrage.isVisible) {
        this.barrage.isVisible = false
      }
    }
  }
}
</script>

<style>
  @import url("../assets/css/xiong.css");
</style>
