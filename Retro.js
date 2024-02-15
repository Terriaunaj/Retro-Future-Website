var imageRandom = new Array();
 
imageRandom[0] = "hairImages/hair1.jpeg";
imageRandom[1] = "hairImages/hair2.jpeg";
imageRandom[2] = "hairImages/hair3.jpeg";
imageRandom[3] = "hairImages/hair4.jpeg";
imageRandom[4] = "hairImages/hair5.jpeg";

function generateImage(){    
    for(let i = 0; i < 4; i++){
        var number = Math.floor(Math.random()*imageRandom.length);
    }
    
    document.getElementById("result").innerHTML += '<img src="' + imageRandom[number] + '"/>';
}