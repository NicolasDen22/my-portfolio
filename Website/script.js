gsap.registerPlugin(ScrollTrigger);



gsap.from("#intro-heading", { opacity: 0, y: -50, duration: 1.2, ease: "power3.out" });
gsap.from("#intro p", { opacity: 0, y: 30, duration: 1.2, delay: 0.5, ease: "power3.out" });
gsap.from("#intro-btn", { opacity: 0, scale: 0.5, duration: 1, delay: 1, ease: "elastic.out(1, 0.3)" });

gsap.fromTo('.card' ,{
    opacity:0,
    scale:.1,
},{
    opacity:1,
    scale:1,
    duration:1,
    delay:.5,
    stagger:{
        amount:1
    },
    scrollTrigger:'.card'
})

gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });
});


document.getElementById("intro-btn").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

const navToggle = document.getElementById("nav-toggle");
const mobileMenu = document.getElementById("mobile-menu");

navToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        darkModeToggle.textContent = "🔆";
    } else {
        darkModeToggle.textContent = "🌙";
    }
});

const techStacks = {
    frontend: [
        { name: 'HTML5', img: 'img/html-5.png' },
        { name: 'CSS', img: 'img/css-3.png' },
        { name: 'Bootstrap', img: 'img/bootstrap.png' },
        { name: 'Tailwind CSS', img: 'img/tailwind.png' }
    ],
    backend: [
        { name: 'MySQL', img: 'img/mysql.png' },
        { name: 'PHP', img: 'img/php.png' },
        { name: 'Laravel', img: 'img/laravel.svg' }
    ],
    tools: [
        { name: 'Git', img: 'img/social.png' },
        { name: 'GitHub', img: 'img/github.png' },
        { name: 'VS Code', img: 'img/vs-code.svg' },
        { name: 'Figma', img: 'img/figma.png' }
    ]
};

function openModal(type) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = '';

    techStacks[type].forEach((tech) => {
        const card = document.createElement('div');
        card.className = "neumorphism-btn text-indigo-800 font-semibold p-6 rounded-lg shadow text-center text-lg opacity-0 translate-y-10 flex flex-col items-center space-y-3";

        const img = document.createElement('img');
        img.src = tech.img;
        img.alt = tech.name;
        img.className = "w-12 h-12 object-contain";

        const name = document.createElement('span');
        name.innerText = tech.name;

        card.appendChild(img);
        card.appendChild(name);
        modalContent.appendChild(card);
    });
    modalOverlay.classList.remove('hidden');

    gsap.to("#modal-content div", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
    });
}

function closeModal(event) {
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');

    if (event.target.id === 'modal-overlay') {
        gsap.to("#modal-content div", {
            opacity: 0,
            y: 20,
            duration: 0.3,
            stagger: 0.1,
            onComplete: () => {
                modalOverlay.classList.add('hidden');
                modalContent.innerHTML = '';
            }
        });
    }
}