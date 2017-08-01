<template>
  <div>
    <div class="step1">
      <el-card class="box-card" style="width:1340px">
        <span class="date_class">{{Date1}}</span>
        <!--     <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%"> -->
        <div id="yfgzbubble" class="inlayer" style="border-style:dashed;border-color:#808080;width:100%;height:110px">
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block; width:742px;margin:10px 10px 10px 40px">
            <el-table-column align="center" label="基本工资" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.jbgz}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="加班费" width="80px">
              <template scope="scope">
                <span class="link-type span_link_style" @click='showJbVisible(scope.row.jbf)'>{{scope.row.jbf}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="公司福利" width="100px">
              <template scope="scope">
                <span class="link-type span_link_style" @click='showGsflVisible(scope.row.gsfl)'>{{scope.row.gsfl}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="税前补发" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.sqbf}}</span>
              </template>
            </el-table-column>

            <el-table-column label="奖励" width="80px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.jl}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="年终奖" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.nzj}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="奖金" width="80px">
              <template scope="scope">
                <span class="link-type span_link_style" @click='showJjVisible(scope.row.jj)'>{{scope.row.jj}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="岗位津贴" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.gwjt}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="div_minu" data-label="减号" style="display:inline-block;margin:40px 5px">
          </div>
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block;width:202px;margin:10px 10px">
            <el-table-column align="center" label="税前补扣" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.sqbk}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="缺勤扣款" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.qqkk}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div style="text-align:center;">
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block;width:101px;margin:10px 10px">
            <el-table-column align="center" label="实发工资" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.sfgj}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div data-label="等于号" style="display:inline-block;margin:40px 5px">
            <div class="div_minu">
            </div>
            <div class="div_minu" style="margin:5px 0 0 0">
            </div>
          </div>
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block;width:101px;margin:10px 10px">
            <el-table-column align="center" label="应发工资" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.yfgz}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div data-label="加号" class="div_add"><span>+</span></div>
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block;width:102px;margin:10px 10px">
            <el-table-column align="center" label="税后补发" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.shbf}}</span>
              </template>
            </el-table-column>
          </el-table>
          <div class="div_minu" data-label="减号" style="display:inline-block;margin:40px 5px">
          </div>
          <el-table :key='tableKey' :data="list" border fit highlight-current-row
                    style="display:inline-block; width:732px;margin:10px 10px">
            <el-table-column align="center" label="税款" width="70px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.jbgz}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="公积金(个人)" width="120px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.gjjgr}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="社保(个人)" width="110px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.sbgr}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="损失赔偿" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.sspc}}</span>
              </template>
            </el-table-column>

            <el-table-column label="预扣社保退费" width="130px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.yksbtf}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="税后补扣" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.shbk}}</span>
              </template>
            </el-table-column>

            <el-table-column align="center" label="代扣费用" width="100px">
              <template scope="scope">
                <span style='color:black;'>{{scope.row.dkfy}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-card>
    </div>
    </br>
    <el-dialog title="查看公司福利明细" :visible.sync="dialogGsflVisible" :before-close="handleClose" size="small">
      <el-table :data="pvData" border stripe fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="福利项目"></el-table-column>
        <el-table-column prop="pv" label="金额"></el-table-column>
      </el-table>
      <el-card>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          【说明】
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          请注意薪酬保密，如有疑问，可与以下同事联系：
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          1、夜班津贴：陈倩（分机号：3221 邮箱：chenqian3@bluemoon.com.cn）
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          2、其他工资项目：天津厂-李妍（分机号：6188 邮箱：liyan@bluemoon.com.cn ）； 昆山厂-梅文珍（分机号：7141 邮箱：meiwenzhen@bluemoon.com.cn ）；
          其余-冯劲恒（分机号：3257 邮箱：fengjinheng@bluemoon.com.cn ）
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogGsflVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="查看加班费明细" :visible.sync="dialogJbVisible" :before-close="handleClose" size="small">
      <el-table :data="pvData" border stripe fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="加班类型"></el-table-column>
        <el-table-column prop="pv" label="时数"></el-table-column>
        <el-table-column prop="pv" label="加班费（元）"></el-table-column>
      </el-table>
      <el-card>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          【说明】
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          请注意薪酬保密，如有疑问，可与以下同事联系：
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          1、加班时数：二线员工—陈倩（分机号：3221 邮箱：chenqian3@bluemoon.com.cn）； 一线员工-詹佩纯（分机号：3259 邮箱: zanpeichun@bluemoon.com.cn ）
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          2、加班费：二线基层人员请咨询张媛媚（分机号：3453 邮箱：zhangyuanmei@bluemoon.com.cn）； 二线其他人员(专员级及以上)、一线销售经理主任级请咨询邓绮娴（分机号：8568 邮箱:
          dengqixian@bluemoon.com.cn
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogJbVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="查看奖金明细" :visible.sync="dialogJjVisible" :before-close="handleClose" size="small">
      <el-table :data="pvData" border stripe fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="奖金项目"></el-table-column>
        <el-table-column prop="pv" label="金额"></el-table-column>
      </el-table>
      <el-card>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          【说明】
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          请注意薪酬保密，如有疑问，可与以下同事联系：
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          1、顾问奖金：包含推广服务费、产品服务费，如有疑问，可联系余浩明（分机号：3209 邮箱：yuhaoming@bluemoon.com.cn）。
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          2、提成：包含门店提成，如有疑问，可联系许婉冰（分机号：3162 邮箱：xuwanbing@bluemoon.com.cn）。
        </el-row>
        <el-row type="flex" justify="start" style="padding:1px 0; ">
          3、其他奖金项目：二线基层人员请咨询张媛媚（分机号：3453 邮箱：zhangyuanmei@bluemoon.com.cn ）；二线其他人员(专员级及以上)、一线销售经理主任级请咨询邓绮娴（分机号：8568 邮箱:
          dengqixian@bluemoon.com.cn ）。
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogJjVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: 'wagesNew',
    data: function () {
      return {
        listLoading: true,
        tableKey: 0,
        Date1: new Date(),
        Date2: new Date(),
        list: [{
          date: '2016-05',
          jbgz: 1230,
          gzbz: 1518,
          jbf: 1000,
          gsfl: 1000,
          jj: 1000
        }],
        total: 3,
        pvData: [],
        dialogGsflVisible: false,
        dialogJbVisible: false,
        dialogJjVisible: false
      }
    },
    watch: {},
    methods: {
      showGsflVisible(pv) {
        /*fetchPv(pv).then(response => {
         this.pvData = response.data.pvData;*/
        this.dialogGsflVisible = true;
      },
      showJbVisible(pv) {
        /*fetchPv(pv).then(response => {
         this.pvData = response.data.pvData;*/
        this.dialogJbVisible = true;
      },
      showJjVisible(pv) {
        /*fetchPv(pv).then(response => {
         this.pvData = response.data.pvData;*/
        this.dialogJjVisible = true;
      },
      handleClose(done) {
        /*this.$confirm('确认关闭？')
         .then(_ => {
         done();
         })
         .catch(_ => {});*/
        this.dialogGsflVisible = false;
        this.dialogJbVisible = false;
        this.dialogJjVisible = false;
      }
    }
  }
