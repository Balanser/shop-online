// function print_contact() {
//     const vk = "dmitryvideos"
//     const telegram = "@prostodima"
//     alert('vk dmitryvideos \n telegram @prostodima');

const modal = document.getElementById("modalwindow");
const helpa  = document.getElementById("helper");
const closee = document.getElementById("closewind");
// console.log (modal, Btn, closeX);
helpa.onclick = function() {
    modal.style.display = "block";
}
closee.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    console.log(event);
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === modalPr) {
        modalPr.style.display = "none";
    }
}

const modalPr = document.getElementById("modalwindoww");
const present  = document.getElementById("presented");
const closeee = document.getElementById("closewindow");
// console.log (modal, Btn, closeX);
present.onclick = function() {
    modalPr.style.display = "block";
}
closeee.onclick = function() {
    modalPr.style.display = "none";
}


let siteRating = 0;
let ids = ["shirt-1", "shirt-2", "shirt-3", "shirt-4", "shirt-5"];
function star(starNumber) {

    siteRating = starNumber;


    starNumber = starNumber - 1;

    // console.log (ids[starNumber]);

    let star = document.getElementById(ids[starNumber]);
    // console.log (star)

    if (star.src.includes("img/photo.png")) {
        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            document.getElementById(id).src = "img/photo_1.png"
            // console.log (document.getElementById(id).src);

        }
    } else if (star.src.includes("img/photo_1")) {
        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber) {
                let id = ids[i];
                document.getElementById(id).src = "img/photo.png"
                // console.log (document.getElementById(id).src);
            }
        }
    }


}
function resetRating() {

    siteRating = 0;

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).src = "img/photo_1.png"

    }
}

