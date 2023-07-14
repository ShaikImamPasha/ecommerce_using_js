var nav=document.getElementById("nav"); 
export const navbar=(card,pagetype)=>{
    var navibar_container=document.createElement("div");
    navibar_container.classList.add("navbar_main");
    //navleft
    var filter_symobol=document.createElement("span");
    filter_symobol.classList.add("material-symbols-outlined");
     filter_symobol.setAttribute("id","filter_sybole");
    filter_symobol.innerText=" filter_list";
    var navleft=document.createElement("div");
    var navleft_containt=document.createElement("h1");
    navleft_containt.innerText= card==="shoping_card"?"Items store":card==="favorite"?"favorite":"Flash Shop";
    var homepage=document.createElement("span");
    var a=document.createElement("a");
    a.setAttribute("href","../index.html");
    a.innerHTML="<p>Home</p>";
    homepage.appendChild(a);
    pagetype==="shoping_card"?null:navleft.appendChild(homepage);
    navleft.appendChild(navleft_containt);
   pagetype==="shop_store"?null:navleft.appendChild(filter_symobol);
    //navmiddle
    var navMiddleContainer=document.createElement("div");
    navMiddleContainer.classList.add("fl");
    
    var search_button=document.createElement("span");
    search_button.classList.add("material-symbols-outlined");
    search_button.innerText="search";

    var span=document.createElement("span");
    var search_input=document.createElement("input");
     search_input.classList.add("se");
     search_input.setAttribute("type","search");
     search_input.setAttribute("id","search");
     search_input.setAttribute("placeholder","Search products");
    span.appendChild(search_input);

    navMiddleContainer.appendChild(search_button);
    navMiddleContainer.appendChild(span);
    //navright
    var navRightContainer=document.createElement("div");
    navRightContainer.classList.add("navbar_right");

    var faviorate=document.createElement("span");
    faviorate.classList.add("material-symbols-outlined");
    faviorate.innerText="favorite";
    faviorate.setAttribute("id","favorite");
    
    var shoping_cart=document.createElement("span");
    shoping_cart.classList.add("material-symbols-outlined");
    shoping_cart.setAttribute("id","shoping_card");
    shoping_cart.innerHTML=`shopping_cart<span> <small style='color:red'>
    ${JSON.parse(localStorage.getItem("no_itemes")) || 0}</small></span>`;
    
    card==="shoping_card"?navRightContainer.appendChild(shoping_cart):card==="favorite"?
    navRightContainer.appendChild(faviorate):navRightContainer.appendChild(shoping_cart);
    
    //adding to navcontainer
    navibar_container.appendChild(navleft);
    card==="shoping_card"?null:card==="favorite"?null:navibar_container.appendChild(navMiddleContainer);
    navibar_container.appendChild(navRightContainer);

    //adding to maIN NAV
    nav.appendChild(navibar_container);
}

