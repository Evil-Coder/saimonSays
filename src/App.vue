<template>
	<div id="app">
		<div class="result">
			<h1 class="result__message" v-show="showRating">{{result}} - Вы проиграли!</h1>
			<h3 class="result__rating" v-show="showRating && ratings['mode']">{{ ratings[result] }}</h3>
		</div>
		<form class="game-mode">
			<label class="game-mode__element">
				<input @click="ratings.mode = !ratings.mode" name="rating-mode" class="game-mode__button game-mode__rating" type="checkbox"/>
				Оценка</label>
			<label class="game-mode__element">
				<input @click="gameMode = 1500" name="game-mode" class="game-mode__button game-mode__easy" type="radio"/>
				Легкий</label>
			<label class="game-mode__element">
				<input @click="gameMode = 1000" name="game-mode" class="game-mode__button game-mode__medium" type="radio" checked/>
				Средний</label>
			<label class="game-mode__element">
				<input @click="gameMode = 400" name="game-mode" class="game-mode__button game-mode__hard" type="radio"/>
				Сложный</label>
			<label class="game-mode__element">
				<input @click="gameMode = 200" name="game-mode" class="game-mode__button game-mode__melodi" type="radio"/>
				Мелодия</label>
		</form>
		<section class="simon">
			<div class="simon__panel-container">
				<div class="simon__panel simon__panel_top-left"
					 	@click.prevent="melodies[1].play() && userAnswer(1)"></div>
				<div class="simon__panel simon__panel_top-right"
					 	@click.prevent="melodies[2].play() && userAnswer(2)"></div>
			</div>

			<button class="simon__button-start" @click.prevent="startGame">Старт</button>

			<div class="simon__panel-container">
				<div class="simon__panel simon__panel_bottom-left"
					 	@click.prevent="melodies[3].play() && userAnswer(3)"></div>
				<div class="simon__panel simon__panel_bottom-right"
					 	@click.prevent="melodies[4].play() && userAnswer(4)"></div>
			</div>
		</section>

	</div>
</template>

<script>
import * as supMethods from './components/supportMethods'

export default {
	name: 'App',
	data() {
		return {
			gameMode: 1000,
			panels: [],
			needNumbers: [],
			userNumbers: [],
			numberAnswer: 0,
			result: 1,
			showRating: false,
			ratings: {
				mode: false,
				'1': 'Ты играешь лицом?',
				'2': 'Позорненько',
				'3': 'Ты поспорил что проиграешь?',
				'4': 'Тройка за игру',
				'5': 'Ндаа...',
				'6': 'Хватит отвлекаться! Соберись!',
				'10': 'Не впечатлил',
				'20': 'Уже лучше',
				'30': 'Хм... может ты что-то и можешь',
				'40': 'Молодец. Но все же ты просто человек',
				'50': '5 - наконец то ты отличник. Ремень на стену и жуй конфету',
				'60': 'Хлоп хлоп',
				'70': '7 - да ты счастливчик',
				'80': 'Фух. Это было близко',
				'90': 'Ты меня напугал',
				'100': 'Человеки победили',
			},
			melodies: {
				'1': new Howl({src: ['standardVolume/redSound.mp3']}),
				'2': new Howl({src: ['standardVolume/orangeSound.mp3']}),
				'3': new Howl({src: ['standardVolume/blueSound.mp3']}),
				'4': new Howl({src: ['standardVolume/greenSound.mp3']}),
			}
		}
	},
	methods: {
		async newRound() {
			await supMethods.promiseTimeout(()=>undefined, 600)

			this.needNumbers.push( Math.floor(1 + Math.random() * (4 + 1 - 1)) )

			this.numberAnswer = 0
			this.userNumbers = []

			let show = item => this.panels[item -1].classList.add('simon__panel_active')
			let hide = item => this.panels[item -1].classList.remove('simon__panel_active')
			let play = item => this.melodies[item].play()

			function reproduce (item, time) { setTimeout(play(item), time) }
			function flash (item, time) {
				supMethods.promiseTimeout(()=> show(item), 100)
				return supMethods.promiseTimeout(()=> hide(item), time)
			}

			for (const element of this.needNumbers)  {
				await reproduce(element, this.gameMode === 0 ? 800 : 100)
				await flash(element, this.gameMode - 100)
			}
		},
		async userAnswer(number) {
			this.userNumbers.push(number)

			let equalityNumber = () => this.userNumbers[this.numberAnswer] === this.needNumbers[this.numberAnswer]
			let equalityLength = () => this.userNumbers.length === this.needNumbers.length

			if (equalityNumber() && equalityLength()) ++this.result && await this.newRound()
			else if (equalityNumber()) this.numberAnswer++
			else if (this.result > 6) {
				this.result = Math.round(this.result / 10) * 10
				this.showRating = true
			} else this.showRating = true
		},
		startGame() {
			this.result = 1
			this.showRating = false
			this.needNumbers = []
			this.userNumbers = []
			this.numberAnswer = 0

			this.newRound()
		}
	},
	mounted() {
		this.panels = document.querySelectorAll('.simon__panel')
	}
}
</script>

<style lang="sass">
body
	background-color: black
	text-align: center

#app
	display: flex
	padding: 10%

.result
	position: absolute
	left: calc(50vw - 160px)
	top: 30px
	color: white
	width: 300px

	&__rating
		font-size: 24px

.game-mode
	display: flex
	flex-direction: column
	align-items: flex-start
	width: 20%
	margin-right: 100px

	&__element
		font-size: 28px
		color: white
		margin-bottom: 15px

	&__button
		margin-right: 20px

	&__rating
	&__easy
	&__medium
	&__hard
	&__psychic

.simon
	position: relative
	margin-top: 200px

	&__panel
		display: inline-block
		margin: 3px 5px
		box-sizing: border-box
		width: 200px
		height: 200px
		transition: box-shadow 0.35s

		&:hover
			cursor: pointer
			box-shadow: 0 0 5px 5px white
			transition: box-shadow 0.15s

		&:active
			opacity: 0.8

		&_active
			border: 20px solid white

		&-container

		&_top

			&-left
				border-top-left-radius: 100%
				background-color: red

			&-right
				border-top-right-radius: 100%
				background-color: #da7c0e

		&_bottom
			&-right
				border-bottom-right-radius: 100%
				background-color: blue

			&-left
				border-bottom-left-radius: 100%
				background-color: green

	&__button-start
		position: absolute
		width: 160px
		height: 160px
		z-index: 1
		top: 130px
		left: 130px
		border: 1px solid black
		border-radius: 50%
		background-color: black
		color: white
		font-size: 35px
		font-weight: bold
		cursor: pointer
		outline: none

		&:active
			border-color: white


</style>
