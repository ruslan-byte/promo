<template>
  <dib class="app">
  	<Header class="app__header"/>
  	<AboutMy class="app__section"/>
  	<Footer />
  </dib>
</template>
<style lang="scss">
.app {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background: $sectond-bg-color;
	&__header,
	&__section {
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
