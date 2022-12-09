const home_btn = document.getElementById("home_btn");
const aboutUs_btn = document.getElementById("aboutUs_btn");
const project_btn = document.getElementById("project_btn");
const contact_btn = document.getElementById("contact_btn");
// variaveis dos botoes do menu
let buttonStylezed = null;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if(scroll >= 0 && scroll < 1000 && buttonStylezed === 0){
        buttonsSelected(0);
    }else if (scroll > 1000 && buttonStylezed != 1){
        buttonsSelected(1);
    }
})


function buttonsSelected(selected){
    const defaultColor = "#000000";
    const selectedColor = "#519b9b";

    home_btn.style.color = defaultColor;
    aboutUs_btn.style.color = defaultColor;
    project_btn.style.color = defaultColor;
    contact_btn.style.color = defaultColor;

    switch(selected){
        case 0:
            home_btn.style.color = selectedColor;

        case 1:
            aboutUs_btn.style.color = selectedColor;

        case 2:
            project_btn.style.color = selectedColor;

        case 3:
            contact_btn.style.color = selectedColor;
            
    }

    buttonStylezed = selected;
}

function changeButton_Color(button, colored){
    return button.style.color = colored;
}
