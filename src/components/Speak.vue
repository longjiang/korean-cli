<template>
  <font-awesome-icon
    icon="volume-up"
    class="focus-exclude speak"
    @click="speak(text)"
  />
</template>
<script>
export default {
  data() {
    return {}
  },
  props: ['text'],
  methods: {
    speak(text) {
      var utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'zh-CN'
      speechSynthesis.speak(utterance)
    }
  }
}
</script>

<style>
i.speak {
  cursor: pointer;
  color: #ccc;
  position: relative;
  top: 0.2em;
}

.speak:hover {
  color: inherit;
}
</style>
