const KoaRouter = require("koa-router");
const router = new KoaRouter();
const fs = require("mz/fs");
const path = require("path");
const fsMod = require("../controllers/fs/index");
const jsonMod = require("../controllers/json/index");
console.log(fsMod);
router.get('/',async (cxt,next) => {
    cxt.response.type = "text/html";
    cxt.response.body = await fs.readFile(path.join(__dirname,'../views/index.html'));
});

router.post('/api/fs',fsMod.fsCtr);
router.post('/api/json',jsonMod.jsonCtr);

module.exports = router;
