import Vue from "vue";

export default Vue.extend({
    name: "InputCounter",
    data(){
        return{
            data:{
                text: "",
                textColor: 'black'
            }
        }
    },
    computed:{
        textLength(): number{
            return this.data.text.trim().length;
        }
    },
    watch:{
        "data.text": function(val: string){
            if(val.length > 10)
            {
                this.data.textColor = 'red';
            }
            else
            {
                this.data.textColor = 'black';
            }
        }
    }
})