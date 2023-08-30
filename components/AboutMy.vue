<template>
  <section class="about-my container">
  	<img class="about-my__img" src="https://sun9-79.userapi.com/impg/Jl8pTakxI5DEHyFJteNn8zcRO_9xppqhd3vfwA/shTCHiYyCVo.jpg?size=1215x2160&quality=95&sign=6fd52c91d445b280ca3dcbfab78b69d3&type=album" alt="">
  	<div class="about-my__content">
		<h2 class="about-my__title">Руслан Бароев</h2>
		<p>FrontEnd разработчик, стаж коммерческой разработки 1.5 года. (10 марта 2021 - 30 июля 2022)</p>
		<h3 class="about-my__subtitle">Образование</h3>
		<p>Программист “программирование в компьютерных системах”</p>
	</div>
  </section>
</template>
<script setup>
</script>
<style lang="scss" scoped> 
.about-my {
	&__img 
	{
		max-width: min(100%, 350px); 
		display: block;
		margin: 0 auto;
	}
}
@media (min-width: $tablet) {
		.about-my
		{
			display: flex;
			gap:20px
		}
}
</style>