import { card } from "../utilizes/index.js";
var cat=JSON.parse(localStorage.getItem("cad"));
card(cat,"favirote_card");
var main_card=document.getElementById("main_card");
main_card.addEventListener("click",(event)=>{
        var filter_data=JSON.parse(localStorage.getItem("cad")).filter((e)=> e._id!=event.target.dataset.id);
        localStorage.setItem("cad",JSON.stringify(filter_data));
        main_card.innerHTML="";
        card(JSON.parse(localStorage.getItem("cad")),"favirote_card");
}) 