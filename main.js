var img = document.getElementById("img")
console.log(img)

function onBulb(){
img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1yCOzBlIUfrGVWDrjHHzcDWmqchSstPhTz5DtBxog2MfvF2eknSaaw-P29iPfcUz_zvg&usqp=CAU"
document.getElementById("off").disabled=false
}
function offBulb(){
    img.src="https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"
    document.getElementById("on").disabled=false
}