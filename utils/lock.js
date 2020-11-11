const fs = require("fs");
let hasLock = false;
const lockDir = require("../config/index").lockDir;

exports.lock = function(cb){
  if(hasLock) return cb();

  fs.mkdir(lockDir,function(err){
    if(err) return cb(err);

    fs.writeFile(lockDir + '/' + process.pid,function(err){
      if(err) console.error(err);
      hasLock = true;
      return cb();
    })
  })
}

exports.unlock = function(cb){
  if(!hasLock) return cb();

  fs.rmdir(lockDir,function(err){
    if(err) return cb(err);
    hasLock = false;
    cb();
  })
}

process.on('exit',function(){
  if(hasLock){
    fs.unlinkSync(lockDir + '/' + process.pid);
    fs.rmdirSync(lockDir);
    console.log("remove lock");
  }
})