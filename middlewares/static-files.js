const path = require("path");
const mime = require("mime");
const fs = require("mz/fs");

function staticFiles(url,dir){
    return async(ctx,next) => {
        let p = ctx.request.path;
        if(p.startWith(url)){
            let fullPath = path.join(dir,p.substring(url.length));
            if( await fs.exists(fullPath)){
                ctx.response.type = mime.lookup(p);
                ctx.response.body = await fs.readFile(p);
            }else{
                ctx.response.status = 404;
            }
        }else{
            await next();
        }
    }
}

module.exports = staticFiles;