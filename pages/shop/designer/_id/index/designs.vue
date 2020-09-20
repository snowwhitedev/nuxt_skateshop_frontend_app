<template>
	<div class="production-panel">
		<div class="sort">
			<dropdown-input label="Sort by" :items="sortKeys"/>
		</div>
		<div v-for="item in products" :key="item.id">
			<card-product :cardData="item"/>
		</div>
		<pagination class="paginator" :totalPages="3" />
	</div>
</template>

<script>
export default {
  data(){
    return{
      sortKeys:[
			{"value": "relevance", text: "relevance"},
			{"value": "newness", text: "newness"},
			{"value": "popularity", text: "popularity"}
		],
	products: [
		{"id": 1},
		{"id": 2},
		{"id": 3},
		{"id": 4},
		{"id": 5}
	]
    }
  }
}
</script>

<style lang="scss" scoped>

.production-panel {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
}
.sort{
	grid-column-start: 3;
	grid-column-end: 4;
	display: flex;
	justify-content: flex-end;
}
.paginator{
	grid-column-start: 1;
	grid-column-end: 4;
	margin-bottom: 60px;
}
</style>