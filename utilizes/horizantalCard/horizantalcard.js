var main_card=document.getElementById("hr_main_card");
var no_itemes=JSON.parse(localStorage.getItem("no_items"));
export const horizantelcard=(productes)=>{
  if(productes.length===0){
     main_card.innerHTML="<h1>Not any Itemes added</h1>";
  }
  else{
    for(let val of productes){
      var hr_card_container=document.createElement("div");
      hr_card_container.classList.add("fl");
        //image
      var image_container=document.createElement("div");
      var img=document.createElement("img");
      img.setAttribute("class","img");
      img.setAttribute("src",val.img);
      image_container.appendChild(img);
      //details
    var details_container=document.createElement("div");
    var name=document.createElement("h3");
    name.innerText=val.name;
    details_container.appendChild(name);
    
    var gender=document.createElement("p");
    gender.innerText=val.alt;
    details_container.appendChild(gender);

    var rs_new_span=document.createElement("span");
    rs_new_span.innerText=val.newPrice;
    details_container.appendChild(rs_new_span);

    var rs_old_span=document.createElement("span");
    var rs=document.createElement("del");
    rs.innerText=val.oldPrice;
    rs_old_span.appendChild(rs);
    details_container.appendChild(rs_old_span);

    var button_container=document.createElement("div");
    var button_remove=document.createElement("button");
    var button_add_favirote=document.createElement("button");
     button_remove.innerText="Remove";
     button_remove.setAttribute("data-id",val._id);
     button_add_favirote.innerText="Buy";
     button_container.appendChild(button_remove);
     button_container.appendChild(button_add_favirote);
     
     details_container.appendChild(button_container);
     //adding to main container

     hr_card_container.appendChild(image_container);
     hr_card_container.appendChild(details_container);
     

     main_card.appendChild(hr_card_container);
  }
}
}