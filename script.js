function clickAdd()
{
    var a=document.querySelector("input").value;
    var node=document.createElement("li");
    
    var textNode=document.createTextNode(a);
    node.appendChild(textNode);

    node.className=a;

    

    document.querySelector(".myList").appendChild(node);
    clearContent();

}

function clearContent()
{
    document.querySelector("input").value="";
}

function onClick_del()
{
   // document.querySelector("")
}


document.querySelector("ul").addEventListener("click",function(event){

    if(event.target.tagName==='LI')
    {
        event.target.classList.add("addStrike");
    }

});

document.querySelector(".btn-dark").addEventListener("click",function(event){
    //add radio buttons
    var a=document.getElementsByTagName("Li");
    for(var i=0;i<a.length;i++)
    {
        var x=document.createElement("input");
        x.className="form-check-input";
        x.setAttribute("type","checkbox");
        a[i].appendChild(x);
        x.style.verticalAlign="middle";
        x.style.float="right";
    }

    document.querySelector(".done_button").classList.remove("Display");

});

document.querySelector(".btn-success").addEventListener("click",function(event)
{
    var x;
    x=document.querySelectorAll(".form-check-input");
    var y=document.querySelectorAll("Li");
    for(var i=0;i<x.length;i++)
    {
        if(x[i].checked)
        {
            y[i].classList.add("Display");
        }

        else{
            x[i].classList.add("Display");
        }
    }

    document.querySelector(".btn-success").classList.add("Display")


})

