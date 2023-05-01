document.body.style.backgroundColor="Seagreen";
document.body.style.textAlign="center";
document.body.style.fontSize="30px";
document.body.style.fontWeight="600";
document.body.style.color="Indigo";
var b=document.getElementById("text");
b.innerHTML="მასივიდან უარყოფითი ელემენტების ამორჩევა!";
b.style.color="Indigo";
var array=[1, 2, -9, -56, 34, 77, -90, -11, -1, -2, -5, -9]
var index=0;
while (index<array.length){
    if (array[index]<0){
    document.write(array[index], "<br>");
}
    index ++;
}