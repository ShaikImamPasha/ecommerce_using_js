var filter_part=document.getElementById("filter_part");
export const filter=()=>{
    var filter_head=document.createElement("h2");
    filter_head.innerText="Filter";
    var rating_heading=document.createElement("p");
    rating_heading.innerText="Rating";


    var span_4=document.createElement("span");
    span_4.innerText="4 star & above";
    var span_4_span=document.createElement("span");
    var input4=document.createElement("input");
    input4.setAttribute("data-id","4");
    input4.setAttribute("type","radio");
    input4.setAttribute("name","star");
    span_4_span.appendChild(input4);

    var span_3=document.createElement("span");
    span_3.innerText="3 star & above";
    var span_3_span=document.createElement("span");
    var input3=document.createElement("input");
    input3.setAttribute("data-id","3");
    input3.setAttribute("type","radio");
    input3.setAttribute("name","star");
    span_3_span.appendChild(input3);

    var span_2=document.createElement("span");
    span_2.innerText="2 star & above";
    var span_2_span=document.createElement("span");
    var input2=document.createElement("input");
    input2.setAttribute("data-id","2");
    input2.setAttribute("type","radio");
    input2.setAttribute("name","star");
    span_2_span.appendChild(input2);

    var span_1=document.createElement("span");
    span_1.innerText="1 star & above";
    var span_1_span=document.createElement("span");
    var input1=document.createElement("input");
    input1.setAttribute("data-id","1");
    input1.setAttribute("type","radio");
    input1.setAttribute("name","star");
    span_1_span.appendChild(input1);
    //adding to main

    filter_part.appendChild(filter_head);
    filter_part.appendChild(rating_heading);
    filter_part.appendChild(span_4);
    filter_part.appendChild(input4);
    filter_part.appendChild(span_3);
    filter_part.appendChild(input3);
    filter_part.appendChild(span_2);
    filter_part.appendChild(input2);
    filter_part.appendChild(span_1);
    filter_part.appendChild(input1);
}
