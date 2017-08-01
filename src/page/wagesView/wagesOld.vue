<template>
  <div class="step1">
    <el-card class="box-card">
      <!--     <el-table :key='tableKey' :data="list" v-loading.body="listLoading" border fit highlight-current-row style="width: 100%"> -->
      <el-table :key='tableKey' :data="list" border fit highlight-current-row style="width: 100%">
        <el-table-column width="100px" align="center" label="序号">
          <template scope="scope">
            <span>{{scope.row.id}}</span>
          </template>
        </el-table-column>

        <el-table-column width="100px" align="center" label="年月">
          <template scope="scope">
            <span>{{scope.row.date }}</span>
          </template>
        </el-table-column>

        <el-table-column width="100px" align="center" label="KPI得分">
          <template scope="scope">
            <span>{{scope.row.kpi}}</span>
          </template>
        </el-table-column>

        <el-table-column width="100px" align="center" label="工资标准">
          <template scope="scope">
            <span>{{scope.row.gzbz}}</span>
          </template>
        </el-table-column>

        <el-table-column width="100px" align="center" label="基本工资">
          <template scope="scope">
            <span style='color:red;'>{{scope.row.jbgz}}</span>
          </template>
        </el-table-column>

        <el-table-column width="100px" label="缺勤扣款">
          <template scope="scope">
            <span style='color:red;'>{{scope.row.qqkk}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="岗位津贴" width="100px">
          <template scope="scope">
            <span style='color:red;'>{{scope.row.qqkk}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="加班费" width="90px">
          <template scope="scope">
            <span class="link-type" @click='handleFetchPv(scope.row.jbf)'>{{scope.row.jbf}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="奖金" width="90px">
          <template scope="scope">
            <span class="link-type" @click='handleFetchPv(scope.row.jj)'>{{scope.row.jj}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="年终奖" width="90px">
          <template scope="scope">
            <span style='color:red;'>{{scope.row.nzj}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="公司福利" width="100px">
          <template scope="scope">
            <span class="link-type" @click='handleFetchPv(scope.row.gsfl)'>{{scope.row.gsfl}}</span>
          </template>
        </el-table-column>

        <el-table-column align="center" label="操作" width="150px">
          <template scope="scope">
            <el-button v-if="scope.row.status!='published'" size="small" type="success"
                       @click="handleModifyStatus(scope.row,'published')">修改
            </el-button>
            <el-button v-if="scope.row.status!='deleted'" size="small" type="danger"
                       @click="handleModifyStatus(scope.row,'deleted')">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
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
  import {fetchList, fetchPv} from '../../api/table';
  import {parseTime} from '../../utils';
  export default {
    name: 'wagesOld',
    data: function () {
      return {
        listLoading: true,
        tableKey: 0,
        list: [{
          id: 1,
          date: '2016-05',
          kpi: '0',
          gzbz: '1518',
          jbf: '10'
        }, {
          id: 2,
          date: '2016-06',
          kpi: '0',
          gzbz: '1518',
          jbf: '10'
        }, {
          id: 3,
          date: '2016-07',
          kpi: '0',
          gzbz: '1518',
          jbf: '10'
        }],
        pvData: [],
        total: 3,
        dialogGsflVisible: false,
        dialogJbVisible: false,
        dialogJjVisible: false
      }
    },
    watch: {},
    created() {
      /*this.getList();*/
    },
    methods: {
      handleFetchPv: function () {
        alert("弹出叉叉叉页面");
      },
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
  .link-type, .link-type:focus {
    color: #337ab7;
    cursor: pointer;
  }
</style>
