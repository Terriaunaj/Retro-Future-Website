//add all images
var imageRandom = [
 
"hairImages/hair1.jpeg",
"hairImages/hair2.jpeg",
"hairImages/hair3.jpeg",
"hairImages/hair4.jpeg",
"hairImages/hair5.jpeg"
]

function generateImage(){    

    //Generates random index
    var number = Math.floor(Math.random()*imageRandom.length);
    
    //replace existing content with new image
    document.getElementById("result").innerHTML = '<img src="' + imageRandom[number] + '"/>';
}