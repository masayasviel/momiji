const app = new Vue({
    el: "#app",
    data: {
      names: [],
      pickName: ""
    },
    methods: {
        getRandomName() {
            let namesSize = Math.floor(this.names.length);
            this.pickName = this.names[Math.floor(Math.random()*namesSize)];
        }
    }
})

const addDate = ()=>{
    const name = document.getElementById("name");
    app.names.push(name.value);
}