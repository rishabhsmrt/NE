test = document.getElementById("name");

test.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "#c5aa6a";
    setTimeout(() => {
        event.target.style.color = "";
      }, 5000);
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
    setTimeout(showslide, 2000);
}


jQuery('#frmSubmit').on('submit',function(e){
    e.preventDefault();
    jQuery('#msg').html('Please wait...');
    jQuery('#btnSubmit').attr('disabled',true);
    jQuery.ajax({
        url:'https://script.google.com/macros/s/AKfycbyZ8mxEq6HqJXCpqPldXwFe8Ov5CnOr3RG-SYahD680M5YmZzWd2l6pjmdHWC-xaoGc/exec',
        type:'post',
        data:jQuery('#frmSubmit').serialize(),
        success:function(result){
            jQuery('#frmSubmit')[0].reset();
            jQuery('#msg').html('Thank You');
            jQuery('#btnSubmit').attr('disabled',false);
            //window.location.href='';
        }
    });
  });