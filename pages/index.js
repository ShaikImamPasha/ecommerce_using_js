import { horizantelcard,navbar,isReapet} from "../utilizes/index.js";
import { products } from "../data/data.js";
var cat=JSON.parse(localStorage.getItem("cad"));
var nav_id=document.getElementById("nav");
horizantelcard(cat);
navbar("shoping_card");
var hr_main_card=document.getElementById("hr_main_card");
hr_main_card.addEventListener("click",(event)=>{
         var filter_data=JSON.parse(localStorage.getItem("cad")).
         filter((e)=> e._id!==event.target.dataset.id);
        localStorage.setItem("cad",JSON.stringify(filter_data));
        var b=JSON.parse(localStorage.getItem("no_itemes"));
        if((event.target.dataset.id.length)!==1){
                b=b-1;
                localStorage.setItem("no_itemes",JSON.stringify(b));
                nav_id.innerHTML="";
                navbar("shoping_card");
        }
        hr_main_card.innerHTML="";
        horizantelcard(JSON.parse(localStorage.getItem("cad")));
}) 
