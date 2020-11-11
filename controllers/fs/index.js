const fs = require("fs");
const config = require("../../config/index");
const log = require("../../utils/log").log;

const lockUtil = require('../../utils/lock');

exports.fsCtr = async (ctx ,next) =>{
  await lockUtil.lock(() =>{
    let fileUrl = config.fileDir + '/'+ '123.txt';
    if(fs.existsSync(fileUrl)){
      fs.appendFile(fileUrl,'追加数据'+ process.pid + Math.random() + '\n','utf-8',function(err){
        if(err) {
          log.error(err);
          return;
        }
        log.info('写入成功');
        lockUtil.unlock(()=>{});
      })
    }else{
      fs.writeFile(fileUrl,'你好 koa','utf-8',function(err){
        if(err) {
          console.log(err);
          return;
        }
        log.info('写入成功');
        lockUtil.unlock(()=>{});
      })
    }

  });
  ctx.response.type = "text/plain";
  ctx.response.body = 'success';
}