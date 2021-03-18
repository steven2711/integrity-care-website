
// Mobile navigaiton fix //

// Closes mobile menu when user clicks nav link

const checkbox = document.getElementById('checkbox');
const navigationLinks = document.getElementById('mobile-links').querySelectorAll('li');


navigationLinks.forEach(listItem => {
    listItem.addEventListener('click', toggleMenu)
})


function toggleMenu() {
    if(checkbox) {
        checkbox.checked = false;
    }
}


// Scroll Effect //

const serviceScrollItems = document.querySelectorAll('.services-scroll-effect');
const teamScrollItems = document.querySelectorAll('.team-scroll-effect');


window.addEventListener('scroll', handleScrollEffect);


function handleScrollEffect() {

    const triggerBottom = window.innerHeight / 5 * 4;

    

    serviceScrollItems.forEach((item, index) => {

        let parentNode = item.parentNode;
        
        let delayTime = index + 1;
        
        const parentTop = parentNode.getBoundingClientRect().top;

         if(parentTop < triggerBottom) {
             item.classList.add('show');
             item.classList.add(`delay-${delayTime}`)
         } else {
             item.classList.remove('show');
             item.classList.remove(`delay-${delayTime}`);
         }
        
    })


    teamScrollItems.forEach((item, index) => {

        let parentNode = item.parentNode;
        
        let delayTime = index + 1;
        
        const parentTop = parentNode.getBoundingClientRect().top;

         if(parentTop < triggerBottom) {
             item.classList.add('show');
             item.classList.add(`delay-${delayTime}`)
         } else {
             item.classList.remove('show');
             item.classList.remove(`delay-${delayTime}`);
         }
        
    })
}


