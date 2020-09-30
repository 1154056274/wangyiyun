<template>
  <div id="app">
    <div class="A-header">
   <Header />
    </div>
    <div class="A-aside">
      <Aside />
      <router-view></router-view>
    </div>
    <div class="A-footer">
      <Footer />

    </div>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Aside from './components/aside/index'
import Footer from './components/footer/Footer'

export default {
  name: 'App',
  components: {
  Header,
  Aside,
  Footer,
  
  }
}
</script>

<style lang='scss' >
#app{
    height: 1000px;
    width: 1200px;
    overflow: hidden;
    border-radius: 4px;
    background-color: white;
    margin: 20px auto auto auto;
}
</style>
