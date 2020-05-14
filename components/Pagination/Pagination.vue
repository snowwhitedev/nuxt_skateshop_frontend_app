<template>
    <div class="pagination">
        <btn-prev @onClick="prevPage" :btnDisabled="prevDisabled"/>
        <div v-if="totalPages < 3" style="width: 20px;"></div>
        <div v-else>
            <span v-for="pageNum in totalPages" :key="pageNum" class="pageNum" @click="selectPage(pageNum)">
                <textlink  v-if="currentPage==pageNum" btnClass="textlink blue bold"> {{pageNum}} </textlink>
                <textlink v-else btnClass="textlink dark bold"> {{pageNum}} </textlink>
            </span>
        </div>
        <btn-next @onClick="nextPage" :btnDisabled="nextDisabled"/>
    </div>
</template>

<script>
export default {
    props:{
        totalPages:{
            type: Number,
            default: 0
        }
    },
    data(){
        return{
            currentPage: 1,
            prevDisabled: true,
            nextDisabled: false
        }
    },
    methods:{
        selectPage(page){
            this.currentPage = page;
        },
        prevPage(){
            if(this.currentPage > 1){
                this.currentPage -= 1;
            }
            this.enableButtons();
        },
        nextPage(){
            if(this.currentPage < this.totalPages){
                this.currentPage += 1;
            }
            this.enableButtons();
        },
        enableButtons(){
            this.prevDisabled = (this.currentPage > 1)? false:true;
            this.nextDisabled = (this.currentPage < this.totalPages)? false: true;
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination{
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 60px;
}
.pageNum{
    margin-left:20px;
}
.pageNum:first-child{
    margin-left:30px;
}
.pageNum:last-child{
    margin-right: 30px;
}
</style>