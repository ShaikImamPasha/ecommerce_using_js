export const isReapet=(cart,id)=>{
    for(let ob of cart){
        if(ob._id===id){
            return false;
        }
    }
    return true;
}