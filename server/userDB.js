//引入mongodb模块，返回mongodb客户端对象
const MongoClient = require('mongodb').MongoClient;
//链接数据库字符串
const dbUrl = "mongodb://localhost:27017";

//缓存一个连接数据库的缓存对象
let cacheClient;
function getClient(){
    return new Promise(function(resolve,reject){
        //第二次调用getClient的时候是有效的，就直接返回，下面的代码就不用执行了
        if (cacheClient) {
            resolve(cacheClient);
            return;
        }
        //客户端连接数据库，成功则返回client对象
        MongoClient.connect(dbUrl,{useNewUrlParser : true , useUnifiedTopology : true},function(err,client){
            if(err){
                console.log(err);
                reject(err);
                return;
            }
            console.log('一个连接客户建立');
            //将客户端对象直接复制给缓存对象
            cacheClient = client;
            resolve(cacheClient);
        });
    });
}
// 判断用户是否存在
async function existUser(phone) {
    const client = await getClient();
    const testDB = client.db('wibiao');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({login_name: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }

            resolve(result.length > 0);
        });
    });
}
// 根据手机号登录
async function getUserByPhone(phone) {
    const client = await getClient();
    const testDB = client.db('wbiao');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').find({login_name: phone}).toArray(function (err, result) {
            if (err) {
                return reject(err)
            }
            resolve(result[0]);
        });
    });
}
// 根据用户名登录
async function loginByName(user_name) {
    const client = await getClient();
    const testDB = client.db('wbiao');
    return new Promise(function(resolve,reject){
        testDB.collection('user').find({user_name:user_name}).toArray(function(err,result){
            if (err) {
                return reject(err);
            }
            resolve(result[0]);
        });
    });
}

// 创建用户
async function createUser(user) {
    const client = await getClient();
    const testDB = client.db('wbiao');
    return new Promise(function (resolve, reject) {
        testDB.collection('user').insertOne(user, function (err, cmdResult) {
            if (err) {
                return reject(err)
            }

            resolve({
                ok: true,
                id: cmdResult.insertedId
            })
        });
    });
}

module.exports = {
    existUser,
    getUserByPhone,
    createUser,
    loginByName
}
