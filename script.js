let gallery1 = document.querySelectorAll('#recipeCarousel1.carousel .carousel-item');

gallery1.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = gallery1[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

let gallery2 = document.querySelectorAll('#recipeCarousel2.carousel .carousel-item');

gallery2.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = gallery2[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

let gallery3 = document.querySelectorAll('#recipeCarousel3.carousel .carousel-item');

gallery3.forEach((el) => {
    const minPerSlide = 7
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = gallery3[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
});

/* extra */

let galSections = document.getElementsByClassName("netflix-gallery");

function spyScroll() {

    /* console.log("item y " + galSections[0].getBoundingClientRect().top);
    console.log("window y " + window.scrollY); */

    for (let galSection of galSections) {
        if (window.scrollY >= galSection.getBoundingClientRect().top) {
            galSection.classList.add("visible");
        }
    }
    
}

window.addEventListener("scroll", spyScroll);

/* my extra */
/* logo che compare a window onlad */
window.onload = () => {
    document.getElementById("neflix-logo").classList.add("netflix-display-logo");
}

/* input box di ricerca che compare su click della lente di ingrandimento */
let searchIcon = document.querySelector("ion-icon.netflix-search");
let searchBox = document.querySelector("input.form-control");
console.log(searchIcon);
console.log(searchBox);

searchIcon.addEventListener("click", () => {
    searchBox.classList.remove("hide-search");
    searchBox.classList.add("show-search");
});
