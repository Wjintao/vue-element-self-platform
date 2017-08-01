<template>
  <div class="allActive">
    <el-row class="head grid-content">
      <el-col :span="10" :offset="1" style="background:#20A0FF;padding:5px 15px;grid-content:4px">
        <span style="display:block;padding:10px 0;text-align:left;font-size:16px;">年假余额</span><br>
        <span style="display:block;margin::30px 0;font-size: 32px;">{{ Num1 }} 小时</span><br>
      </el-col>

      <el-col class="grid-content" :span="10" :offset="1" style="background:#F7BA2A;padding:5px 15px;grid-content:4px">
        <span style="display:block;padding:10px 0;text-align:left;font-size:16px;">调休假余额</span><br>
        <span style="display:block;margin::30px 0;font-size: 32px;">{{ Num2 }} 小时</span><br>
      </el-col>
    </el-row>

    <el-card class="box-card">
      <el-row type="flex" justify="start" style="padding:10px 0;text-align:left; ">
        【说明】
      </el-row>
      <el-row type="flex" justify="start" style="padding:10px 0; ">
        1、建议合理安排休假计划。如需休假，请按公司制度流程提交申请并做好工作安排,休假申请未经公司审批而擅自不出勤的，将按照旷工处理
      </el-row>
      <el-row type="flex" justify="start" style="padding:10px 0; ">
        2、如果对休假余额存在疑问，可咨询以下同事：二线员工-陈倩（分机号：3221 邮箱：chenqian3@bluemoon.com.cn ），一线员工-詹佩纯（分机号：3259 邮箱:
        zhanpeichun@bluemoon.com.cn ）
      </el-row>
      <el-row type="flex" justify="start" style="padding:10px 0; ">
        3、员工在入职后三个月内需提交与自己累计工龄有关的证明资料，如未提交，则按照入职我司的工龄计算年假天数
      </el-row>
    </el-card>
    <el-dialog title="员工自助服务登录验证" :visible.sync="dialogLoginVisible" :before-close="handleClose" size="small">
      <el-form class="login-form" auto-complete="off" :model="model" :rules="rules" ref="login-form" label-position="top">
        <h2 class="heading"></h2>
        <el-form-item label="身份正后六位*：" prop="username">
          <el-input type="text" v-model="model.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="自助服务密码*：" prop="password">
          <el-input type="password" v-model="model.password" placeholder="请输入密码"/>
        </el-form-item>
        <el-button type="primary" :loading="loading" @click="submit('login-form')">{{ loading ? '登陆中...' : '登录' }}</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'allActive',
    data: function () {
      let model = {
        username: 'bulemoon',
        password: 'bulemoon'
      }

      // form validate rules
      let rules = {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 2, max: 16, message: '长度在 2 到 16 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符' }
        ]
      }
      return {
        Num1: 0,
        Num2: 0,
        rules,
        model,
        dialogLoginVisible:true,
        loading:false
      }
    },
    computed: {
      store () {
        return this.$store.state
      },
      noscroll () {
        return this.status || !this.result || this.result.length === 0
      }
    },
    methods: {
      submit (ref) {
        // form validate
        this.$refs[ref].validate(valid => {
          if (!valid) return false

          // validated
          this.error = null
          this.loading = true

          // create token from remote
          this.$store.dispatch('createToken', this.model)
            .then(token => {
              this.$router.replace({ path: this.$route.query.redirect || '/' })
              this.loading = false
            })
            .catch(err => {
              console.error(err)
              this.error = { title: '发生错误', message: '出现异常，请稍后再试！' }
              switch (err.response && err.response.status) {
                case 401:
                  this.error.message = '用户名或密码错误！'
                  break
                case 500:
                  this.error.message = '服务器内部异常，请稍后再试！'
                  break
              }
              this.loading = false
            })
        })
      },
      handleClose(done) {
        /*this.$confirm('确认关闭？')
         .then(_ => {
         done();
         })
         .catch(_ => {});*/
        this.dialogLoginVisible = false;
      }
    }
  }
</script>
<style>
  .allActive > .head > .el-col {
    padding: 10px 0;
    border-right: solid 1px #fff;
    border-radius: 5px;
  }

  .allActive .head {
    text-align: center;
    color: #fff;
    font-size: 30px;
    margin-bottom: 50px;
  }

</style>
