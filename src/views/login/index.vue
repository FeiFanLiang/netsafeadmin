<template>
    <div class="main">
        <div class="box">
            <el-row>
                <el-col :span="8">
                    <div class="left">
                        <div class="content">
                            <h5>Welcome to</h5>
                        <h1>CYBERSKY</h1>
                        <h5>日志审计系统</h5>
                        </div>
                        
                    </div>
                </el-col>
                <el-col :span="16">
                    <div class="login-box">
                        <el-form :model="form">
                      <el-form-item>
                          <el-input v-model="form.username" prefix-icon="el-icon-user-solid"  placeholder=""></el-input>
                      </el-form-item>
                      <el-form-item>
                          <el-input v-model="form.password" prefix-icon="" placeholder=""></el-input>
                      </el-form-item>
                    </el-form>
                    </div>
                    
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                username:"",
                password:""
            }
        }
    }
}
</script>
<style lang="scss">
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: url('~@/assets/app-bg.jpg') no-repeat;
    background-size: cover;
    .box {
       // background-color: #fff;
        width: 1140px;
        height: 555px;
    }
    .left {
        display: flex;
            justify-content: center;
            align-items: center;
        height: 457px;
        background: linear-gradient(to right, #ebec7d, #f3ae13);
        .content {
            h1,h5 {
                line-height: 1.5;
            }
            h5 {
                font-size: 24px;
                font-weight: 500;
            }
            h1 {
                font-size: 54px;
                font-weight: 300;
                margin-bottom: 25px;
            }
            h5:nth-child(1){
                margin-bottom: 20px;
            }
        }
    }
    .login-box {
        padding: 30px;
    }
}
</style>