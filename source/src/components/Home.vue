<template>
    <div>
        <!-- mian-content -->
        <div class="main-banner" id="home">
            <!--/banner-->
            <div class="banner-info">
                <div class="w3pvt-logo text-center">
                    <h1>Jackie's island</h1>
                </div>
                <div class="middile-inner-con">
                    <div class="tab-main mx-auto">
                        <input id="tab1" type="radio" name="tabs" class="w3layouts-sm" checked>
                        <label for="tab1"><span class="fa fa-home" aria-hidden="true"></span>Home</label>
                        <input id="tab2" type="radio" class="w3layouts-sm" name="tabs">
                        <label for="tab2"><span class="fa fa-users" aria-hidden="true"></span> About</label>
                        <input id="tab3" type="radio" class="w3layouts-sm" name="tabs">
                        <label for="tab3"><span class="fa fa-files-o" aria-hidden="true"></span>Projects</label>
                        <input id="tab4" type="radio" class="w3layouts-sm" name="tabs">
                        <label for="tab4"><span class="fa fa-envelope" aria-hidden="true"></span> Contact</label>
                        <section id="content1" class="inner-w3layouts-wrap">
                            <img src="../assets/images/admin.jpg" class="admin img-fluid" alt="mobile-image">
                            <h4>Hi I'm Jackie</h4>
                            <h2>A coder and dreamer.</h2>
                            <p></p>
                        </section>
                        <section id="content2" class="inner-w3layouts-wrap">
                            <h3 class="head-w3ls">Where are you</h3>
                            <p>It's a place for me to keep my thoughts and works.</p>
                        </section>
                        <section id="content3" class="inner-w3layouts-wrap">
                            <h3 class="head-w3ls">Have fun here with key4u</h3>
                            <div class="row news-grids text-center">
                                <div class="col-4 gal-img">
                                    <a href="#gal1"><img src="../assets/images/g1.jpg" alt="news image" class="img-fluid"></a>
                                    <a href="#gal2"><img src="../assets/images/g3.jpg" alt="news image" class="img-fluid"></a>
                                </div>
                                <div class="col-4 gal-img">
                                    <a href="#gal3"><img src="../assets/images/g2.jpg" alt="news image" class="img-fluid"></a>
                                    <a href="#gal4"><img src="../assets/images/g4.jpg" alt="news image" class="img-fluid"></a>
                                </div>
                                <div class="col-4 gal-img">
                                    <a href="#gal5"><img src="../assets/images/g5.jpg" alt="news image" class="img-fluid"></a>
                                    <a href="#gal6"><img src="../assets/images/g6.jpg" alt="news image" class="img-fluid"></a>
                                </div>
                                <!-- popup-->
                            </div>
                        </section>
                        <section id="content4" class="inner-w3layouts-wrap">
                            <h3 class="head-w3ls">welcome to message me</h3>
                            <form name="contact-form" class="contact-form" @submit.prevent="SendMessage2Me">
                                <div class="row">
                                    <div class="col-6 con-gd">
                                        <div class="form-group">
                                            <p>Name *</p>
                                            <input v-model="message.name" type="text" class="form-control" id="name" placeholder="" name="name" required="">
                                        </div>
                                        <div class="form-group">
                                            <p>Email *</p>
                                            <input v-model="message.email" type="email" class="form-control" id="email" placeholder="" name="email" required="">
                                        </div>
                                    </div>
                                    <div class="col-6 con-gd">
                                        <div class="form-group">
                                            <p>Send a Message *</p>
                                            <textarea v-model="message.content" name="Message" placeholder="" required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-default">Submit</button>
                                </div>
                            </form>
                            <h4> {{ message.res }} </h4>
                            <!-- 暂不开放其他联系方式 -->
                            <!-- ul class="w3pvt_social_list list-unstyled mt-4">
                                <li>
                                    <a href="#" class="w3layouts-icon">
                                        <span class="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="w3layouts-icon">
                                        <span class="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="w3layouts-icon">
                                        <span class="fa fa-dribbble"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" class="w3layouts-icon">
                                        <span class="fa fa-google-plus"></span>
                                    </a>
                                </li>
                            </ul -->
                        </section>
                    </div>
                    <!--// banner-inner -->
                </div>
            </div>
            <div class="copy-w3layouts-right text-center pb-3">
                <p>Copyright &copy; 2020. Jackie's Island No rights reserved.</p>
            </div>
        </div>
        <!--//main-content-->
    </div>
</template>

<script>
import { SetDelayTime } from '../assets/js/util.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // 工程列表
      projects: [
        {
          icon: '../assets/images/g1.jpg',
          key: 'sphinx1'
        },
        {
          icon: '../assets/images/g2.jpg',
          key: 'sphinx2'
        },
        {
          icon: '../assets/images/g3.jpg',
          key: 'sphinx3'
        },
        {
          icon: '../assets/images/g4.jpg',
          key: 'sphinx4'
        },
        {
          icon: '../assets/images/g5.jpg',
          key: 'sphinx5'
        },
        {
          icon: '../assets/images/g6.jpg',
          key: 'sphinx6'
        }
      ],

      // 联系我：邮件信息
      message: {
        name: '',
        email: '',
        content: '',
        res: ''
      }
    }
  },
  methods: {
    SendMessage2Me: function () {
      console.log('SendMessage2Me is called')
      const query = this.Bmob.Query('Message')
      query.set('m_s_name', this.message.name)
      query.set('m_s_email', this.message.email)
      query.set('m_s_content', this.message.content)
      query.save().then(res => {
        this.message.name = ''
        this.message.email = ''
        this.message.content = ''
        this.message.res = 'Success, thank you!'
        SetDelayTime(5000).then(() => {
          this.message.res = ''
        })
        console.log('res: ', res)
      }).catch(err => {
        this.message.res = 'Failed, sorry!'
        SetDelayTime(5000).then(() => {
          this.message.res = ''
        })
        console.error('err: ', err)
      })
    }
  }
}
</script>

<style>
  @import url("../assets/css/style.css");
  @import url("../assets/css/font-awesome.css");
  @import url("http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200i,300,300i,400,400i,600,600i,700,700i,900");
  @import url("http://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800");
</style>
