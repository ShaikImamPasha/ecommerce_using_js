import { navbar,card,isReapet,filter } from "./utilizes/index.js";
import {products} from "./data/data.js";
var cat=JSON.parse(localStorage.getItem("cad"))||[];
navbar();
filter();
card(products,"main");
var button=document.getElementById("main_card");
button.addEventListener("click",(event)=>{
    var isRepeatCaert=isReapet(cat,event.target.dataset.id);
    if(isRepeatCaert){
        var cartdata=products.filter(({_id})=>
         _id===event.target.dataset.id);
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
//for filter operation 
var filter_part=document.getElementById("filter_part");
//filter rating
filter_part.addEventListener("click",(event)=>{
    var ratingfilter_data=products.filter(({rating})=>
     rating>=Number(event.target.dataset.id));
     event.target.dataset.id ? button.innerHTML="":null;
   event.target.dataset.id && card(ratingfilter_data,"main");
})
//searching operationes

var search=document.getElementById("search");
search.addEventListener("onchange",(event)=>{
    console.log(event.target.value);
})
