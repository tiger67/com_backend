const mongoose = require('mongoose');


try {
    mongoose.connect('mongodb://localhost/test')
} catch (error) {
    console.log(err)
}

mongoose.connection.once("open", function() {
    console.log('数据库连接成功');
}).on('error', function(err) {
    throw err
})




module.exports = mongoose;