<template>
  <div id="koreanzerotohero">
    <div class="container-fluid bg-dark pt-4 pl-0 pr-0">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-center">
            <router-link to="/"
              ><img
                src="/img/logo-ko-zth-light.png"
                alt="Korean Zero to Hero"
                class="logo"
            /></router-link>
          </div>
        </div>
        <div class="row mt-3" v-cloak>
          <div class="col-sm-12">
            <Nav />
          </div>
        </div>
      </div>
    </div>
    <SubNav class="pt-4" />
    <keep-alive>
      <router-view ref="routerView" />
    </keep-alive>

    <footer class="container-fluid bg-dark text-light pt-4 pb-4">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <LanguageLogos />
            <hr class="border-light" style="opacity: 0.5" />
            <p>
              <b>Zero to Hero Education, Canada.</b>
            </p>
            <p>
              <b>Credits:</b> Korean-English dictionary data from Joe Speigle's
              open-source project
              <a href="https://github.com/garfieldnate/kengdic">kengdic</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Config from '@/lib/config'
import Helper from '@/lib/helper'
import KEngDic from '@/lib/kengdic'
import Hanzi from '@/lib/hanzi'
import Unihan from '@/lib/unihan'
import Nav from '@/components/Nav'
import SubNav from '@/components/SubNav'
import LanguageLogos from '@/components/LanguageLogos'

export default {
  components: {
    Nav,
    SubNav,
    LanguageLogos
  },
  data() {
    return {
      languages: [],
      Config
    }
  },
  beforeMount() {
    $.getJSON(`${Config.server}data/languages.json`, response => {
      this.languages = response
    })
    window.KEngDicLoads = KEngDic.load()
    window.hanziLoads = Hanzi.load()
    window.unihanLoads = Unihan.load()
  },
  mounted() {
    Helper.loaderMessage('App mounted.')
    window.KoreanZeroToHeroApp = this
    Helper.loaded(() => {
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
