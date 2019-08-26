<template>
  <!-- ANCHOR img/anchors/entry.png  -->
  <div class="entry-head-wrapper" v-if="entry">
    <div>
      <div class="entry-word-wrapper" style="display:inline-block">
        <div>
          <!-- <Star :word="entry"></Star> -->
          <Speak class="ml-1" :text="entry.hangul" />
        </div>
        <div class="entry-word">
          <a :href="`#/dictionary/KEngDic/${entry.id}`">
            <span data-hsk="outside">{{ entry.hangul }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Helper from '@/lib/helper'

export default {
  props: {
    entry: {
      type: Object
    },
    minimal: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      Helper
    }
  }
}
</script>

<style lang="scss">
.entry-pinyin {
  font-size: 1.1rem;
}

.entry-word {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .entry-word {
    font-size: 3rem;
  }
}

.entry-word img {
  width: 4.8rem;
  border: 1px solid #ccc;
}

.entry-word a {
  color: inherit;
  text-decoration: inherit;
}

.entry-head-wrapper {
  position: relative;
}

.entry-head-wrapper .toggle-saved-word {
  padding: 0;
  background: none;
  border: none;
  margin: 0;
  color: #ffe597;
  position: relative;
  bottom: -0.09em;
}
</style>
