import Vue from "vue"

export default Vue.extend({
    name: "ListFilter",
    data(){
        return{
            data:{
                pattern: ""
            }
        }
    },
    methods:{
        onChangePattern(){
            this.$emit("changePattern", this.data.pattern);
        }
    }
})