var Vue=require("vue/dist/vue.common.js");
var api=require("./js/api.builder");

new Vue({
    el: "#demo",
    data: {
        list: [],
        student: {},
        optypa: "add"
    },
    created: function () {
        api["/student/list"]().then(function(response){
            this.list = response.data.data;
        }.bind(this));
    },
    methods: {
        addinit: function () {
            this.optypa = "add";
            this.student = {};
        },
        updateinit: function (student) {
            this.student={};
            this.optypa = "update";
            for(var key in student){
                if(student.hasOwnProperty(key)){
                    this.student[key]=student[key];
                }
            }
        },
        remove: function (student) {
            api["/student/delete"](student).then(function(response){
                this.list.splice(this.list.indexOf(student), 1);
            }.bind(this));
        },
        update: function () {
            api["/student/update"](this.student).then(function(response){
                var id=this.student._id;
                for(var i=0;i<this.list.length;i++){
                    if(id==this.list[i]._id){
                        this.list.splice(i,1,this.student);
                        break;
                    }
                }
                this.addinit();
            }.bind(this));
        },
        add: function () {
            if (this.student.name && this.student.address && this.student.number && this.student.gender) {
                api["/student/save"](this.student).then(function(response){
                    this.list.push(response.data.data);
                    this.student = {};
                }.bind(this));
            }
        }
    }
})
