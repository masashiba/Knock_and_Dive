const mediaQuery = window.matchMedia('(max-width: 600px)');
 
// ページが読み込まれた時に実行
handle(mediaQuery);
 
// ウィンドウサイズを変更しても実行（ブレイクポイントの監視）
mediaQuery.addListener(handle);
 
function handle(mm) {
  if (mm.matches) {
    // ウィンドウサイズ600px以下のときの処理
		reservationExplain = {
			props: ["number"],
			template: `<div :style="style.container">
									<div :style="style.numberContainer"><span style="font-size: 1rem;">step</span><span style="font-size: 1.5rem;">{{ number }}</span></div>
									<div :style="style.imgContainer">
										<img :src="explains[number-1].img" v-bind:alt="explains[number-1].title" :style="style.reservationimg">
										<div :style="style.reservationtitle">{{ explains[number-1].title }}</div>
									</div>
									<div :style="style.messageContainer">
										<ul v-for="message in explains[number-1].messages" :style="style.message">
											<li v-html="message"></li>
										</ul>
									</div>
								</div>`,
			data: function(){
				return {
					explains: [
						{
							title: "入場予約フォームで応募",
							messages: [
								"1組あたり上限3人までとなります。",
								"小学生以下の方のみで入場することはできません。保護者の方の同伴をお願いします。",
								"3/20から4/7の間に入場予約フォームから応募してください。"
							],
							img: "./img/form.svg"
						},
						{
							title: "デジタルチケットの添付されたメールを受信",
							messages: [
								"応募者多数の場合は抽選をします。",
								"メールは、4月に配信予定です。"
							],
							img: "./img/mail.svg"
						},
						{
							title: "イベントの予約",
							messages: [
								"4月中旬、イベント参加の事前予約をします。"
							],
							img: "./img/clipboard.svg"
						},
						{
							title: "校舎へ入場！",
							messages: [
								"受付ブースでデジタルチケットを提示してください。<br>灘校文化祭の世界へKnock&Dive!"
							],
							img: "./img/school.svg"
						},
					],
					style: {
						container: {
							'display': 'flex',
							'flex-direction': 'row',
							'position': 'relative',
							'width': '90vw',
							'height': '28vh',
							'border': 'solid #5CB4EF 2px',
							'border-radius' : '20% / 50%',
							'box-shadow': '10px 15px 0px 0 #ADADAD'
						},
						numberContainer: {
							'display': 'flex',
							'flex-direction': 'row',
							'align-items': 'center',
							'position': 'absolute',
							'height': '2rem',
							'top': '-5%',
							'left': '0',
							'color': 'white',
							'background': '#ED9A5D',
							'padding': '0.2rem 1rem',
							'border-radius' : '20% / 50%'
						},
						imgContainer: {
							'display': 'flex',
							'width': '35%',
							'height': '100%',
							'padding-left': '10%',
							'flex-direction': 'column',
							'justify-content': 'space-around',
							'align-items': 'center',
							'background': '#5CB4EF',
							'border-radius' : '40% 0 0 40% / 50% 0 0 50%'
						},
						reservationimg: {
							'max-height': '75%',
							'max-width': '60%'
						},
						reservationtitle: {
							'max-width': '80%',
							'color': 'white',
							'font-size': '0.8rem'
						},
						messageContainer: {
							'width': '50%',
							'height': '100%',
							'padding-top': '3%',
							'padding-bottom': '3%',
						},
						message: {
							'width': '75%',
							'font-size': '0.6rem',
							'padding-left': '1.5rem',
						}
					}
				}
			},
		}
  } else {
    // それ以外の処理
		reservationExplain = {
			props: ["number"],
			template: `<div :style="style.container">
									<div :style="style.numberContainer"><span style="font-size: 1.5rem;">step</span><span style="font-size: 2.5rem;">{{ number }}</span></div>
									<div :style="style.imgContainer">
										<img :src="explains[number-1].img" v-bind:alt="explains[number-1].title" :style="style.reservationimg">
										<div :style="style.reservationtitle">{{ explains[number-1].title }}</div>
									</div>
									<div :style="style.messageContainer">
										<ul v-for="message in explains[number-1].messages" :style="style.message">
											<li v-html="message"></li>
										</ul>
									</div>
								</div>`,
			data: function(){
				return {
					explains: [
						{
							title: "入場予約フォームで応募",
							messages: [
								"1組あたり上限3人までとなります。",
								"小学生以下の方のみで入場することはできません。保護者の方の同伴をお願いします。",
								"3/20から4/2の間に入場予約フォームから応募してください。"
							],
							img: "./img/form.svg"
						},
						{
							title: "デジタルチケットの添付されたメールを受信",
							messages: [
								"応募者多数の場合は抽選をします。",
								"メールは、4月に配信予定です。"
							],
							img: "./img/mail.svg"
						},
						{
							title: "イベントの予約",
							messages: [
								"4月中旬、イベント参加の事前予約をします。"
							],
							img: "./img/clipboard.svg"
						},
						{
							title: "校舎へ入場！",
							messages: [
								"受付ブースでデジタルチケットを提示してください。<br>灘校文化祭の世界へKnock&Dive!"
							],
							img: "./img/school.svg"
						},
					],
					style: {
						container: {
							'display': 'flex',
							'flex-direction': 'row',
							'position': 'relative',
							'width': '55vw',
							'height': '42vh',
							'border': 'solid #5CB4EF 2px',
							'border-radius' : '20% / 50%',
							'box-shadow': '10px 15px 0px 0 #ADADAD'
						},
						numberContainer: {
							'display': 'flex',
							'flex-direction': 'row',
							'align-items': 'center',
							'position': 'absolute',
							'height': '3rem',
							'top': '-5%',
							'left': '0',
							'color': 'white',
							'background': '#ED9A5D',
							'padding': '0.2rem 1rem',
							'border-radius' : '20% / 50%'
						},
						imgContainer: {
							'display': 'flex',
							'width': '45%',
							'height': '100%',
							'padding-left': '10%',
							'flex-direction': 'column',
							'justify-content': 'space-around',
							'align-items': 'center',
							'background': '#5CB4EF',
							'border-radius' : '40% 0 0 40% / 50% 0 0 50%'
						},
						reservationimg: {
							'max-height': '75%',
							'max-width': '60%'
						},
						reservationtitle: {
							'max-width': '80%',
							'color': 'white',
							'font-size': '1rem'
						},
						messageContainer: {
							'width': '55%',
							'height': '100%',
							'padding-top': '10%',
							'padding-bottom': '10%',
							'padding-left': '5%'
						},
						message: {
							'width': '75%',
						}
					}
				}
			},
		}
	}
}


new Vue({
  el:"#wrapper",
  components: {
     'reservation-explain': reservationExplain
  },
})
