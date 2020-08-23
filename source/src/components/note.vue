<template>
  <div class="container-fluid" v-if="!keyVerified">
    <!--/banner-->
    <div class="alert alert-warning">
      <a href="#" class="close" data-dismiss="alert">&times;</a>
      <strong> {{ msg }} </strong>
    </div>
  </div>
  <div class="container-fluid" v-else>
    <!-- 导航栏 -->
    <nav class="navbar navbar-expand-sm mt-2">
      <ul class="navbar-nav">
        <li class="nav-item mr-1">
          <button class="btn btn-primary" type="button" @click="Save2Notes">Save</button>
        </li>
        <li class="nav-item ml-1">
          <button class="btn btn-danger" type="button" @click="ClearNote">Clear</button>
        </li>
      </ul>
    </nav>

    <div class="card">
      <div class="card-header text-left">
        <span class="text-success"> {{ key }} </span><span class="text-info pl-2 pr-2"> {{ msg }} </span>
      </div>
      <div class="card-body bg-yellow">
        <!-- 文本编辑窗口 -->
        <form class="mt-2">
          <div class="form-group">
            <textarea v-model="text" class="form-control" rows="100" id="comment"></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  SetDelayTime
} from '../assets/js/util.js'
export default {
  data () {
    return {
      msg: '',
      objId: '',
      key: '',
      keyVerified: false,
      text: ''
    }
  },

  beforeMount: function () {
    var key = this.$route.query.key
    if (key === '') {
      this.msg = 'Empty Key is Not Allowed!'
      this.keyVerified = false
    } else if (key === undefined) {
      this.msg = 'Undefined Key is Not Allowed!'
      this.keyVerified = false
    } else {
      this.key = key
      this.text = ''
      this.keyVerified = true
      this.GetNoteByKey(key)
    }
  },
  methods: {
    // 从云上获取笔记
    GetNoteByKey: function (key) {
      console.log('GetNoteByKey is called, key: ', key)
      const query = this.Bmob.Query('Note')
      var that = this
      query.equalTo('n_t_key', '==', key)
      query.find().then(res => {
        console.debug('res: ', res)
        if (res.length) {
          that.objId = res[0].objectId
          that.text = res[0].n_t_text
          that.SetLogMsg('Download Note Success!')
        } else {
          that.CreateNote(key)
        }
      }).catch(err => {
        console.error('err: ', err)
        that.SetLogMsg('Download Note Failed!')
      })
    },

    // 创建笔记
    CreateNote: function (key) {
      console.log('CreateNote is called, key: ', key)
      const query = this.Bmob.Query('Note')
      var that = this
      query.set('n_t_key', key)
      query.set('n_t_text', '')
      query.save().then(res => {
        console.log('res: ', res)
        that.objId = res.objectId
        that.SetLogMsg('Create Note Success!')
      }).catch(err => {
        console.error('err: ', err)
        that.SetLogMsg('Create Note Failed!')
      })
    },

    // 保存到云上
    Save2Notes: function () {
      console.log('Save2Notes is called, objId: ', this.objId)
      if (this.objId === '') {
        console.error('You have not link to a note')
        return false
      }
      var that = this
      const query = this.Bmob.Query('Note')
      query.set('id', this.objId)
      query.set('n_t_text', this.text)
      query.save().then(res => {
        console.log('res: ', res)
        that.SetLogMsg('Update Note Success!')
      }).catch(err => {
        console.error('err: ', err)
        that.SetLogMsg('Update Note Failed!')
      })
    },

    ClearNote: function () {
      this.text = ''
    },

    SetLogMsg: function (msg) {
      this.msg = msg
      SetDelayTime(50000).then(() => {
        this.msg = ''
      })
    }
  }
}
</script>

<style>
  @import url("../assets/css/note.css");
</style>
