<template>
	<div>
		<Loader v-if="loading"/>

		<div class="app-main-layout" v-else>
			<Navbar @hideSidebar="isBarOpen=!isBarOpen" />
			<Sidebar :is-open="isBarOpen"/>
			<main class="app-content" :class="{full: !isBarOpen}">
				<div class="app-page">
					<router-view />
				</div>
			</main>
		
			<div class="fixed-action-btn">
				<router-link class="btn-floating btn-large blue" to="/record">
					<i class="large material-icons">add</i>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import Sidebar from '@/components/app/Sidebar.vue'
import Navbar from '@/components/app/Navbar.vue'

export default {
	data: () => ({
		isBarOpen: true,
		loading: true
	}),
	async mounted() {
		if (!Object.keys(this.$store.getters.info).length) {
			await this.$store.dispatch('fetchInfo')
		}

		this.loading = false
	},
	components: {
		Sidebar,
		Navbar
	}
}
</script>