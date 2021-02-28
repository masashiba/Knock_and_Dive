var imgsforpc = [
  {index:0,name:"black_square.svg",width:302,top:-72,left:119},
  {index:1,name:"orange_rectangle.svg",width:290,top:202,left:1673},
  {index:2,name:"pink_circle.svg",width:183,top:922,left:1116},
  {index:3,name:"white_triangle.svg",width:232,top:1149,left:-8},
  {index:4,name:"lightgreen_square.svg",width:284,top:1342,left:1794},
  {index:5,name:"orange_circle.svg",width:184,top:2196,left:363},
  {index:6,name:"blue_rectangle.svg",width:378,top:2669,left:1664},
  {index:7,name:"green_triangle.svg",width:191,top:3220,left:73},
  {index:8,name:"pink_circle.svg",width:183,top:4093,left:1761},
  {index:9,name:"orange_rectangle.svg",width:290,top:4546,left:-35},
  {index:10,name:"yellow_triangle1.png",width:100,top:3892,left:1493},
  {index:11,name:"yellow_triangle2.png",width:100,top:3919,left:288},
  {index:12,name:"yellow_triangle3.png",width:100,top:4410,left:1668},
  {index:13,name:"yellow_triangle4.png",width:100,top:4507,left:275},
  {index:14,name:"yellow_triangle5.png",width:100,top:4703,left:1211}
]

var imgsformobile = [
  {index:0,name:"black_square.svg",width:302,top:-72,left:119},
  {index:1,name:"orange_rectangle.svg",width:290,top:362,left:1673},
  {index:2,name:"pink_circle.svg",width:183,top:1072,left:1116},
  {index:3,name:"white_triangle.svg",width:232,top:1299,left:-8},
  {index:4,name:"lightgreen_square.svg",width:284,top:1762,left:1734},
  {index:5,name:"orange_circle.svg",width:184,top:4316,left:363},
  {index:6,name:"blue_rectangle.svg",width:378,top:4789,left:1664},
  {index:7,name:"green_triangle.svg",width:191,top:5340,left:73},
  {index:8,name:"pink_circle.svg",width:183,top:6213,left:1761},
  {index:9,name:"orange_rectangle.svg",width:290,top:6666,left:-35},
  {index:10,name:"yellow_triangle1.png",width:100,top:6012,left:1493},
  {index:11,name:"yellow_triangle2.png",width:100,top:6039,left:288},
  {index:12,name:"yellow_triangle3.png",width:100,top:6530,left:1668},
  {index:13,name:"yellow_triangle4.png",width:100,top:6627,left:275},
  {index:14,name:"yellow_triangle5.png",width:100,top:6823,left:1211},
  {index:15,name:"black_square.svg",width:231,top:2723,left:-20}
]

if (window.matchMedia("(min-width: 600px)").matches) {
  var imgs = imgsforpc
} else {
  var imgs = imgsformobile
}

var bgimgsvm = new Vue({
  el:"#bgimgs",
  data: {
    imgs: imgs
  },
  methods: {
    scrollTop: function(){
      window.scrollTo({
        top: 10,
        behavior: "smooth"
      });
    }
  },
  mounted: function(){
    this.scrollTop()
  }
})

window.onresize = function(){
  if (window.matchMedia("(min-width: 600px)").matches) {
    bgimgsvm.$data.imgs = imgsforpc
  } else {
    bgimgsvm.$data.imgs = imgsformobile
  }
}

new Vue({
  el: "#logos"
})

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
        WebkitTransform: 'rotate(-8.3deg)',
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
        message: "“Knock&Dive”では、校舎への入場は、事前の予約が必要です。<br>応募期間は、３月20日から４月２日。応募者多数の場合は、抽選を行います。<br>詳細は追ってお伝えします！"
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
