var main = document.getElementById("multiplication_table");
var box= `<div class = "titlebox">
<div class="title">
    <div class="ch">九九乘法表</div>
    <div class="en">MULTIPLICATION CHART</div>
</div>
</div>`;
for (var i = 2; i < 10; i++) {
    box +="<ul class=num_box>"+"<li class=numTilte>"+i+"</li>";

    for (var j = 1; j < 10; j++) {
        box += "<li class=multiplication>"+i+"x"+j+ "=" + (i*j) +"</li>";
    }
    box += `</ul>`;
}

main.innerHTML = box;


