/*MENU SHOW*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*REMOVE MENU MOBILE*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*SCROLL SECTIONS ACTIVE LINK*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*SCROLL REVEAL ANIMATION*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*CHARTS*/
var ctx = document.getElementById('myChart').getContext('2d');
var race = document.getElementById('race').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2009_2010', '2010_2011', '2011_2012', '2012_2013', '2013_2014', '2014_2015', '2015_2016','2016_2017','2017_2018'],
        datasets: [{
            label: 'Total Homelessness Decisions',
            data: [542.476, 619.613, 661.954, 687.32, 680.531, 684.939,699.823,704.823,704.823,667.137],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
            borderColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var myChart = new Chart(race, {
    type: 'pie',
    data: {
        labels: ['2009_2010', '2010_2011', '2011_2012', '2012_2013', '2013_2014', '2014_2015', '2015_2016','2016_2017','2017_2018'],
        datasets: [{
            label: 'White',
            data: [164.735, 178.168, 202.095, 209.378, 199.756, 203.25,204.899,215.055,215.055,209.552],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
            label: 'Asian or Asian British ',
            data: [15.6738, 16.8049, 20.622, 25.3872, 26.9085, 29.3659,32.6524,33.1463,33.1463,31.6555],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
            label: 'Mixed',
            data: [6.97561,8.01829,9.90854,10.4665, 9.5061,10.2256,11.375, 11.1555,11.1555 ,11.8201 ],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
            label: 'Other Ethnic Origin',
            data: [9.3628,11.3171,13.311,13.2317,12.6982,14.0061,16.372,16.7988,16.7988,14.2256],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
            label: 'Ethic Group not Stated',
            data: [11.1829,13.5701,14.6311,16.7713,17.4878,19.8262,22.1616,20.7287,20.7287,21.561],
            backgroundColor: [
                'rgba(143, 222, 103, 0.7)',
                'rgba(5, 26, 34, 0.8)',
                'rgba(232, 44, 105, 0.9)',
                'rgba(41, 180, 114, 0.7)',
                'rgba(61, 68, 57, 0.3)',
                'rgba(117, 216, 220, 1))',
                'rgba(15, 210, 249, 0.5)',
               ' rgba(225, 200, 68, 0.5)',
                'rgba(208, 10, 126, 0.9)'

            ],
        }]
    },
    options: {
        responsive:true,
    }
});
