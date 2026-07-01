
// IMPORTING OTHER JS SCRIPTS

import {portfolioDetails} from './Js/portfolio.js';

import {carouselCreation, boldenHighlightModal} from './Js/component.js';

import {heroTemplate, otherProjectsSmall} from './Js/general.js';

//use to filter to only wacom images out
const wacomProject = portfolioDetails.find(item => item.id === 1);

//use to filter OUT to wacom  
const removeWacom = portfolioDetails.filter(item => item.id !== 1);

//CAROUSEL IMPLEMENTATION
document.addEventListener('DOMContentLoaded', ()=> {

    const carousels = document.querySelectorAll("[data-carousel]");

    carouselCreation(carousels[0],wacomProject.artifacts.understandingTheProblem);
    carouselCreation(carousels[1],wacomProject.artifacts.developingSolution);
    carouselCreation(carousels[2],wacomProject.artifacts.designingConcept);
    carouselCreation(carousels[3],wacomProject.artifacts.brandAesthetics);
    carouselCreation(carousels[4],wacomProject.artifacts.finalDesigns);
 
});

//HIGHLIGHT MODAL IMPLEMENTATION + Text Marker
document.addEventListener('DOMContentLoaded', ()=> {

    const textHighlight = document.querySelectorAll("[data-text-highlight]");

    console.log('Total number of highlight Links ' + textHighlight.length + ' IN EFFECT')

    boldenHighlightModal(textHighlight[0], wacomProject.artifacts.research);
    boldenHighlightModal(textHighlight[1], wacomProject.artifacts.persona);
    boldenHighlightModal(textHighlight[2], wacomProject.artifacts.empathyMap);
    boldenHighlightModal(textHighlight[3], wacomProject.artifacts.currentArchitecture);
    boldenHighlightModal(textHighlight[4], wacomProject.artifacts.ProposedArchitecture);

});


//HERO SECTION ADD ON + //Check Out Other Work
document.addEventListener('DOMContentLoaded', () => {

    heroTemplate(wacomProject);
    otherProjectsSmall(removeWacom);
    
})