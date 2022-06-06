<template>
  <div>
    <div class="cursor">
    </div>
  </div>
</template>

<script>
import { cursorMove } from 'ufo-cursor'
import 'ufo-cursor/ufocursor.css'

export default {
  name: 'ufo',

  mounted () {
    cursorMove()
  }
}
</script>

<style>
</style>
