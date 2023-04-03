test = document.getElementById("name");

test.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "#c5aa6a";
    setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },false
);

slide = true;
let check1, check2;
showslide();

function showslide(){
    
    check1 = document.getElementsByClassName("dis_1");
    check1[0].style.display = "none";
    check2 = document.getElementsByClassName("dis_4");
    check2[0].style.display = "none";
    
    if(slide == true){
        check2[0].style.display = "block";
        slide = false;
    }
    else {
        check1[0].style.display = "block";
        slide = true;
    }
    console.log("value of slide is " + slide);
    console.log("value of check2 " + check2[0].style.display); 
    console.log("value of check1 " + check1[0].style.display); 
    setTimeout(showslide, 2000);
}
