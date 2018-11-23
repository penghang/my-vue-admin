<template>
  <el-row type="flex" justify="start">
    <el-col :span="22" class="list-item-col">
      <el-row align="middle" type="flex" justify="center">
        <el-col :span="22">
          <p class="list-item-title">{{ text1 }}</p>
          <p class="list-item-content">{{ text2 }}</p>
        </el-col>
        <el-col :span="2" style="height:100%">
          <div class="list-item-revise">
            <p>
              <span @click="revise">修改</span>
            </p>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'SettingBread',
  props: {
    text1: {
      type: String,
      default: ''
    },
    text2: {
      type: String,
      default: ''
    },
    type: {
      type: Number,
      default: 0
    },
    revise: {
      type: Function,
      default: function() {
      }

    }
  },
  methods: {
    onRevise() {
      alert(1)
    }
  }
}
</script>
<style lang='scss' scoped>
  $size:14px;
  $reviseColor:#459EFF;
  .list-item-col{
    border-bottom:.5px solid rgba(0,0,0,.1);
    padding:15px;
    .list-item-title{
      color:rgba(0, 0, 0, 0.65);
      font-size: $size;
      padding-bottom: 8px;
    }
    .list-item-content{
      color: rgba(0, 0, 0, 0.45);
      font-size: $size;
    }
      .list-item-revise{
        text-align:right;
        font-size: $size;
        height: 100%;
        color: $reviseColor;
        margin: auto;
        span{
          cursor: pointer;
        }
      }
  }
</style>
