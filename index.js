import { navbar,card,isReapet,filter } from "./utilizes/index.js";
import {products} from "./data/data.js";
var nav_id=document.getElementById("nav");
var cat=JSON.parse(localStorage.getItem("cad"))||[];
navbar("main");
filter();
card(products,"main");
var button=document.getElementById("main_card");
button.addEventListener("click",(event)=>{
    var isRepeatCaert=isReapet(cat,event.target.dataset.id);
    if(isRepeatCaert && document.getElementById(event.target.dataset.id)){
        var cartdata=products.filter(({_id})=>
         _id===event.target.dataset.id);
        cat=[...cat,...cartdata];
        var no_itemes=JSON.parse(localStorage.getItem("no_itemes")) || 0;
        no_itemes=no_itemes+1;
        localStorage.setItem("no_itemes",JSON.stringify(no_itemes));
        nav_id.innerHTML="";
        navbar("main");
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
    var ratingfilter_data=products.filter((e)=>
     e.rating>=Number(event.target.dataset.id));
     localStorage.setItem("rating_filter_data",JSON.stringify(ratingfilter_data));
     event.target.dataset.id ? button.innerHTML="":null;
   event.target.dataset.id && ratingfilter_data ? card(ratingfilter_data,"main"):null;
})
//searching operationes

const input = document.querySelector("input");
input.addEventListener("keyup",(e)=>{
        var filter_search_data=products.filter(({brand})=>{
          return brand.toLowerCase().startsWith(e.target.value.toLowerCase())
        })
       if(filter_search_data.length===0){
          button.innerHTML="<h2>not available</h2>";
       }
       else if(input.value===""){
        button.innerHTML="";
        JSON.parse(localStorage.getItem("rating_filter_data"))?
        card(JSON.parse(localStorage.getItem("rating_filter_data")),"main"):
        card(products,"main")
        ;
    }
       else{
 localStorage.setItem("filte_main_data",JSON.stringify(filter_search_data));
        button.innerHTML="";
           card(filter_search_data,"main");
       }
})

//go to card_page
var shoping_card=document.getElementById("shoping_card");
shoping_card.addEventListener("click",(event)=>{
    location.href="./pages/singlecard.html";
})
var filter_sybole=document.getElementById("filter_sybole");
filter_sybole.addEventListener("click",(event)=>{
    var filter_part=document.getElementsByClassName("a")[0];
    filter_part.classList.toggle("filter_part_d");
    if(document.getElementById("filter_part")){
        filter_part.setAttribute("id"," ");
    }
    else{
        filter_part.setAttribute("id","filter_part");
    }
})