<template>
  <div class="banner">
    <video id="video" :src="songs.list[songs.idx].path" controls="controls" hidden="hidden" autoplay="autoplay"  loop="loop"> </video>
    <!--/*外层最大容器*/-->
    <div class="wrap" v-show="cube.isVisible">
      <!-- 包裹所有元素的容器 -->
      <div class="cube">
        <!--外部图片 -->
        <div v-for="(item, index) in cube.pathsout" v-bind:key="index" :class="'out_'+cube.cssspans[index]">
          <img :src="item" class="pic" />
        </div>
        <!--内部图片 -->
        <span v-for="(item, index) in cube.pathsin" v-bind:key="index" :class="'in_'+cube.cssspans[index]">
          <img :src="item" class="in_pic" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Xiong',
  data () {
    return {
      // 图片框
      cube: {
        isVisible: true,
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
          require('../assets/images/sun4.png'),
          require('../assets/images/xiong1.png'),
          require('../assets/images/sun5.png'),
          require('../assets/images/xiong2.png'),
          require('../assets/images/sun6.png'),
          require('../assets/images/xiong3.png')
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
  }
}
</script>

<style>
  @import url("../assets/css/xiong.css");
</style>
