var dropdowns=document.querySelectorAll(".dropdown select");
var btn=document.querySelector("form button");
for(let select of dropdowns)
{
    for(currcode in countryList)
    {
        var newoption=document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;
        
        if(select.name==="from"&& currcode==="USD")
        {
            newoption.selected="selected";
        }
        else if(select.name==="to"&& currcode==="BDT")
            {
                newoption.selected="selected";
            }
        
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
}
const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;
}
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    let ammount=document.querySelector(".amount input");
    let ammval=ammount.value;
    console.log(ammval);
})