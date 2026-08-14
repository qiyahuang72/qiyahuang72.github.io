particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 70,
        "density": {
          "enable": true,
          "value_area": 500
        }
      },
      "color": {
        "value": "#474D5A"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.9,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#3C8BFD",
        "opacity": 0.7,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 800,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 800,
          "size": 80,
          "duration": 2,
          "opacity": 0.5,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

let scrollPos = 0;
const nav = document.getElementById('navbar');
const NAVBAR_THRESHOLD = 100; // Pixels after viewport height to show navbar
let windowHeight = window.innerHeight;

function updateNavbarVisibility() {
  const shouldShowNavbar = window.scrollY > (windowHeight + NAVBAR_THRESHOLD);
  nav.classList.toggle('visible', shouldShowNavbar);
}

// Efficient debounce implementation
function debounce(func, wait = 10) {
  let timeout;
  return function executedFunction() {
    const later = () => {
      clearTimeout(timeout);
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

window.addEventListener('scroll', debounce(updateNavbarVisibility));
window.addEventListener('resize', () => {
  windowHeight = window.innerHeight;
  updateNavbarVisibility();
});

// Initial check
updateNavbarVisibility();

document.addEventListener('DOMContentLoaded', () => {
  const projectBody = document.getElementById('project-body');
  const filterButtonsContainer = document.getElementById('filter-buttons');
  // `categories` is defined globally in projects-data.js

  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.className = category === "All" ? 'btn bttn btn-light mx-1 mb-3' : 'btn bttn btn-light mx-1 mb-3';
    button.dataset.filter = category;
    filterButtonsContainer.appendChild(button);

    if (category == "All") {
      button.classList.add('btn-active');
    }

    button.addEventListener('click', () => {
      document.querySelectorAll('.btn-active').forEach(btn => btn.classList.remove('btn-active'));
      button.classList.add('btn-active');
      filterProjects(category);
    });
  });




  // `badgeColors` and `projects` are defined globally in projects-data.js

  // Display all projects initially
  displayProjects(projects);

  function displayProjects(projects) {
    const projectBody = document.getElementById('project-body');
    projectBody.innerHTML = ''; // Clear existing projects
    
    projects.forEach((project) => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 mb-3';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card project-row-card'; // Start without visible class

        const rowContent = document.createElement('div');
        rowContent.className = 'project-row-content';

        const mediaWrapper = document.createElement('div');
        mediaWrapper.className = 'project-row-media';

        // Handle both images and videos
        if (project.imgSrc.endsWith('.mp4')) {
            const video = document.createElement('video');
            video.src = project.imgSrc;
            video.className = 'project-media project-media--video';
            video.alt = project.title;
            video.loop = true;
            video.muted = true;
            video.autoplay = true;
            video.playsInline = true;
            mediaWrapper.appendChild(video);
        } else {
            const img = document.createElement('img');
            img.src = project.imgSrc;
            img.className = 'project-media project-media--image';
            img.alt = project.title;
            img.loading = 'lazy'; // Lazy loading for performance
            mediaWrapper.appendChild(img);
        }

        const cardBodyDiv = document.createElement('div');
        cardBodyDiv.className = 'project-row-main';

        const h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.textContent = project.title;

        const p = document.createElement('p');
        p.className = 'card-text project-row-text';
        p.textContent = project.text;

        cardBodyDiv.appendChild(h5);
        cardBodyDiv.appendChild(p);

        if (project.note) {
            const note = document.createElement('p');
            note.className = 'project-row-note';
            note.textContent = project.note;
            cardBodyDiv.appendChild(note);
        }

        const cardFooter = document.createElement('div');
        cardFooter.className = 'project-row-footer';

        const badgeContainer = document.createElement('div');
        badgeContainer.className = 'project-row-badges';

        project.badges.forEach(badge => {
            const span = document.createElement('span');
            span.className = 'badge rounded-pill px-3 py-2';
            span.style.backgroundColor = badgeColors[badge];
            span.style.color = '#fff';
            span.textContent = badge;
            span.style.marginRight = '5px';
            span.style.marginBottom = '5px';
            badgeContainer.appendChild(span);
        });

        const a = document.createElement('a');
        a.style.color = 'inherit';
        a.style.textDecoration = 'inherit';
        a.target = '_blank';
        if (!project.buttonDisabled) {
            a.href = project.buttonLink;
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-dark project-row-btn';
        button.textContent = project.buttonText;
        if (project.buttonDisabled) {
            button.disabled = true;
            button.style.pointerEvents = 'none';
            button.style.opacity = '0.6';
            button.setAttribute('aria-disabled', true);
        }

        a.appendChild(button);
        cardFooter.appendChild(badgeContainer);
        cardFooter.appendChild(a);
        cardBodyDiv.appendChild(cardFooter);
        rowContent.appendChild(mediaWrapper);
        rowContent.appendChild(cardBodyDiv);
        cardDiv.appendChild(rowContent);
        colDiv.appendChild(cardDiv);
        projectBody.appendChild(colDiv);
    });

    // Set up intersection observer with stagger effect
    const cards = document.querySelectorAll('.project-row-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }, index * 50); // Stagger the animation
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    cards.forEach(card => {
        // Reset card state
        card.classList.remove('visible');
        observer.observe(card);
    });
}


  function filterProjects(filter) {
    const projectBody = document.getElementById('project-body');
    
    // Add filtering class for opacity transition
    projectBody.classList.add('filtering');
    
    setTimeout(() => {
        let filteredProjects;
        if (filter === "All") {
            filteredProjects = projects;
        } else {
            filteredProjects = projects.filter(project =>
                project.categories.includes(filter)
            );
        }
        
        displayProjects(filteredProjects);
        
        // Remove filtering class after a short delay
        setTimeout(() => {
            projectBody.classList.remove('filtering');
        }, 50);
    }, 300);
}

});
