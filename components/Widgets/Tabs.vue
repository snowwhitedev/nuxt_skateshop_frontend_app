<template>
     <div class="custom-tabs">
        <div class="tabs-navigation" >
            <ul class="nav nav-tabs">
                <li v-for="(tab, index) in tabs" :class="{'nav-item': true, 'active': tab.isActive}" :key="index">
                    <a :href="tab.href" @click="selectTab(tab)" :class="{'nav-link':true, 'active':tab.isActive}">{{ tab.name }}</a>
                </li>
            </ul>
        </div>
        <div class="tabs-details">
            <div class="card border-none">
                <div class="card-body card-block">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {tabs: [] };
    },
    
    created() {
        this.tabs = this.$children;
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
}
</script>
<style lang="scss" scoped>
    .custom-tabs{
        width: 100%;
        
    }
    .nav-link{
        font-size: 14px;
        cursor: pointer;
    }
    .tabs-navigation{
        width: 100%;
        overflow-x: auto;
    }
    .tab-item.active{
        color: #23263b;
    }
    .tabs-details {
        width: 100%;
        padding: 10px 0;
    }
    .nav {
        width: 100%;
    }
    @media screen and (max-width: 880px) {
        .nav {
            width: 120%;
        }
    }
    @media screen and (max-width: 580px) {
        .nav {
            width: 180%;
        }
    }
    @media screen and (max-width: 450px) {
        .nav {
            width: 240%;
        }
    }
</style>