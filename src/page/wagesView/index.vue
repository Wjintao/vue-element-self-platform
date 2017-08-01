<template>
  <div class="activePublic ">
    <div>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :model="ruleForm" class="demo-ruleForm" :rules="rules" ref="ruleForm" label-position="top"
                 :inline="true">
          <!-- 时间选择器，表单验证时也有点坑，报错异常，建议不用element自带表单验证，自己写验证规则 -->
          <el-col :span="4">
            <el-form-item prop="activeStartTimeDate">
              <el-date-picker
                v-model="ruleForm.activeStartTimeDate"
                type="month"
                placeholder="开始日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="1" class="transverse_line_class">————————</el-col>
          <el-col :span="4">
            <el-form-item prop="activeEndTimeDate">
              <el-date-picker
                v-model="ruleForm.activeEndTimeDate"
                type="month"
                placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-button @click.native.prevent="" class="but-group" style="margin:0 40px 0 10px" type="primary">查询
          </el-button>
          <a href="javascript:void(0)" v-show="!showCommentInput"
             @click="handleNextStep(showCommentInput,'Old')">按旧版形式查看</a>
          <a href="javascript:void(0)" v-show="showCommentInput"
             @click="handleNextStep(showCommentInput,'New')">按新版形式查看</a>
        </el-form>
      </el-col>
    </div>
    </br>
    <div>
      <el-card class="box-card" style="margin: 40px 0">
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          【说明】
        </el-row>
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          请注意薪酬保密，如有疑问，可与以下同事联系:
        </el-row>
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          1、公司福利：冯劲恒（分机号：3257 邮箱：fengjinheng@bluemoon.com.cn）
        </el-row>
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          2、法定福利：马露（分机号：3280 邮箱：malu@bluemoon.com.cn ）
        </el-row>
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          3、代扣费用：档案费-钟燕飞（分机号：2709 邮箱：zhongyanfei@bluemoon.com.cn ）
        </el-row>
        <el-row type="flex" justify="start" style="padding:3px 0; ">
          4、除上述项目以外的其他工资项目：二线基层人员请咨询张媛媚（分机号：3453 邮箱：zhangyuanmei@bluemoon.com.cn）；
          二线其他人员(专员级及以上)、一线销售经理主任级请咨询邓绮娴（分机号：8568 邮箱: dengqixian@bluemoon.com.cn ）
        </el-row>
      </el-card>
    </div>
    <transition name="fade">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'wagesView',
    data: function () {
      return {
        rules: {
          activeStartTimeDate: [{required: true, message: '请选择活动开始日期'}],
          activeEndTimeDate: [{required: true, message: '请选择活动结束日期'}],
        },
        ruleForm: {
          activeStartTimeDate: '',
          activeEndTimeDate: '',
        },
        showCommentInput: false,
        isRouter: false,
      }
    },
    methods: {
      handleNextStep: function (showCommentInput, page) {
        this.showCommentInput = !showCommentInput
        this.$router.push('/wagesView/wages' + page);
        var _this = this;
      },
      goStep: function (n) {
        switch (n) {
          case 1 :
            this.preview = true;
            this.preStep = false;
            this.nextStep = true;
            this.publish = false;
            break;
          case 2 :
            this.preview = false;
            this.preStep = true;
            this.nextStep = true;
            this.publish = false;
            break;
        }
      }
    },
    created: function () {
      Object.assign(this.ruleForm, this.$store.state.ruleForm);
      var _this = this;
    },
    watch: {
      '$route': function (to, from) {
        this.isRouter = true;
      },
      ruleForm: {
        handler: function (val, oldVal) {
          this.$store.commit('setRuleForm', this.ruleForm);
        },
        deep: true
      }
    }
  }

</script>
<style>
  .activePublic .router-link {
    color: #fff;
  }

  .activePublic .but-group .el-button {
    margin-right: 20px;
  }

  .transverse_line_class {
    text-align: center;
    margin: 5px -30px 0px -35px;
  }

  .grid-content {
    border-radius: 10px;
    min-height: 36px;
  }
</style>
