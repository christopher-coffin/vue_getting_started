
// Define a new component called todo-item
Vue.component('todo-item', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})


var simpleApp = new Vue({
  el: '#simple-app',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString(),
    inDebugMode: true,
		fps: 30,
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  },
	methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
		}
	}
})

