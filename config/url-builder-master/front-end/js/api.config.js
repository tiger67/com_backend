var apiconfig=[
    {
        url: "/question/list",
        method: "get",
        params: [ ]
    },
    {
        url: "/question/update",
        method: "post",
        params: [
            "title",
            "userid",
            "createAt",
            "updateAt",
            "content",
            "answer",
            "read",
            "users",
            "isreaded",
            "issolved",
            "_id"
        ]
    },
    {
        url: "/question/delete",
        method: "post",
        params: [
            "_id"
        ]
    },
    {
        url: "/question/save",
        method: "post",
        params: [
            "title",
            "userid",
            "createAt",
            "updateAt",
            "content",
            "answer",
            "read",
            "users",
            "isreaded",
            "issolved"
        ]
    },
    {
        url: "/user/list",
        method: "get",
        params: [ ]
    },
    {
        url: "/user/update",
        method: "post",
        params: [
            "username",
            "password",
            "age",
            "_id"
        ]
    },
    {
        url: "/user/delete",
        method: "post",
        params: [
            "_id"
        ]
    },
    {
        url: "/user/save",
        method: "post",
        params: [
            "username",
            "password",
            "age"
        ]
    },
    {
        url: "/theme/list",
        method: "get",
        params: [ ]
    },
    {
        url: "/theme/update",
        method: "post",
        params: [
            "themename",
            "_id"
        ]
    },
    {
        url: "/theme/delete",
        method: "post",
        params: [
            "_id"
        ]
    },
    {
        url: "/theme/save",
        method: "post",
        params: [
            "themename"
        ]
    },
    {
        url: "/student/list",
        method: "get",
        params: [ ]
    },
    {
        url: "/student/update",
        method: "post",
        params: [
            "name",
            "number",
            "gender",
            "address",
            "_id"
        ]
    },
    {
        url: "/student/delete",
        method: "post",
        params: [
            "_id"
        ]
    },
    {
        url: "/student/save",
        method: "post",
        params: [
            "name",
            "number",
            "gender",
            "address"
        ]
    },
    {
        url: "/color/list",
        method: "get",
        params: [ ]
    },
    {
        url: "/color/update",
        method: "post",
        params: [
            "value",
            "text",
            "_id"
        ]
    },
    {
        url: "/color/delete",
        method: "post",
        params: [
            "_id"
        ]
    },
    {
        url: "/color/save",
        method: "post",
        params: [
            "value",
            "text"
        ]
    }
];
module.exports=apiconfig;