<template>
   <div class="input-range">
      <div class="slider-values" >
         <div class="slider-value">
            <span >€</span>
           <input type="text" v-model="lowValue" class="" @input="updatePriceLabels()"/>
         </div> 
         <div class="slider-value">
           <span >€</span>
           <input type="text" v-model="upperValue" class="" @input="updatePriceLabels()"/>
         </div>
      </div>
      <div class="slider-container">
         
         <div class="slider-bar" :style="`background:${sliderBack}`"></div>
         <div class="slider-input">
            <input class="slider"  v-model="lowValue"  min="0" max="100"   step="1" type="range" @input="updatePriceLabels()">
            <input class="slider" v-model="upperValue"  min="0" max="100" step="1" type="range" @input="updatePriceLabels()">
         </div>
         
      </div>
   </div>
</template>

<script>
export default {
   props:{
      
   },
   data(){
      return{
         lowValue: 0,
         upperValue: 100,
         sliderBack: "#B7BBC0"
      }
   },
   methods:{
      updatePriceLabels(){
         if(this.lowValue > this.upperValue){
            this.lowValue = this.upperValue;
         }
         if (this.upperValue < this.lowValue){
            this.upperValue = this.lowValue
         }
         this.sliderBack = `-webkit-linear-gradient(left,  #DBDDDF, #DBDDDF ${this.lowValue}%, #B7BBC0 ${this.lowValue}%, #B7BBC0 ${this.upperValue}%,   #DBDDDF ${this.upperValue}%,  #DBDDDF)`;
         return 0;
      }
   }
}
</script>

<style lang="scss" scoped>
.input-range{
   height: 64px;
}
.slider-values{
   display: flex;
   justify-content: space-between;
}
.slider-value{
   width: 78px;
   height: 40px;
   display: flex;
   align-items: center;
   border:0;
   background: #F3F4F4;
   border-radius: 3px;
   padding-left: 20px;
}
.slider-value input{
   padding: 0;
   padding-left: 5px;
   border:none;
   background: none;
}
.slider-container {
   position: relative;
   width: 100%;
}

.slider-container input{
   padding: 0 0px;
}
.slider-bar {
   -webkit-appearance: none;
   width: 100%;
   height: 3px;
 
   outline: none;
   -webkit-transition: .2s;
   transition:  .2s;
   pointer-events: none;
   position: absolute;
   left: 0px;
   top: 6px;
   outline: none;
   border-left: 0;
   border-right: 0;
   border:none;
}

.slider{
   position: absolute;
   left: 0px;
   top: 6px;
   -webkit-appearance: none;
   width: 100%;
   height: 3px;
   outline: none;
   -webkit-transition: .2s;
   transition:  .2s;
   pointer-events: none;
   border:0;
   background: none;
   // background: black;
}

.slider::-webkit-slider-thumb {
   -webkit-appearance: none;
   width: 12px;
   height: 12px;
   border-radius: 50%;
   background: #9399A0;
   cursor: pointer;
   pointer-events: all;
   position: relative;
   z-index: 99;
   outline: 0;
}

.slider::-moz-range-thumb {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #9399A0;
  cursor: pointer;
  pointer-events: all;
   position: relative;
   z-index: 1000;
   outline: 0;
}

</style>

