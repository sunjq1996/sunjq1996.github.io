<template>
  <!-- 弹幕 -->
  <div>
    <vue-baberrage
      :isShow="visible"
      :barrageList="barrage.list"
      :loop="true" class="banner-barrage">
    </vue-baberrage>
  </div>
</template>

<script>
export default {
  name: 'Barrage',
  props: ['visible'],
  // 数据
  data () {
    return {
      barrage: {
        list: []
      }
    }
  },

  // 方法
  methods: {
    InitList: function () {
      const query1 = this.Bmob.Query('Barrage')
      const query2 = this.Bmob.Query('Message')

      // 查询Jackie表
      query1.find().then(res1 => {
        // console.log('res: ', res) // 获取弹幕查询结果
        for (var ii = 0; ii < res1.length; ii++) { // 插入到弹幕显示组
          this.barrage.list.push({
            id: ii.toString(),
            avatar: require('../assets/images/avatar0.jpg'),
            msg: res1[ii].b_r_text,
            time: Math.round(Math.random() * 10 + 5)
          })
        }

        // 查询Xiong表
        query2.find().then(res2 => {
          // console.log('res: ', res) // 获取弹幕查询结果
          for (var ii = 0; ii < res2.length; ii++) { // 插入到弹幕显示组
            this.barrage.list.push({
              id: (res1.length + ii).toString(),
              avatar: require('../assets/images/avatar1.jpg'),
              msg: res2[ii].m_s_content,
              time: Math.round(Math.random() * 10 + 5)
            })
          }
        }).catch(err => {
          console.error('err: ', err)
        })
      }).catch(err => {
        console.error('err: ', err)
      })
    }
  },

  mounted: function () {
    this.InitList()
  }
}
</script>

<style>
.banner-barrage {
  top: 0;
  left: 0;
}
</style>
