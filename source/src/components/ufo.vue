<template>
  <div style='width:100vw;height: 100vh;'>
    <!-- <video id="video" :src="path" hidden="hidden" controls="controls" autoplay loop> </video> -->
    <video id="video" :src="path" hidden="hidden" controls="controls" autoplay loop> </video>
    <night-sky id='nightSky' layers='3' density='146' velocity='122' starcolor='#ffffff' />

    <div id='content'>
      <div class='beam'>
        <img id="island" src="../assets/images/island-withname.png">
      </div>
      <div class='cursor'></div>
    </div>
  </div>
</template>

<script>
import {
  cursorMove
} from 'ufo-cursor'
import 'ufo-cursor/ufocursor.css'
import '@h0rn0chse/night-sky/dist/bundle.min.js'

export default {
  name: 'ufo',

  data () {
    return {
      path: require('../assets/songs/天空之城-宫崎骏.mp3')
    }
  },

  mounted () {
    cursorMove()
  }
}
</script>

<style>
  #content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
  }

  #nightSky {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  #island {
    width: 30vw;
    height: auto;
  }
</style>
