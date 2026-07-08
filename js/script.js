window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }
});

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".menu-overlay");

menuButton.addEventListener("click", () => {

    menuButton.classList.toggle("active");

    navLinks.classList.toggle("active");

    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    menuButton.classList.remove("active");

    navLinks.classList.remove("active");

    overlay.classList.remove("active");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menuButton.classList.remove("active");

        navLinks.classList.remove("active");

        overlay.classList.remove("active");

    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* REVEAL ON SCROLL */

const reveals = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

function revealElements(){

    reveals.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const visible = 120;

        if(elementTop < windowHeight - visible){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();

if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

}

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});

const contactForm = document.getElementById("contactForm");

if(contactForm){

    const toast = document.getElementById("toast");
    const submitButton = contactForm.querySelector(".send-btn");

    function showToast(message,type){

        toast.textContent = message;

        toast.className = "toast show " + type;

        setTimeout(()=>{

            toast.classList.remove("show");

        },4000);

    }

    contactForm.addEventListener("submit", async function(e){

        e.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Enviando...";

        const formData = new FormData(contactForm);

        try{

            const response = await fetch(contactForm.action,{
                method:"POST",
                body:formData
            });

            const result = await response.json();

            if(result.success){

                showToast("✔ Mensaje enviado. Te responderemos lo antes posible.","success");

                contactForm.reset();

            }else{

                showToast("❌ Ocurrió un error.","error");

            }

        }catch{

            showToast("❌ No se pudo conectar al servidor.","error");

        }

        submitButton.disabled = false;
        submitButton.textContent = "Enviar";

    });

}
