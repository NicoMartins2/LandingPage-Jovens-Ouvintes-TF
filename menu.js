const home_btn = document.getElementById("home_btn");
const aboutUs_btn = document.getElementById("aboutUs_btn");
const project_btn = document.getElementById("project_btn");
const contact_btn = document.getElementById("contact_btn");
// variaveis dos botoes do menu

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll);

    if(scroll >= 0 && scroll < 650){
        buttonsSelected('home');
    }else if (scroll >= 650){
        buttonsSelected('aboutUs');
    }
})


function buttonsSelected(selected){
    const defaultColor = "#000000";
    const selectedColor = "#519b9b";

    switch(selected){
        case 'home':
            changeButton_Color(home_btn, selectedColor);
            changeButton_Color(aboutUs_btn, defaultColor);
            changeButton_Color(project_btn, defaultColor);
            changeButton_Color(contact_btn, defaultColor);

        case 'aboutUs':
            changeButton_Color(home_btn, defaultColor);
            changeButton_Color(aboutUs_btn, selectedColor);
            changeButton_Color(project_btn, defaultColor);
            changeButton_Color(contact_btn, defaultColor);

        case 'project':
            project_btn.style.color = selectedColor;

        case 'contacts':
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
