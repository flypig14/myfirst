<template>
    <div class="login">
        <h1>登陆</h1>
        <div class="ipt">
            <input type="text" placeholder="请输入用户名" v-model="username" />
            <input :type="type" placeholder="请输入用户密码" v-model="userpwd" /><span :class="['iconfont',flag?'icon-yanjing':'icon-yanjing_bi']" id="font" @click="openEye"></span>
            <button @click="submit">登陆</button>
            <p>没有账号,快速注册</p>
        </div>
    </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    computed:{
    ...mapState(['user'])
    },
    components:{

    },
data(){
    return{
         username:'',
         userpwd:'',
         type:'password',
         flag:false
    }
},
methods: {
    ...mapMutations(['getUser']),
    submit(){
        if(!this.username.trim()||!this.userpwd.trim()){
            alert('叼你*的,打字呀你')
        }else{
            this.$axios.post('/login',{username:this.username,userpwd:this.userpwd}).then(({data})=>{
                if(data.code===1){
                    alert(data.msg)
                }else{
                    this.getUser(data.data);
                    localStorage.token=data.token;
                    this.$router.push('/home')
                }
            })
        }
    },
    openEye(){
          this.flag=!this.flag;
          if(this.flag){
              this.type='text'
          }else{
              this.type='password'
          }
    }
},
}
</script>

<style lang="scss" scoped>
.login{
    width:100%;
    height:100%;
    background: #eee;
    h1{
        width:100%;
        height:45px;
    }
    .ipt{
        width:100%;
        height:200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        #font{
        position: absolute;
        top:16.7%;
        left:85%;
        
        }     
        input{
            width:85%;
            height:35px;
            margin-top:15px;
        }
        button{
            width:85%;
            height:45px;
            margin-top: 5px;
            background: orangered;
            color:white;
            border:none;
        }
        p{
            width:100%;
            height:15px;
            text-align: left;
            margin-left:60px;
        }
    }
}
</style>
