document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-dark');
            });
            document.querySelector('.navbar-brand').classList.remove('text-white');
            document.querySelector('.navbar-brand').classList.add('text-dark');
        } else {
            navbar.classList.remove('navbar-scrolled');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-dark');
            });
            document.querySelector('.navbar-brand').classList.add('text-white');
            document.querySelector('.navbar-brand').classList.remove('text-dark');
        }
    });
       
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Thank you for your response! I will get back to you soon",
                showConfirmButton: false,
                timer: 1500
              });
            contactForm.reset();
        });
    }
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.querySelector('#portfolio').addEventListener('click', function() {
    Swal.fire({
        title: "Welcome to my Portfolio!!",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url( "https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      });
  });  
  document.getElementById("rate").addEventListener("click", function () {
    Swal.fire({
      title: "<strong>How was my website?</strong>",
      icon: "info",
      html: `
        <i>Give me a thumbs up if you liked my website!</i>
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  });
