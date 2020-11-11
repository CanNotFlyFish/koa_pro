async (ctx,next) =>{
    ctx.render('./../views/index.html',{
        title: 'welcome'
    });
}