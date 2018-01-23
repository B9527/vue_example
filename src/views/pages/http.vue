<template>
  <div>
      <button @click="my_post">点我发送Post请求</button>
      <button @click="my_get">点我发送get请求</button>
  </div>
</template>
<script>
 import { requestLogin } from '@/api/api';
  import { getConfigList } from '@/api/api';
export default {
  data(){
      return{
        ruleForm2: {
          account: 'admin',
          checkPass: 'by123456'
        },
        currentPage:1,
        total:20,
        pageSize:20,
        status:'all',
        search:'',
      }
  },  
  methods:{
     my_post:function(){
             var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              //NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                // this.$router.push({ path: '/setting/input/' });
              }
            }).catch(function (error){
                if (error.response){
                    console.log(error.response.status);
                    alert("接口报错！"+ error.response.status);
                }else{
                     alert("服务器出错！"+ error);
                }
            });
     },
     my_get: function(){
          getConfigList({params:{pageNum:this.currentPage, pageSize:this.pageSize,status:this.status,table:this.search}}).then(data => {
						      //NProgress.done();
                  let { msg, code, result } = data;
                  if (code !== 200) {
                    this.$message({
                    message: msg,
                    type: 'error',
                    });
                  } else {
                    this.tableData = result.task_list;
                    this.currentPage4 = result.pageNum
                    this.pageSize = result.pageSize
                    this.total = result.total
                  }
                      }).catch(function (error){
                if (error.response){
                    console.log(error.response.status);
                    alert("接口报错！"+ error.response.status);
                }else{
                     alert("服务器出错！"+ error);
                }
            });
     }
    }
}
</script>
<style scoped>

</style>
