<template>
	<div class="app-loader">
		<div class="preloader-wrapper active">
			<div class="spinner-layer" :class="colors">
				<div class="circle-clipper left">
					<div class="circle"></div>
				</div>
				<div class="gap-patch">
					<div class="circle"></div>
				</div>
				<div class="circle-clipper right">
					<div class="circle"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		colors() {
			const loaderColors = ['spinner-red-only', 'spinner-blue-only', 'spinner-green-only']
			return loaderColors[Math.floor(Math.random() * 3)]
		}
	}
}
</script>