var nav=document.getElementById("nav"); 
export const navbar=()=>{
    var navibar_container=document.createElement("div");
    navibar_container.classList.add("navbar_main");
    //navleft
    var navleft=document.createElement("div");
    var navleft_containt=document.createElement("h1");
    navleft_containt.innerText="Flash Shop";
    navleft.appendChild(navleft_containt);
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
    
    var shoping_cart=document.createElement("span");
    shoping_cart.classList.add("material-symbols-outlined");
    shoping_cart.innerText="shopping_cart";

    navRightContainer.appendChild(faviorate);
    navRightContainer.appendChild(shoping_cart);
    
    //adding to navcontainer
    navibar_container.appendChild(navleft);
    navibar_container.appendChild(navMiddleContainer);
    navibar_container.appendChild(navRightContainer);

    //adding to maIN NAV
    nav.appendChild(navibar_container);
}
