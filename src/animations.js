// contains all Intersection Observer instances for animation

export const animate = () => {
    // grab all up classes
    const fadeUp = document.querySelectorAll(".up");
        // grab all right classes
    const fadeRight = document.querySelectorAll(".right");
    // grab all left classes
    const fadeLeft = document.querySelectorAll(".left");

     const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0
    }
    
    const observer1 = new IntersectionObserver(entries => {
        // Loop over the entries
        entries.forEach(entry => {
            // If the element is visible
            if (entry.isIntersecting) {
            // Add the animation class
            entry.target.classList.add('fade-up');
            } else {
                entry.target.classList.remove('fade-up');		
            }
        });
    }, options);
    // loop over all right classes + observe (elements is random variable name)
    fadeUp.forEach(elements => {
        observer1.observe(elements);
    });

    // create new observer instance
    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-right");
            } else {
                entry.target.classList.remove('fade-right');		
            }
        })
    });
    // https://staygolddesign.club/2019/06/26/multiple-intersection-observer/
    // loop over all right classes + observe (elements is random variable name)
    fadeRight.forEach(elements => {
        observer2.observe(elements);
    });

    // create new observer instance
    const observer3 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-left");
            } else {
                entry.target.classList.remove('fade-left');		
            }
        })
    });
    // loop over all left classes + observe (elements is random variable name)
    fadeLeft.forEach(elements => {
        observer3.observe(elements);
    });
}

export default animate