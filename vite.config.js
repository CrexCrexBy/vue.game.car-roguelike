import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	base: '/vue.game.car-roguelike/',
	plugins: [vue()],
	resolve: {
		alias: [

		]
	},
})
