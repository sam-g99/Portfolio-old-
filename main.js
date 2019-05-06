// Hamburger Logic
const hamburger = document.getElementById("hamburger");
function hamburgerToggle() {
  hamburger.classList.toggle("close");
  if (hamburger.classList.contains("close")) {
    document.getElementById("sectionDisplay").style.visibility = "hidden";
    document.getElementById("navBar").style.height = "200px";
  } else {
    document.getElementById("sectionDisplay").style.visibility = "visible";
    document.getElementById("navBar").style.height = "70px";
  }
}
let currentPosition = window.pageYOffset;

// Navbar section circle logic
function statusCircle(el) {
    if(!document.getElementById(`section${el}`)){
        return;
    }
 
  for (let i = 0; i <= 3; i += 1) {
    if (el !== `section${i}`) {
      document.getElementById(`section${i}`).style.color = "white";
    }
  }
  document.getElementById(`section${el}`).style.color = "#55B7FF"; // Blue
  const currentSection = '';
  const scrollingDirection = (window.pageYOffset > currentPosition) ? 'down' : 'up';
  currentPosition = window.pageYOffset;
  // Centering circle for all section options
  const circle = document.getElementById("circle");
  const width = document.getElementById(`section${el}`).offsetWidth / 2 - circle.offsetWidth;
  const section = document.getElementById(`section${el}`).offsetLeft + width + 7;
  circle.style.transform = `translateX(${section}px)`;
 if(scrollingDirection === 'down'){

    

}
}
//Detects what section the user is on
function currentSection() {
  const hamburger = document.getElementById("hamburger");
  const sectionDisplay = document.getElementById("sectionDisplay");
  const skills = document.getElementById("skillsSection").offsetTop - 100;
  const projects = document.getElementById("projectsSection").offsetTop - 100;
  const contact = document.getElementById("contactSection").offsetTop - 100;
  if(window.pageYOffset > 20){
    document.getElementById('arrow').style.transform = "rotateX(0deg)";
  }else{
    document.getElementById('arrow').style.transform = "rotateX(90deg)";
  }
  if (window.pageYOffset < skills) {
    document.getElementById("navBar").classList.remove("shown");
    if (hamburger.classList.contains("close")) {
      hamburgerToggle();
    }
  }
  if (window.pageYOffset > skills  && window.pageYOffset < projects) {
    document.getElementById("navBar").classList.add("shown");
    statusCircle(1);
    sectionDisplay.innerHTML = "Skills";
  } else if (window.pageYOffset > projects && window.pageYOffset < contact) {
    statusCircle(2);
    sectionDisplay.innerHTML = "Projects";
  } else if (window.pageYOffset > contact) {
    statusCircle(3);
    sectionDisplay.innerHTML = "Contact";
  } else if (window.pageYOffset < skills) {
  }
}
window.onload = () => {
  currentSection(), statusCircle();
};
window.onscroll = () => {
  currentSection(), statusCircle();
};


const nav = document.getElementById("navBar");

//PROJECTS LOGIC
const projects = [
  {
    id: 1,
    name: "Timezones Made Simple",
    description:
      "Tired of posting different timezones each announcement? <span>Create a link that shows your event in the users time zone in one click!</span>",
    live: "https://priceless-goldberg-a9cfed.netlify.com/",
    src: "https://github.com/sam-g99/Time-Zones-Made-Simple",
    technologies: ["HTML/CSS/Javascript", "React", "Moment JS"],
    img: "/project-images/timezones.png"
  },
  {
    id: 2,
    name: "Quiz Time",
    description:
      "With a fun and inviting design you can <span>create and take quizzes</span> I hope you’re up for the challenge.",
    live: "https://serene-sands-41595.herokuapp.com",
    src: "https://github.com/sam-g99/Quiz-Time",
    technologies: [
      "HTML/CSS/Javascript",
      "Vue",
      "Vue CLI",
      "MongoDB",
      "Express",
      "Mongoose"
    ],
    img: "/project-images/quiztime.gif"
  },
  {
    id: 3,
    name: "Calorie Calculator",
    description: `Tells you how many calories you’d burn doing walking, running and jumping jacks. Even comes with with a <span>routine generator</span>.`,
    live: "https://vigorous-archimedes-8dbac2.netlify.com/",
    src: "https://github.com/sam-g99/Calorie-Burn-Calculator",
    technologies: ["HTML/CSS/Javascript", "HTML", "CSS", "Javascript"],
    img: "/project-images/calculator.PNG"
  },
  {
    id: 4,
    img:
      '<svg class="github-icon" class="octicon octicon-mark-github v-align-middle" height="270" viewBox="0 0 16 16" version="1.1" width="270" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>',
    name: "More to come!"
  }
];
// Display what languages were used in that project
function createTechLi(el, t) {
  document.getElementById(`techUsed${el}`).innerHTML += `<li>${t}</li>`;
}
//Project Card
function createProjectCard({ id, name, description, live, src, img }) {
  if (name === "More to come!") {
    return `<div class="project-card github">
            ${img}
            <h3>${name}</h3>
            <a target="_blank" href="https://github.com/sam-g99">
            <div class="project-btn github-btn">View My Github</div>
            </a>
        </div>`;
  }
  return `<div class="project-card">
    <img src ="${img}"/>
        <h3>${name}</h3>
        <ul class="tech-used" id="techUsed${id}">
            
        </ul>
        <p>${description}</p>
        <div class="project-buttons">
        <a target="_blank" href="${live}">
        <div class="project-btn">View Live</div>
        </a>
        <a target="_blank" href="${src}">
        <div class="project-btn">View Source</div>
        </div>
        </a>
    </div>`;
}
let row = 0; // one row
let count = 1; // 2 in each row
projects.forEach(p => {
  const card = createProjectCard(p);
  if (row === 0 || count % 2) {
    count += 1;
    row += 1;
    document.getElementById(
      "projectsColumn"
    ).innerHTML += `<div class="row" id="row${row}"> ${card} </div>`;
  } else {
    count += 1;
    document.getElementById(`row${row}`).innerHTML += card;
  }
  if (p.technologies) {
    p.technologies.forEach(t => {
      createTechLi(p.id, t);
    });
  }
});

//Auto Scrolling
function autoScrollTo(el, from) {
  if (hamburger.classList.contains("close")) {
    hamburger.classList.toggle("close");
    document.getElementById("sectionDisplay").style.visibility = "visible";
    document.getElementById("navBar").style.height = "70px";
  }
  if (from === "mn" && window.innerWidth <= 600) {
    showNav();
  }
  var currentY = window.pageYOffset;
  var targetY = document.getElementById(el).offsetTop - 20;
  if (el === "top") {
    targetY = 0;
  }
  if (currentY < targetY) {
    if (currentY < targetY) {
      setTimeout(() => {
        window.scroll(0, currentY + 15);
        autoScrollTo(el);
      }, 1);
    }
  } else {
    if (currentY > targetY + 15) {
      setTimeout(() => {
        window.scroll(0, currentY - 15);
        autoScrollTo(el);
      }, 1);
    }
  }
}
//Copy Email Button
function copyEmail() {
  document.getElementById("copyButton").innerHTML = "Email Copied!";
  document.getElementById("copyButton").style.width = "200px";
  document.getElementById("emailInput").select();
  document.execCommand("copy");
}
