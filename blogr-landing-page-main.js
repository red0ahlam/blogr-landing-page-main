
const hamburger_button = document.querySelector('.hamburger-button');
const navigation_links = document.querySelector('.navigation-links');
const dropdown_trigger = document.querySelectorAll(".dropdown-trigger");
const arrow_icon = document.querySelectorAll('.arrow-icon')
const dropdown_list = document.querySelectorAll(".dropdown-list");
const dropdown_menu = document.querySelectorAll(".dropdown-menu");

dropdown_list.forEach((element) => {
    const list_links = element.querySelectorAll('a');
    const lastIndex = list_links.length - 1;
    const lastLink = list_links[lastIndex];
    lastLink.addEventListener('blur', visible);
})

function show(trigger,current,i) {
    current[i].classList.toggle("hide");
    arrow_icon[i].classList.toggle('rotate');
        if (trigger[i].ariaExpanded == 'true') {
            trigger[i].ariaExpanded = 'false';
        } else {
            trigger[i].ariaExpanded = 'true';
        }
}

function visible(event) {
    x = event.target;
    for (var i = 0; i < dropdown_trigger.length; i++) {
        if (dropdown_trigger[i] !== x && !(dropdown_list[i].classList.contains('hide'))) {
            dropdown_list[i].classList.toggle("hide");
            dropdown_trigger[i].ariaExpanded = 'false';
            arrow_icon[i].classList.toggle('rotate');
        }
        if (dropdown_trigger[i] == x) {
            show(dropdown_trigger,dropdown_list, i);
        }
    }
}

for (var i = 0; i < dropdown_trigger.length; i++) {
    dropdown_trigger[i].addEventListener('click', visible);
}

window.addEventListener('click', (e) => {
    const x = e.target;
    for (var i = 0; i < dropdown_trigger.length; i++) {
        if (!(x.parentNode.classList.contains('links-list')) && 
        !(x.parentNode.classList.contains('dropdown-menu')) && 
        !(x.parentNode.classList.contains('dropdown-list')) && 
        !(dropdown_list[i].classList.contains('hide'))) {
            
            show(dropdown_trigger,dropdown_list, i);
        }
    }
})

hamburger_button.addEventListener('click', (e) => {

    navigation_links.classList.toggle('hide-nav');

    if (hamburger_button.ariaExpanded == 'false') {
        hamburger_button.ariaExpanded = 'true';
        hamburger_button.classList.remove('is-closed');
        hamburger_button.classList.add('is-opened');
    } else {
        hamburger_button.ariaExpanded = 'false';
        hamburger_button.classList.remove('is-opened');
        hamburger_button.classList.add('is-closed');
    }
})





// let timeout = null;

// function visible(event) {
//     var x = event.target;
//     if (timeout !== null) {
//         clearTimeout(timeout);
//         for (var i = 0; i < dropdown_menu.length; i++) {
//             if (dropdown_menu[i] !== x) {
//                 dropdown_list[i].style.display = "none";
//             }
//         }
//     }

//     for (var i = 0; i < dropdown_menu.length; i++) {
//         if (dropdown_menu[i] == x) {
//             dropdown_list[i].style.display = "block";
//         }
//     }
// }

// function hidden(event) {
//     var x = event.target;
//     for (var i = 0; i < dropdown_menu.length; i++) {
//         if (dropdown_menu[i] == x) {
//             dropdown_list[i].style.display = "none";
//         }
//     }
// }

// for (var i = 0; i < dropdown_trigger.length; i++) {
//     dropdown_menu[i].addEventListener('mouseenter', visible);
//     dropdown_menu[i].addEventListener('mouseleave', (e) => {

//         timeout = setTimeout(() => {
//             hidden(e);
//             timeout = null;
//         }, 1500);
//     });
// }









