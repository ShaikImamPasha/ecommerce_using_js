import { navbar,card,isReapet } from "./utilizes/index.js";
import {products} from "./data/data.js";
var cat=JSON.parse(localStorage.getItem("cad"))||[];
navbar();
card(products,"main");
var button=document.getElementById("main_card");
button.addEventListener("click",(event)=>{
    var isRepeatCaert=isReapet(cat,event.target.dataset.id);
    if(isRepeatCaert){
        var cartdata=products.filter(({_id})=> _id===event.target.dataset.id);
        cat=[...cat,...cartdata];
        localStorage.setItem("cad",JSON.stringify(cat));
        var newButton=document.getElementById(cartdata[0]._id);
        newButton.innerText="Go to cart";
        newButton.classList.add("fl");
    }
    else{
        location.href="./pages/singlecard.html";
    }
})
