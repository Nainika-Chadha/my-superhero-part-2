var can=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
b_width=30;
b_height=30;
player_object="";
block_object="";

function player_update(){
fabric.Image.fromURL("player(1).png",function(Img)
{
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});
}

function new_block(get_image){
    fabric.Image.fromURL(get_image,function(Img)
    {
    block_object=Img;
    block_object.scaleToWidth(b_width);
    block_object.scaleToHeight(b_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    }

    window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keypressed=e.keyCode;

if(e.shiftKey==true && keypressed=="80"){
console.log("shift and p are pressed together");
b_width=b_width+10;
b_height=b_height+10;
document.getElementById("c_width").innerHTML=b_width;
document.getElementById("c_height").innerHTML=b_height;
}
if(e.shiftKey==true && keypressed=="77"){
    console.log("shift and m are pressed together");
    b_width=b_width-10;
    b_height=b_height-10;
    document.getElementById("c_width").innerHTML=b_width;
    document.getElementById("c_height").innerHTML=b_height;
}
if(keypressed=="84"&& keypressed=="82"){ 
console.log("t and r are pressed together");
new_block("images/thor_right_hand.png");
}

if(keypressed=="84"&& keypressed=="76"){ 
console.log("t and l are pressed together");
new_block("images/thor_left_hand.png");
}

if(keypressed=="84"&& keypressed=="70"){ 
console.log("t and f are pressed together");
new_block("images/thor_face.png");
}

if(keypressed=="83"&& keypressed=="82"){ 
console.log("s and r are pressed together");
new_block("images/spiderman_right_hand.png");
}


if(keypressed=="83"&& keypressed=="84"){ 
console.log("s and t are pressed together");
new_block("images/spiderman_legs.png");
 }

if(keypressed=="83"&& keypressed=="76"){ 
console.log("s and l are pressed together");
new_block("images/spiderman_left_hand.png");
}

if(keypressed=="83"&& keypressed=="70"){ 
console.log("s and f are pressed together");
new_block("images/spiderman_face.png");
}

if(keypressed=="83"&& keypressed=="66"){ 
console.log("s and b are pressed together");
new_block("images/spiderman_body.png");
}


if(keypressed=="73"&& keypressed=="82"){ 
console.log("i and r are pressed together");
new_block("images/ironman_right_hand.png");
}
    
    
if(keypressed=="73"&& keypressed=="84"){ 
console.log("i and t are pressed together");
new_block("images/ironman_legs.png");
}
    
if(keypressed=="73"&& keypressed=="76"){ 
console.log("i and l are pressed together");
new_block("images/ironman_left_hand.png");
}
    
if(keypressed=="73"&& keypressed=="70"){ 
console.log("i and f are pressed together");
new_block("images/ironman_face.png");
}
    
if(keypressed=="73"&& keypressed=="66"){ 
console.log("i and b are pressed together");
new_block("images/ironman_body.png");
}


if(keypressed=="72"&& keypressed=="82"){ 
    console.log("h and r are pressed together");
    new_block("images/hulk_right_hand.png");
    }
        
        
    if(keypressed=="72"&& keypressed=="84"){ 
    console.log("h and t are pressed together");
    new_block("images/hulk_legs.png");
    }
        
    if(keypressed=="72"&& keypressed=="76"){ 
    console.log("h and l are pressed together");
    new_block("images/hulk_left_hand.png");
    }
        
    if(keypressed=="72"&& keypressed=="70"){ 
    console.log("h and f are pressed together");
    new_block("images/face_face.png");
    }
        
    if(keypressed=="72"&& keypressed=="66"){ 
    console.log("h and b are pressed together");
    new_block("images/hulkd_body.png");
    }



if(keypressed=="37"){
left();
console.log("left");
}

if(keypressed=="38"){
up();
console.log("up");
}

if(keypressed=="39"){
right();
console.log("right");
}

if(keypressed=="40"){
down();
console.log("down");
}
}
