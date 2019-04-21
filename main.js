//SCROLLLING EVENT LOGIC
function setSections (o,t){
    const sectionOne = document.getElementById('section1');
    const sectionTwo = document.getElementById('section2');
    sectionOne.innerHTML = o;
    sectionTwo.innerHTML= t;
}
setTimeout(() => document.body.style.overflowY = 'scroll', 1000)
function currentSection(){
    const hamburger = document.getElementById('hamburger');
    const sectionName = document.getElementById('sectionName');
    const skills = document.getElementById('skillsSection').offsetTop - 100;
    const projects = document.getElementById('projectsSection').offsetTop - 100;
    const contact = document.getElementById('contactSection').offsetTop - 100;
    if(window.pageYOffset < 200 && document.getElementById('hamburger').classList.contains('displaying-nav')){
        showNav();
    }
    if(window.pageYOffset > skills && window.pageYOffset < projects){
        sectionName.innerHTML = 'Skills'
        hamburger.style.display = 'block';
        document.getElementById('eye').classList.remove('looking-up');

    } else if (window.pageYOffset > projects  && window.pageYOffset < contact) {
        sectionName.innerHTML = 'Projects'
        hamburger.style.display = 'block';
        document.getElementById('eye').classList.remove('looking-up');


    }else if(window.pageYOffset > contact){
        sectionName.innerHTML = 'Contact'
        hamburger.style.display = 'block';
        document.getElementById('eye').classList.add('looking-up');
        
    } else if(window.pageYOffset < skills){
        hamburger.style.display = 'none'
    }
}
window.onload = () => {currentSection()};
window.onscroll = () => {currentSection()};
//Nav LOGIC
 //added 20 for some extra space
const nav = document.getElementById('navBar');
const hamburger = document.getElementById('hamburger');
function navBarAnimation (){
    const wWidth = window.innerWidth + 20;
    if(!hamburger.classList.contains('displaying-nav')){
        nav.style.transition = 'transform 0s'; //changing transform on resize no longer has delay
        setTimeout(() => {nav.style.transition = 'transform .3s'}, 300)
        
    }
}
function showNav(){
    const wWidth = window.innerWidth + 20;
    if(hamburger.classList.contains('displaying-nav')){
        hamburger.classList.remove('displaying-nav');
      
    }else{
        hamburger.classList.add('displaying-nav');
        
    }
}
//PROJECTS LOGIC
const projects = [
    {
        id:1,
        name: 'Timezones Made Simple',
        description: 'Tired of posting different timezones each announcement? <span>Create a link that shows your event in the users time zone in one click!</span>',
        live: 'https://priceless-goldberg-a9cfed.netlify.com/',
        src: 'https://github.com/sam-g99/Time-Zones-Made-Simple',
        technologies: ['HTML/CSS/Javascript','React', 'Moment JS', ],
        img: '/project-images/timezones.png'
    },
    {
        id:2,
        name: 'Quiz Time',
        description: 'With a fun and inviting design you can <span>create and take quizzes</span> I hope you’re up for the challenge.',
        live: 'https://github.com/sam-g99/Time-Zones-Made-Simple',
        src: 'https://github.com/sam-g99/Time-Zones-Made-Simple',
        technologies: ['HTML/CSS/Javascript','Vue', 'Vue CLI', 'MongoDB', 'Express','Mongoose'],
        img: '/project-images/quiztime.gif'
    },
    {
        id: 3,
        name: 'Calorie Calculator',
        description: `Tells you how many calories you’d burn doing walking, running and jumping jacks. Even comes with with a <span>routine generator</span>.`,
        live: 'https://vigorous-archimedes-8dbac2.netlify.com/',
        src: 'https://github.com/sam-g99/Calorie-Burn-Calculator',
        technologies: ['HTML/CSS/Javascript','HTML', 'CSS', 'Javascript'],
        img: '/project-images/calculator.PNG'
    },
    {
        id:4,
        img: '<svg class="octicon octicon-mark-github v-align-middle" height="270" viewBox="0 0 16 16" version="1.1" width="270" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>',
        name: 'More to come!',
    }
 

]
function createTechLi(el, t) {
    document.getElementById(`techUsed${el}`).innerHTML += `<li>${t}</li>`;
}
function createProjectCard({id, name, description, live,src, img}){
    if(name === 'More to come!'){
        return `<div class="project-card github">
            ${img}
            <h3>${name}</h3>
            <a target="_blank" href="https://github.com/sam-g99">
            <div class="project-btn github-btn">View My Github</div>
            </a>
        </div>`
    }
    return `<div class="project-card github">
    <img src ="${img}"/>
        <h3>${name}</h3>
        <ul class="tech-used" id="techUsed${id}">
            
        </ul>
        <p>${description}</p>
        <a target="_blank" href="${live}">
        <div class="project-btn">View Live</div>
        </a>
        <a target="_blank" href="${src}">
        <div class="project-btn">View Source</div>
        </a>
    </div>`
}
let row = 0;
let count = 1;
projects.forEach((p)=>{
    const card = createProjectCard(p);
    if(row === 0 || count % 2){
        count+=1;
        row+=1;
        document.getElementById('projectsColumn').innerHTML += `<div class="row" id="row${row}"> ${card} </div>`
    }else{
        count+=1
        document.getElementById(`row${row}`).innerHTML += card;
    }
    if(p.technologies){
        p.technologies.forEach((t) => {createTechLi(p.id, t)})
    }
})
//ANIMATIONS LOGIC
const animationEndTime = 900;

setTimeout(() => {document.getElementById('home').style.display = 'block'}, animationEndTime)

//DYNAMIC CENTER
function centerAbsolute(){
	    const greetingDiv = document.getElementById('greeting');
    const width = greetingDiv.offsetWidth /2;
    const height = greetingDiv.offsetHeight /2;
    greetingDiv.style.marginLeft = `-${width}px`;
    greetingDiv.style.marginTop = `-${height + 130}px`
}
window.onload = () =>{setTimeout(() => centerAbsolute(), animationEndTime); navBarAnimation()}
window.onresize = () =>{centerAbsolute(); navBarAnimation()}


//Smooth Scrolling
var scrollY = 0;
var distance = 40;
var speed = 24;
function autoScrollTo(el, from) {
    if(from === 'mn' && window.innerWidth <=  600){
        showNav();
    }
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    if(currentY < targetY){
        if(currentY < targetY - 25){
        setTimeout(() => {
            window.scroll(0, currentY + 25)
            autoScrollTo(el);
        }, 5);
    }
}else{
    if(currentY > targetY + 25){
        setTimeout(() => {
            window.scroll(0, currentY - 25)
            autoScrollTo(el);
        }, 5);
    }
}
}
function copyEmail(){
    document.getElementById('copyButton').innerHTML = "Email Copied!";
    document.getElementById('copyButton').style.width = "200px";
    document.getElementById('emailInput').select()
    document.execCommand('copy');
}
