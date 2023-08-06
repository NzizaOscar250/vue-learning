const app=Vue.createApp({
    // template:"<h2>I'm working on it</h2>",
    data(){
        return {
           message:"Hello",
           title:"Author",
           image:"a.png",
           page:75,
           age:1,
           redClass:"red",
           stock:3,
           wordType:null,
           image:["1.jpg","2.jpg","3.jpg"],
           employees:[{name:"Employee1",age:23,profile:"1.jpg"},{name:"Employee2",age:34,profile:"2.jpg"},{name:"Employee2",age:53,profile:"3.jpg"},
           {name:"Employee1",age:23,profile:"1.jpg"},{name:"Employee2",age:34,profile:"2.jpg"},{name:"Employee2",age:53,profile:"3.jpg"},
           {name:"Employee1",age:23,profile:"1.jpg"},{name:"Employee2",age:34,profile:"2.jpg"},{name:"Employee2",age:53,profile:"3.jpg"}]
        }
    },
    methods:{
        getkey(e){
            this.wordType = e.target.value
          console.log(e.key)
        },
        changeTitle(){
            this.title = "Marker"
            console.log("title Changed")
        },
        IncreaseStock(){
            this.stock = this.stock + 1
        },
        decreaseStock(){
            this.stock = this.stock - 1
        }
    }
})

app.mount("#app")