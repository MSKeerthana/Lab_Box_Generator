var value = document.getElementById('sub');
value.addEventListener("click",box);
var count = 0;
function box()
{
    var num = document.getElementById("val").value;
    var colour = document.getElementById("cval").value;    
    console.log(colour);
    for(var i = 0; i < num; i++)
    {
        count++;
        var output = document.createElement('div');
        output.id = "boxclr";
        document.body.appendChild(output).style.backgroundColor = colour;
        output.innerHTML = count;
    }
    var lc = document.getElementById('boxclr').lastChild.innerText;
    console.log(lc);
}