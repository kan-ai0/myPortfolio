$(document).ready(function() {
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.progress-bar');

    const animateProgressBar = (bar) => {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage;
        bar.style.width = percentage;
    };

    const progressBarObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    bars.forEach(bar => {
        progressBarObserver.observe(bar);
    });
});


// Counter Section


document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = '0';
            let target = +counter.dataset.count;
            let step = target / 100;

            let countIt = function() {
                let displayedCount = +counter.innerText;
                if (displayedCount < target) {
                    counter.innerText = Math.ceil(displayedCount + step);
                    setTimeout(countIt, 30);
                } else {
                    counter.innerText = target;
                }
            };
            
            countIt();
        });
    }

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    // Observe the counter section
    const counterSection = document.querySelector('.counter-wrapper'); // Changed from '.counter-section' to '.counter-wrapper'
    if (counterSection) {
        counterObserver.observe(counterSection);
        console.log('Counter section observed');
    } else {
        console.error('Counter section not found');
    }

    console.log('Number of counters:', counters.length);
});

//image filter

var $wrapper = $('.portfolio-wrapper');

$wrapper.isotope({
    filter: '*',
    layoutMode: 'masonry',
    animationOptions : {
        duration: 750,
        easing:'linear'
    }
});

let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function(e) {
            e.preventDefault();

            $wrapper.isotope({
                filter : selector,
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'linear'
                }
            });

            links.forEach(link =>{
                link.classList.remove('active');
            })

            e.target.classList.add('active');

        });
    })



// Magnify pop up 

$(document).ready(function() {
    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        }
    });
});

// Slider

$('.slider').slick({
    arrows: false,
    autoplay: true
});
