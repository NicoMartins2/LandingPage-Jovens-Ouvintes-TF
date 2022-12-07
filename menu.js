const home_btn = document.getElementById("home_btn");
const aboutUs_btn = document.getElementById("aboutUs_btn");
const project_btn = document.getElementById("project_btn");
const contact_btn = document.getElementById("contact_btn");
// variaveis dos botoes do menu

window.addEventListener("scroll", (event) => {
    var scroll = this.scrollY;
    console.log(scroll);
    if(scroll >= 0 && scroll < 1000 ){
        buttonsSelected(0);
    }else if (scroll > 1000){
        buttonsSelected(1);
    }
})


function buttonsSelected(selected){
    const defaultColor = "#000000";
    const selectedColor = "#519b9b";

    switch(selected){
        case 0:
            home_btn.style.color = selectedColor;
            aboutUs_btn.style.color = defaultColor;
            project_btn.style.color = defaultColor;
            contact_btn.style.color = defaultColor;

        case 1:
            home_btn.style.color = defaultColor;
            aboutUs_btn.style.color = selectedColor;
            project_btn.style.color = defaultColor;
            contact_btn.style.color = defaultColor;
            
    }
}

function changeButton_Color(button, colored){
    return button.style.color = colored;
}
