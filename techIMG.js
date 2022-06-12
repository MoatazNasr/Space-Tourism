const vehicleIMG = document.querySelector('#vehicle-image')
const spaceportIMG = document.querySelector('#spaceport-image')
const spacecapsIMG = document.querySelector('#spacecaps-image')

const windowEvents = ["load", "resize"];
windowEvents.forEach((event) => {
    window.addEventListener(event, () => {
        check();
    });
});


function check() {
    if (window.innerWidth < 720) {
        vehicleIMG.children[0].src = "assets/technology/image-launch-vehicle-landscape.jpg"
        spaceportIMG.children[0].src = "assets/technology/image-spaceport-landscape.jpg"
        spacecapsIMG.children[0].src = "assets/technology/image-space-capsule-landscape.jpg"
    }
    else {
        vehicleIMG.children[0].src = "assets/technology/image-launch-vehicle-portrait.jpg"
        spaceportIMG.children[0].src = "assets/technology/image-spaceport-portrait.jpg"
        spacecapsIMG.children[0].src = "assets/technology/image-space-capsule-portrait.jpg"
    }
}