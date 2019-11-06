const userJson=require('./src/data/user.json');
const bodyParser = require('body-parser');
const listJson = require('./src/data/list.json');

module.exports={
    devServer:{
        before(app){
            app.post('/login',bodyParser.json(),(req,res)=>{
                let {username,userpwd}=req.body;
                let obj=userJson.find(item=>item.name===username);
                if(!obj){
                    res.send({code:1,msg:'登陆失败'})
                }else{
                    if(obj.pwd===userpwd){
                        res.send({code:2,msg:'登陆成功',data:obj,token:new Date()*1})
                    }else{
                        res.send({code:1,msg:'登陆失败'})
                    }
                } 
            }),
            app.get('/list',(req,res)=>{
                res.send(listJson)
            })
        }
    }
}
