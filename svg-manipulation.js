
var images = document.getElementsByClassName("svg-img")

for  (let image of images){
    console.log(image)
    image.style.backgroundColor = "green";
    image.path.style.fill = "purple";
}

