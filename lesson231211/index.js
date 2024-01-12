let image = document.querySelector(".gallery__image"), isToggle = true;
// let isToggle = false;

function zoom() {
    if(isToggle){
        image.style.width = "300px";
        image.style.height = "300px";

        // isToggle = false;
    }else {
        image.style.width = "200px";
        image.style.height = "200px";

        // isToggle = true;
    }

    isToggle = !isToggle;
}

