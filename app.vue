<template>
  <div class="app">
  	<Header class="app__header"/>
  	<main class="app__main">
  		<NuxtPage></NuxtPage>
	</main>
  	<Footer />
  </div>
</template>
<style lang="scss">
@use "~/assets/scss/normalize.scss" as *;
@use "~/assets/scss/default.scss" as *;
@use "~/assets/scss/element/variables.scss" as *;
@use "~/assets/scss/fonts.scss" as *;
.app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: $sectond-bg-color;
	&__header,
	&__main {
		margin-bottom: 18px;
	}
}

@media (min-width: $widescreen) {
	.app {
	&__header {
		margin-bottom: 40px;
	}
}
}
</style>
