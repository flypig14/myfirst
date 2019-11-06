<template>
    <div class="home">
        <main>
            <router-view></router-view>
        </main> 
        <Footer />
    </div>
</template>

<script>
import Footer from '../../components/footer';

export default {
components:{
    Footer,
},
}
</script>

<style lang="scss">
.home{
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
header{
    width:100%;
    height:45px;
}
main{
    width:100%;
    flex:1;
    overflow: auto;
}
footer{
    width:100%;
    height:45px;
    display: flex;
}
}
</style>
