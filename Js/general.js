
import {portfolioDetails} from './portfolio.js';

//Navbar

document.addEventListener('DOMContentLoaded', ()=> {

    const navbar = document.querySelector("#navbar-id");

    navbar.innerHTML +=
    `
        <ul class="navbar">

            <li class="brand"> <a href="index.html"> Alessandro Metaxas</a> </li>

            <div class="nav-container-parent">
                
            
            <!--
                <div class="nav-container-child">

                    <li> <a href=""> Portfolio</a> </li>
                    <li> <a href=""> About Me</a> </li>
                    <li> <a href=""> Professional Experience </a> </li>
                </div>
                   
            -->
                

                <li><div class="cv-button"></div> </li>
            </div>

        </ul>
    `

});

//Footer 

document.addEventListener("DOMContentLoaded", () => {

    const footer = document.getElementById("footer");
    const date = new Date();

    footer.innerHTML = 'Copyright AOM Design' + ' ' + date.getFullYear();

})

//Role Animation

document.addEventListener('DOMContentLoaded', () => {

    const roleDom = document.getElementById('role-description');

    if(roleDom) {

        const roleWrapper = document.createElement("div");
        roleWrapper.className = 'role-wrapper';

        const role1 = document.createElement("p");
        role1.className = 'role-name';
        role1.textContent = 'Product Designer';

        const role2 = document.createElement("p");
        role2.className = 'role-name';
        role2.textContent = 'UX Designer';

        const role3 = document.createElement("p");
        role3.className = 'role-name';
        role3.textContent = 'UI Designer';

        const role4 = document.createElement("p");
        role4.className = 'role-name';
        role4.textContent = 'Product Designer';


        roleDom.appendChild(roleWrapper);

        roleWrapper.appendChild(role1);
        roleWrapper.appendChild(role2);
        roleWrapper.appendChild(role3);
        roleWrapper.appendChild(role4);

        console.log(document.querySelectorAll(".role-name").length + " number of roles specified");


    } 
    else {
        return
    }

    
    


})

// Homepage -> Portfolio catalogue LARGE

document.addEventListener('DOMContentLoaded', () => {

    const content = document.querySelector(".product-portfolio");


    // The If statement stops an error from occuring when 'content' doesn't exist on the portfolio pages (as its only applicable to the home page)

    if(content) {

        portfolioDetails.forEach(productInfo => {

            content.innerHTML +=
                `   
                    <div class="portfolio-hero-container" onclick="window.open('${productInfo.link}', '_blank');">
                        <img class="portfolio-hero-image" src="${productInfo.thumbnailImage}">

                        <div class="portfolio-hero-heading"> 
                            <p>${productInfo.name}</p> 
                            
                        </div>
                    </div>
                `
            ;
        });

    } 
    else {

        return
    }

});

// Other work section SMALL

export function otherProjectsSmall(filteredElements) {

    const otherPortfolio = document.querySelector(".other-portfolio");

    otherPortfolio.innerHTML +=

    `
        <div class="heading-div">
            
            <h1> <span class="material-symbols-Rounded heading-icon no-copy">Work</span> Check Out my other work</h1>
            <p>View my other projects here</p>
            <div class="border-line"></div>
        </div>

        <div class="portfolio-other-work"> </div>
    
    `
    const content = document.querySelector(".portfolio-other-work");

    filteredElements.forEach(productInfo => {

        content.innerHTML +=
            `   
                <div class="portfolio-hero-container-small" onclick="window.open('${productInfo.link}', '_blank');">
                    <img class="portfolio-hero-image" src="${productInfo.thumbnailImage}">

                    <div class="portfolio-hero-heading"> 
                        <p>${productInfo.name}</p>                  
                    </div>
                </div>
            `
        ;
    });
}

// Portfolio Page -> Hero Template Format

export function heroTemplate(portfolioDetailsPlaceholder) {


    const heroPortfolio = document.querySelector(".hero-portfolio")


    heroPortfolio.innerHTML =
            `
                <section class="vertical-align " name="Hero-thumbnail">

                    <div class="thumbnail-Hero">
                        <img src="${portfolioDetailsPlaceholder.heroImage}" alt="">
                    </div>

                    <div class="pf-page-heading">
                        
                        <h1 ><span class="material-symbols-Rounded heading-icon no-copy">${portfolioDetailsPlaceholder.heroIcon}</span> ${portfolioDetailsPlaceholder.name} </h1>
                        <p>${portfolioDetailsPlaceholder.description}</p>
                        <div class="tags-containment grid-align">
                                
                            <div class="tag"> <span class="material-symbols-Rounded">${portfolioDetailsPlaceholder.tags.typeIcon}</span>${portfolioDetailsPlaceholder.tags.type}</div>
                            <div class="tag"> <span class="material-symbols-Rounded">${portfolioDetailsPlaceholder.tags.participantIcon}</span>${portfolioDetailsPlaceholder.tags.participant}</div>

                        </div>
                    </div>

                </section>
           `
        ;
};

// Adding class to modal text

document.addEventListener('DOMContentLoaded', () => {

    const highlightedTextModal = document.querySelectorAll("[data-text-highlight]");

    console.log('Total of ' + highlightedTextModal.length + ' bolden-highlight no-copy' + ' CLASS NAMES applied in this file')

    Array.from(highlightedTextModal).forEach(text => {

        text.className = "bolden-highlight no-copy";
    })
});

//Download C.V button

document.addEventListener('DOMContentLoaded', () => {

    const CVwrapper = document.querySelectorAll(".cv-button");

    console.log("There is a total of " +document.querySelectorAll(".cv-button").length + " cv buttons on this page");

    CVwrapper.forEach(button => {

        const CVbutton = document.createElement("button");
        CVbutton.className = "download-cv-button";
        CVbutton.textContent = "Download CV";

        button.appendChild(CVbutton);

        button.addEventListener("click", () => {

            const CVlink = document.createElement("a");
            CVlink.href = "Resources/Files/Alessandro Metaxas CV.pdf";
            CVlink.download = "Alessandro Metaxas CV.pdf";
            CVlink.click();

            
        });

    });

    
});

//Ensure buttons open a new tab

document.addEventListener('DOMContentLoaded', () => {

    const allLinkedButtons = document.querySelectorAll(".new-tab-button");


    allLinkedButtons.forEach(buttonLinks => {


        buttonLinks.addEventListener("click", () => {

            const url = buttonLinks.dataset.url; //THIS i believes access the url to then confirm if there is a url (IF) -> open

            if(url) {
                window.open(url, "_blank", "noopener,noreferrer");
            }
            
        });

    })

});

// Favicon

document.addEventListener('DOMContentLoaded', ()=> {

    const head = document.querySelector("head");

    const favicon = document.createElement("link");

    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "/Resources/Branding/logo-light-transparent.png";
   
    head.appendChild(favicon);

});
