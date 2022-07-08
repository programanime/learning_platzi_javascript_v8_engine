for(var i = 0; i < 5; i++){
    ((i)=>{
        setTimeout(function(){
            console.log('value is ', i);
        }, 3000);
    })(i);
}