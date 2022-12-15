const home_btn = document.getElementById("home_btn");
const aboutUs_btn = document.getElementById("aboutUs_btn");
const project_btn = document.getElementById("project_btn");
const contact_btn = document.getElementById("contact_btn");
// variaveis dos botoes do menu

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if(scroll >= 0 && scroll < 1000 && buttonStylezed != 0){
        buttonsSelected(0);
    }else if (scroll >= 650 && buttonStylezed != 1){
        buttonsSelected(1);
    }
})


function buttonsSelected(selected){
    const defaultColor = "#000000";
    const selectedColor = "#519b9b";
    let buttonStylezed = null;

    switch(selected){
        case 0:
            changeButton_Color(home_btn, selectedColor);
            changeButton_Color(aboutUs_btn, defaultColor);
            changeButton_Color(project_btn, defaultColor);
            changeButton_Color(contact_btn, defaultColor);

        case 1:
            changeButton_Color(home_btn, defaultColor);
            changeButton_Color(aboutUs_btn, selectedColor);
            changeButton_Color(project_btn, defaultColor);
            changeButton_Color(contact_btn, defaultColor);

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

function onLoadDefaultButton(){
    home_btn.style.color = "#519b9b";
}
