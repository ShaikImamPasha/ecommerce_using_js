var card_main=document.getElementById("main_card");
import { isReapet } from "../index.js";
//card_container
var cat=JSON.parse(localStorage.getItem("cad"))||[];
export var card=(products,favirote_card)=>{
    for(let val of products){
        var card_container=document.createElement("div");
        card_container.classList.add("card");
        //image
        var image_container=document.createElement("div");
        var image=document.createElement("img");
        image.setAttribute("src",val.img);
        image_container.appendChild(image);
        //card_detaisls
        var card_details_container=document.createElement("div");
        card_details_container.classList.add("card_details");
        
        var name=document.createElement("h3");
        name.innerText=val.alt;
        
        var brand_name=document.createElement("p");
        brand_name.innerText=val.brand;
        //price
        var price_container=document.createElement("h4");
        var sp=document.createElement("span");
        sp.innerText="Rs"+val.newPrice;
        var del=document.createElement("del");
        del.innerText="Rs"+val.oldPrice;
        sp.appendChild(del);
        price_container.appendChild(sp);
        
        //rating 
        var star=document.createElement("p");
        star.innerText=val.rating;
        var st=document.createElement("span");
        st.innerHTML="&#9733";
        //button
        var button=document.createElement("button");
        button.setAttribute("id",val._id);
        button.classList.add("button");
       var el=isReapet(cat,val._id);
        button.innerText= favirote_card==="favirote_card"? "remove to cart":favirote_card==="main" &&
        el ?"add to cart":"go to cart";
        button.setAttribute("data-id",val._id);
        
        card_details_container.appendChild(name);
        card_details_container.appendChild(brand_name);
        card_details_container.appendChild(price_container);
        card_details_container.appendChild(star);
        card_details_container.appendChild(st);
        card_details_container.appendChild(button);
        
        card_container.appendChild(image_container);
        card_container.appendChild(card_details_container);
        //add to main card
        card_main.appendChild(card_container);
         
        }
}

