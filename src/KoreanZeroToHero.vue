<template>
  <div id="koreanzerotohero">
    <div class="container-fluid bg-dark pt-4 pb-4 pl-0 pr-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <img src="/img/logo-ko-zth-light.png" alt="Korean Zero to Hero" class="logo" />
          </div>
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view ref="routerView" />
    </keep-alive>

    <footer class="container-fluid bg-dark text-light pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <div class="zerotohero" v-html="zerotohero"></div>
            <hr class="border-light mt-0" style="opacity: 0.5" />
            <p>
              <b>Zero to Hero Education, Canada.</b>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import $ from 'jquery'
import Helper from '@/lib/helper'
import KEngDict from '@/lib/kengdict'

export default {
  components: {},
  data() {
    return {
      zerotohero: ''
    }
  },
  created() {
    $.get('https://zerotohero.ca/partials/logos.html', response => {
      this.zerotohero = response
    })
  },
  beforeMount() {
    window.kengdictLoads = KEngDict.load()
  },
  mounted() {
    Helper.loaderMessage('App mounted.')
    window.KoreanZeroToHeroApp = this
    Helper.loaded(LoadedKengDict => {
      this.loaded = true
    })
  }
}
</script>

<style>
.logo {
  height: 6rem;
}
.logo-footer {
  height: 4rem;
  margin-bottom: 2rem;
}
</style>
