const app = new Vue({
    el: `#app`,

    data: {

        newTask: ``,

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
        },

        addTask(){
            this.tasks.push({text: this.newTask, done: false})
            console.log(this.tasks);
        },

        check(i){
            if(this.tasks[i].done != true){
                this.tasks[i].done = true;
            } else {
                this.tasks[i].done = false;
            }
        }

    }
})