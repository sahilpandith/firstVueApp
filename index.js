Vue.component('todo-item', {
    template: "<div>{{todo.text}}</div>",
    props:['todo']
})

var app =  new Vue({
    el : '#app',
    data : {
        message : "Hello Vue!",
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ],
          groceryList: [
            { id: 0, text: 'Vegetables' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
          ]
    },
    methods : {
        reverse: function(){
            this.message = this.message.split("").reverse().join('')
        }
    }
})

