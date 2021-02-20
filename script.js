explanationBox = {
  props: ["title","message"],
  template: `<div style="position: relative">
              <img src="./img/box_nothing.svg" style="width: 100%;">
              <p :style="[titleStyle,{fontSize: width * 0.04 + 'px'}]"><span v-html="title"></span></p>
              <div :style="[messageStyle,{fontSize: width * 0.43 / Math.sqrt(messagelen) + 'px'}]">
                <p><span v-html="message"></span></p>
              </div>
            </div>`,
  data: function(){
    return {
      width: 0,
      titleStyle: {
        position: 'absolute',
        top: '1.6%',
        left: '-0.2%',
        width: '50%',
        transform: 'rotate(-8.3deg)',
        fontFamily: "GenShinGothic-Heavy",
        textAlign: "center"
      },
      messageStyle: {
        position: 'absolute',
        width: '63.1%',
        top: '18.9%',
        left: '9.5%',
        padding: '0 12.5% 0 13%',
        fontFamily: "GenShinGothic-Medium"
      }
    }
  },
  computed: {
    messagelen: function(){
      return this.message.length
    }
  },
  methods: {
    getTargetWidth: function() {
      this.width = this.$el.clientWidth
    }
  },
  mounted: function(){
    this.getTargetWidth()
    window.addEventListener('resize', this.getTargetWidth)
  }
}

new Vue({
  el: "#logos"
})

new Vue({
  el:"#bgimgs",
  data: {
    imgs:[
      {index:0,feature:"black_square",width:302,top:-72,left:119},
      {index:1,feature:"orange_rectangle",width:290,top:202,left:1673},
      {index:2,feature:"pink_circle",width:183,top:922,left:1116},
      {index:3,feature:"white_triangle",width:232,top:1149,left:-8},
      {index:4,feature:"lightgreen_square",width:284,top:1342,left:1794},
      {index:5,feature:"orange_circle",width:184,top:2196,left:363},
      {index:6,feature:"blue_rectangle",width:378,top:2669,left:1664},
      {index:7,feature:"green_triangle",width:191,top:3220,left:73}
    ]
  }
})

new Vue({
  el:"#explanation",
  components: {
     'explanation-box': explanationBox
  },
  data: {
    explanations: [
      {
        id: 0,
        title: "オンライン文化祭",
        message: "今年は、校舎とオンラインの同時開催。<br>部誌や展示物の公開、YouTubeチャンネルでの動画企画をはじめ、幅広い企画を５月２・３日に公開します。詳しくは、公式サイトやSNSで告知いたします。<br>あなたも、灘校文化祭の世界へKnock＆Dive！"
      },
      {
        id: 1,
        title: "予約準備中",
        message: "“Knock&Dive”では、校舎への入場は、事前の予約が必要です。<br>応募期間は、３月20日から４月２日。応募者多数の場合は、抽選を行います。<br>詳しくはリンクをクリック！"
      }
    ]
  }
})

new Vue({
  el:"#countdown",
  computed: {
    maysecond: function(){
      return new Date(2021, 4, 2, 0, 0, 0)
    },
    now: function(){
      return Date.now()
    },
    left: function(){
      return Math.ceil((this.maysecond - this.now)/(1000 * 60 * 60 * 24))
    }
  }
})
