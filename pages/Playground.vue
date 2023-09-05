<template>
  <div>
  	<h3>
		obj {{obj}}  	
		<br/>
		objref {{objref}}
	</h3>
  </div>
</template>
<script setup>
	import {reactive, ref, onMounted} from 'vue'

	let obj = reactive({
		step1:1,
		long:{
			step2:1,
			long:{
				step2:1
				
			}	
		},
	});
	let objref = ref({
		step1:1,
		long:{
			step2:1,
			long:{
				step2:1
				
			}
		}
	});
	onMounted(() => {
		obj.TEST = 1;
		objref.value.TEST = 1;
		console.log(typeof obj)
	});
</script>
<style lang="scss">
</style>