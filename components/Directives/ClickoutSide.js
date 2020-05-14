import Vue from 'vue';

export default new Vue.directive('outside', {
  bind () {
    let self  = this
    this.event = function (event) { 
    	console.log('emitting event')
    	self.vm.$emit(self.expression,event) 
 	  }
    this.el.addEventListener('click', this.stopProp)
    document.body.addEventListener('click',this.event)
  },
  
  unbind() {
  	console.log('unbind')
    this.el.removeEventListener('click', this.stopProp)
    document.body.removeEventListener('click',this.event)
  },
  stopProp(event) {event.stopPropagation() }
})