let pro = new Promise(function(resolve,reject){

    if(true){
        //调用操作成功方法
        resolve('操作成功');
    }else{
        //调用操作异常方法
        reject('操作异常');
    }
});

//用then处理操作成功，catch处理操作异常
pro.then(requestA)
    .then(requestB)
    .then(requestC)
    .catch(requestError);

function requestA(){
    console.log('请求A成功');
    return '请求B，下一个就是你了';
}
function requestB(res){
    console.log('上一步的结果：'+res);
    console.log('请求B成功');
    return '请求C，下一个就是你了';
}
function requestC(res){
    console.log('上一步的结果：'+res);
    console.log('请求C成功');
}
function requestError(){
    console.log('请求失败');
}

//打印结果：
//请求A成功
//上一步的结果：请求B，下一个就是你了
//请求B成功
//上一步的结果：请求C，下一个就是你了
//请求C成功

//创建实例pro1
let pro1= new Promise(function (resolve) {
    setTimeout(function () {
        resolve('实例1操作成功');

    },5000);
});

//创建实例pro2
let pro2=new Promise(function (resolve) {
    setTimeout(function () {
        resolve('实例2操作成功')

    },1000);

});

/*
*    因为1000毫秒以后，实例pro2进入了成功fulfilled状态；此时，Promise.all( )还不会有所行动，因为实例pro1还没有进入成功fulfilled状态；等到了5000毫秒以后，实例pro1也进入了成功fulfilled状态，Promise.all( )才会进入then方法，然后在控制台输出：["实例1操作成功","实例2操作成功"]。
* */

Promise.all([pro1,pro2]).then(function (result) {
    console.log(result);
});
//打印结果：["实例1操作成功", "实例2操作成功"]