</script>
<style scoped>
  .date_class {
    font-family: 微软雅黑;
    font-size: 20px;
    font-weight: 600;
    color: #0066ff;
  }

  .div_minu {
    border-width: 0px;
    width: 38px;
    height: 13px;
    background: inherit;
    background-color: rgba(102, 204, 204, 1);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
  }

  .div_add {
    position: relative;
    top: -15px;
    display: inline-block;
    text-align: center;
    font-size: 100px;
    color: rgba(102, 204, 204, 1);
  }

  #yfgzbubble {
    width: 120px;
    height: 80px;
    position: relative;
    -moz-border-radius: 10px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    border: 1px #808080 solid;
    background-color: #fff;
  }

  #yfgzbubble:before {
    content: " ";
    position: absolute;
    top: 100%;
    left: 220px;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-top: 15px solid #808080;
    border-right: 15px solid transparent;
  }

  .inlayer:after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 220px;
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-top: 14px solid #fff;
    border-right: 14px solid transparent;
  }

  #yfgzbubble:hover {
    background-color: #ccffff;
  }

  .inlayer:hover:after {
    width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-top: 14px solid #ccffff;
    border-right: 14px solid transparent;
  }

  .span_link_style {
    color: #337ab7;
    cursor: pointer;
  }
</style>
