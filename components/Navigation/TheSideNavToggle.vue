<template>
	<div
		class="drawer-toggle"
		role="button"
		@click="$emit('toggle')">
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M20.5834 17.3333H5.41675V20.5833H20.5834V17.3333Z" fill="#283441"/>
			<path d="M20.5834 11.9167H5.41675V15.1667H20.5834V11.9167Z" fill="#283441"/>
			<path d="M20.5834 6.5H5.41675V9.75H20.5834V6.5Z" fill="#283441"/>
		</svg>
	</div>
</template>

<style scoped>
.drawer-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

@media (min-width: 1024px) {
	.drawer-toggle {
		display: none;
	}
}
</style>
