<template>
  <section class="about-my container">
  	<img class="about-my__img g-image" src="https://sun9-79.userapi.com/impg/Jl8pTakxI5DEHyFJteNn8zcRO_9xppqhd3vfwA/shTCHiYyCVo.jpg?size=1215x2160&quality=95&sign=6fd52c91d445b280ca3dcbfab78b69d3&type=album" alt="">
  	<div class="about-my__content">
		<h2 class="about-my__title">Привет</h2>
		<p>я FrontEnd разработчик, кую верстку. Lorem ipsum, dolor sit amet consectetur adipisicing, elit. Harum tempora quisquam delectus, possimus consectetur ex laudantium, amet rem doloribus beatae vero asperiores, officia eius voluptas ab quam esse! Voluptate, ad? </p>
		<h3 class="about-my__subtitle">Образование</h3>
		<p>Программист “программирование в компьютерных системах” Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit laborum iure, aspernatur quos dicta voluptas quidem consequuntur rerum deleniti dolorum alias, iste quod hic, maxime iusto tenetur optio non omnis.
		Cum iure deleniti recusandae quidem quo, sapiente maxime officia sint quibusdam ipsum modi velit nostrum doloribus iusto aspernatur, perferendis libero qui incidunt beatae ad officiis cumque. Accusantium neque ipsam, quia.</p>
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
		aspect-ratio: 1 / 1;
		object-fit: cover;
		border-radius: 50%;
	}
}
@media (min-width: $tablet) {
	.about-my
	{
		display: flex;
		gap:20px;
		&__img
		{
			margin: 0;
			align-self: center;
		}
	}
}
@media (min-width: $widescreen) {
	.about-my{gap:40px;}
}
</style>