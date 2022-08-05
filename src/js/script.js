const dropdownBtns = document.querySelectorAll(".dropdown__title");
const dropdowns = document.querySelectorAll(".dropdown");
const openBtn = document.querySelector("#openBtn");
const closeBtn = document.querySelector("#closeBtn");
const slideoutMenu = document.querySelector("#slideoutMenu");

const focusableInNav = document.querySelectorAll(
    "#slideoutMenu button, #slideoutMenu [href]"
);
const firstFocusableElem = focusableInNav[0];
const lastFocusableElem = focusableInNav[focusableInNav.length - 1];

let viewportWidth;



function setViewportWidth() {
    viewportWidth = window.innerWidth;
}

function expandDropdownOnMouseover(e) {
    setViewportWidth();
    if (viewportWidth < 800) return;  // desktop only

    const dropdownBtn = this.firstElementChild;
    const dropdownMenu = this.lastElementChild;
    dropdownMenu.setAttribute("data-visible", "true");
    dropdownBtn.setAttribute("aria-expanded", "true");
}

function collapseDropdownOnMouseleave(e) {
    setViewportWidth();
    if (viewportWidth < 800) return;  // desktop only

    const dropdownBtn = this.firstElementChild;
    const dropdownMenu = this.lastElementChild;
    dropdownMenu.setAttribute("data-visible", "false");
    dropdownBtn.setAttribute("aria-expanded", "false");
    
    // Prevent dropdown menus from getting stuck on open when
    // the user clicks on the dropdown button on desktop view.
    dropdownBtn.blur();
}

function toggleDropdownOnClick(e) {
    setViewportWidth();
    if (viewportWidth >= 800) return;  // mobile only

    const dropdownMenu = this.nextElementSibling;

    if (dropdownMenu.dataset.visible === "false") {
        dropdownMenu.setAttribute("data-visible", "true");
        this.setAttribute("aria-expanded", "true");
    } else {
        dropdownMenu.setAttribute("data-visible", "false");
        this.setAttribute("aria-expanded", "false");
    }
}

function toggleNav(e) {
    if (e.type === "keyup" && e.key !== "Escape") {
        return;
    }

    if (slideoutMenu.dataset.visible === "false") {
        slideoutMenu.setAttribute("data-visible", "true");
        openBtn.setAttribute("aria-expanded", "true");
        setTimeout(() => {
            closeBtn.focus();
        }, 301);
    } else {
        slideoutMenu.setAttribute("data-visible", "false");
        openBtn.setAttribute("aria-expanded", "false");
        setTimeout(() => {
            openBtn.focus();
        }, 301);
    }
}

function moveFocusToTop(e) {
    setViewportWidth();
    if (viewportWidth >= 800) return;  // mobile only

    if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        firstFocusableElem.focus();
    }
}

function moveFocusToBottom(e) {
    setViewportWidth();
    if (viewportWidth >= 800) return;  // mobile only

    if (e.key === "Tab" && e.shiftKey) {
        e.preventDefault();
        lastFocusableElem.focus();
    }
}



/* On desktop, dropdown menus and aria attributes toggle on mouse hover. */
dropdowns.forEach(dropdown => {
    dropdown.addEventListener("mouseover", expandDropdownOnMouseover);
    dropdown.addEventListener("mouseleave", collapseDropdownOnMouseleave);
});

/* On mobile, dropdown menus toggle on click instead of on hover. */
dropdownBtns.forEach(btn => {
    btn.addEventListener("click", toggleDropdownOnClick);
});

/* Make open and close buttons interactive and accessible. */
openBtn.addEventListener("click", toggleNav);
closeBtn.addEventListener("click", toggleNav);

/* Allow keyboard users to close the slideout menu by pressing Escape. */
slideoutMenu.addEventListener("keyup", toggleNav);

/* Keep keyboard focus inside the slideout menu until it's closed. */
firstFocusableElem.addEventListener("keydown", moveFocusToBottom);
lastFocusableElem.addEventListener("keydown", moveFocusToTop);
