let slideIndex = 1;

function plusImage(n){
    showImg(slideIndex += n);
}

function showImg(n){
    let i;
    let img = document.getElementsByClassName("imgs");

    if(n > img.length){
        slideIndex = 1;
    }if (n < 1){
        slideIndex = img.length;
    }

    for(i = 0; i < img.length; i++){
        img[i].style.display = "none";
    }

    img[slideIndex - 1].style.display = "block";
}

showImg(slideIndex);