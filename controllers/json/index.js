exports.jsonCtr = async (ctx ,next) =>{
  let rst = ctx.response;
  rst.type = "application/json";
  rst.body={
    error: null,
    data:{
      list:[{
        id: 1,
        name: 'sss'
      },{
        id: 2,
        name: 'ddd'
      }]
    }
  }
}