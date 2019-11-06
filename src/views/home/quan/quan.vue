<template>
    <div>
        <Header />
        <main>
            {{list}}
            <Item />
        </main>
    </div>
</template>

<script>
import Header from '../../../components/header';
import Item from '../../../components/Item';
import {mapActions,mapState} from 'vuex';
export default {
components:{
    Header,
    Item
},
data(){
return{

}
},
computed:{
    ...mapState(['list'])
},
created(){
this.getList()
},
methods:{
    ...mapActions(['getList'])
}
}
</script>

<style>

</style>
