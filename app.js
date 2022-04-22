const app = new Vue({
    el: `#app`,

    data: {

        completed: `completed`,

        tasks: [
            {
                text: `Learn HTML`,
                done: true
            },

            {
                text: `Learn Css`,
                done: true
            },

            {
                text: `Learn JavaScript (I hate him)`,
                done: false
            },

            {
                text: `Learn VueJs`,
                done: false
            }

        ]

    },

    methods: {

        removeTodo(i){
            this.tasks.splice(i, 1)
        }

    }
})