const header=document.getElementById("header");
const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav-toggle");
const navClose=document.getElementById("nav-close");
const navLinks=document.querySelectorAll(".nav-link");
const themeToggle=document.getElementById("theme-toggle");
function closeMenu(){navMenu.classList.remove("show-menu");}
navToggle?.addEventListener("click",()=>navMenu.classList.add("show-menu"));
navClose?.addEventListener("click",closeMenu);
navLinks.forEach((link)=>link.addEventListener("click",closeMenu));
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",window.scrollY>24));
const sections=document.querySelectorAll("main section[id]");
const sectionObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(!entry.isIntersecting)return;navLinks.forEach((link)=>link.classList.toggle("active-link",link.getAttribute("href")===`#${entry.target.id}`));});},{rootMargin:"-35% 0px -55%"});
sections.forEach((section)=>sectionObserver.observe(section));
const revealObserver=new IntersectionObserver((entries,observer)=>{entries.forEach((entry)=>{if(!entry.isIntersecting)return;entry.target.classList.add("visible");observer.unobserve(entry.target);});},{threshold:.08});
document.querySelectorAll(".reveal").forEach((element)=>revealObserver.observe(element));
if(localStorage.getItem("portfolio-theme")==="dark")document.body.classList.add("dark-theme");
function updateThemeIcon(){const icon=themeToggle?.querySelector("i");if(!icon)return;icon.className=document.body.classList.contains("dark-theme")?"lni lni-sun":"lni lni-night";}
updateThemeIcon();
themeToggle?.addEventListener("click",()=>{document.body.classList.toggle("dark-theme");localStorage.setItem("portfolio-theme",document.body.classList.contains("dark-theme")?"dark":"light");updateThemeIcon();});
document.getElementById("year").textContent=new Date().getFullYear();
