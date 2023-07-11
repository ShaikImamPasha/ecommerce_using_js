import { horizantelcard} from "../utilizes/index.js";
var cat=JSON.parse(localStorage.getItem("cad"));
horizantelcard(cat);
var hr_main_card=document.getElementById("hr_main_card");
hr_main_card.addEventListener("click",(event)=>{
         var filter_data=JSON.parse(localStorage.getItem("cad")).
         filter((e)=> e._id!==event.target.dataset.id);
        localStorage.setItem("cad",JSON.stringify(filter_data));
        hr_main_card.innerHTML="";
        horizantelcard(JSON.parse(localStorage.getItem("cad")));
}) 
