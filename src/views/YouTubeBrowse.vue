<template>
  <div class="youtube-browse container mt-5 mb-5 main">
    <div class="row">
      <div class="col-sm-12">
        <h1 class="mb-5 text-center">Study YouTube Subtitles</h1>
        <h4 class="mt-5">
          Choose one of the channels below
        </h4>
        <hr />
        <p class="mb-5">A collection of YouTube videos with subtitles.</p>
        <ul class="list-unstyled p-0 mb-5">
          <li v-for="channel in channels" class="rounded shadow p-4 mb-4">
            <YouTubeChannelCard :channel="channel" />
          </li>
        </ul>

        <h4 class="mt-5 mb-5">
          Study
          <em>any</em> YouTube video that has Korean closed captions
        </h4>

        <div class="jumbotron bg-light pt-4 pb-3 mt-3 mb-3">
          <YouTubeNav class="mb-4" />
          <ol>
            <li>
              Go to YouTube, search a Korean word. For example
              <b>다큐</b>.
            </li>
            <li>
              Click on
              <b>Filter</b>, and choose
              <b>Subtitls/CC.</b>
            </li>
            <li>
              Open a video that interests you. <br /><small
                ><b>Note:</b> Many have closed captions, but they are in
                <em>English.</em> You need to look for <em>Korean</em> closed
                captions. These are hard to find. If you cannot find any, look
                in the suggested channels listed on this page.</small
              >
            </li>
            <li>
              Copy the video's URL, paste it into the box above, and press
              <b>Enter</b>
              or click
              <b>Study.</b>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YouTubeNav from '@/components/YouTubeNav'
import YouTubeChannelCard from '@/components/YouTubeChannelCard'

export default {
  components: {
    YouTubeNav,
    YouTubeChannelCard
  },
  props: {
    args: {
      type: String
    }
  },
  data() {
    return {
      channels: [
        {
          id: 'UCgheNMc3gGHLsT-RISdCzDQ',
          title: '세바시 강연 Sebasi Talk',
          description: "It's like TED, but in Korea.",
          avatar:
            'https://yt3.ggpht.com/a/AGF-l78C0pkrik55b3rSwUPgiTCsgwXiQ2RoPVm7Rw=s288-c-k-c0xffffffff-no-rj-mo'
        }
      ]
    }
  }
}
</script>
