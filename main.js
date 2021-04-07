var paragraph=[]
function submit(){
for (x=1; x<=5; x++){
  var line=document.getElementById("input"+x).value
 paragraph.push(line)
}
console.log(line)

var FA=paragraph.join(". ")
document.getElementById("output").innerHTML=FA}

 
