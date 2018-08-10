# url-builder
根据定义好的数据库配置文件，自动生成前端访问后端的所需的api

<p>npm install</p>
<p>启动 mongodb 数据库</p>
<p>npm run dev</p>
<p>点击运行 front-end/views/student.html</p>

<h3>操作详情如下：</h5>
<h4>第一:</h4>
命令
npm install
启动 mongodb 数据库

<h4>第二:</h4>
在项目顶级目录下新建database.config.js文件，在里面配置好数据库访问地址及文档（表）名称跟字段。如student集合：
<pre>
module.exports ={
    public_op:["find", "update", "remove","save"],
    databaseurl:"mongodb://localhost/databasename",
    database_conf:{
        student:{
            schemal:{
                name:String,
                number:Number,
                gender:String,
                address:String
            }
        }
    }
}
</pre>
<h4>第三:</h4>
<p>直接运行 back-end/app.js 或者命令行运行 npm run dev</p>
此时已经自动生成了前端访问后端所需的api 即 student 的增删改查 api:
<pre>
baseurl=http://localhost:3000
student/list  get
student/save  post
student/delete  post
student/update  post
</pre>
可运行back-end/test/router.js查看生成的api

<h4>第四:</h4>
<p>在front-end 可以自行创建html文档,使用ajax访问以上生成的api.</p>




 





