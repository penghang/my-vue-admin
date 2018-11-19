<template>

  <div>
    <el-button style="margin:0 0 20px 20px;" type="primary" icon="document" @click="handleDownload">{{ $t('excel.export') }} Excel</el-button>
    <div v-drag style="position:absolute;top:30px;left:0">我可以拖拽</div> 
  </div>
  
</template>
<script>

export default {
  name: 'Home',
  directives:{
    'drag':{
      inserted:function(el,binding,vnode){
      let oDiv=el; //el --> 触发的DOM元素
      console.log(oDiv);
      console.log(binding);
      console.log(vnode);
      oDiv.onmousedown=function(e){
        let l=e.clientX-oDiv.offsetLeft;
        let t=e.clientY-oDiv.offsetTop;
        console.log(l,t);
        document.onmousemove=function(e){
          oDiv.style.left=e.clientX-l+'px';
          oDiv.style.top=e.clientY-t+'px';
        };
        oDiv.onmouseup=function(){
          document.onmousemove=null;
          oDiv.onmouseup=null;
        }
      }
    }}
  },
  data() {
    return {
    //list:[{id:0,title:'标题一',author:"-",Readings:3728,Date:'2018-11-15'}]
    }
  },
 
  methods:{
    handleDownload(){
      import('@/vendor/Export2Excel').then(excel=>{
        const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
        const data = [[0,'标题1','linlei',3029,'2018-11-15'],[0,'标题1','linlei',3029,'2018-11-15'],[0,'标题1','linlei',3029,'2018-11-15']]
        excel.export_json_to_excel({
          header: tHeader, //表头 必填
          data, //具体数据 必填
          filename: 'excel-list', //非必填
          autoWidth: true, //非必填
          bookType: 'xlsx' //非必填
        })
      })
    }
  }
}
</script>
