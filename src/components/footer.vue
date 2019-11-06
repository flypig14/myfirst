<template>
    <div class="footer">
     <router-link to="/home/quan" tag='span'><span class="iconfont icon-quanzi"></span>圈子</router-link>
     <router-link to="/home/mine" tag='span'><span class="iconfont icon-wode"></span>我的</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer{
     width:100%;
    height:45px;
    display: flex;
    line-height: 45px;
}
span{
    flex:1;
    text-align: center;
    }
    .router-link-active{
        color:orangered;
    }
</style>
