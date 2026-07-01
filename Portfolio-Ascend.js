
// IMPORTING OTHER JS SCRIPTS

import {portfolioDetails} from './Js/portfolio.js';

import {carouselCreation, boldenHighlightModal} from './Js/component.js';

import {heroTemplate, otherProjectsSmall} from './Js/general.js';

//use to filter to only Ascend out
const ascendProject = portfolioDetails.find(item => item.id === 3);

//use to filter ASCEND APPS to wacom  
const removeAscend = portfolioDetails.filter(item => item.id !== 3);

//CAROUSEL IMPLEMENTATION
document.addEventListener('DOMContentLoaded', ()=> {

    const carousels = document.querySelectorAll("[data-carousel]");

    carouselCreation(carousels[0],ascendProject.artifacts.understandingTheProblem);
    carouselCreation(carousels[1],ascendProject.artifacts.developingSolution);
    carouselCreation(carousels[2],ascendProject.artifacts.designingConcept);
    carouselCreation(carousels[3],ascendProject.artifacts.brandAesthetics);
    carouselCreation(carousels[4],ascendProject.artifacts.finalDesigns);
 
});

//HIGHLIGHT MODAL IMPLEMENTATION + Text Marker
document.addEventListener('DOMContentLoaded', ()=> {

    const textHighlight = document.querySelectorAll("[data-text-highlight]");

    console.log('Total number of highlight Links ' + textHighlight.length + ' IN EFFECT')

    boldenHighlightModal(textHighlight[0], ascendProject.artifacts.compAnalysis);
    boldenHighlightModal(textHighlight[1], ascendProject.artifacts.arch1);
    boldenHighlightModal(textHighlight[2], ascendProject.artifacts.arch2);
    boldenHighlightModal(textHighlight[3], ascendProject.artifacts.empathyMap1);
    boldenHighlightModal(textHighlight[4], ascendProject.artifacts.empathyMap2);
    boldenHighlightModal(textHighlight[5], ascendProject.artifacts.card1);
    boldenHighlightModal(textHighlight[6], ascendProject.artifacts.card2);
    boldenHighlightModal(textHighlight[7], ascendProject.artifacts.flow1);
    boldenHighlightModal(textHighlight[8], ascendProject.artifacts.flow2);
    boldenHighlightModal(textHighlight[9], ascendProject.artifacts.journey1);
    boldenHighlightModal(textHighlight[10], ascendProject.artifacts.journey2);
    boldenHighlightModal(textHighlight[11], ascendProject.artifacts.brand1);
    boldenHighlightModal(textHighlight[12], ascendProject.artifacts.brand2);
    boldenHighlightModal(textHighlight[13], ascendProject.artifacts.brand3);

});


//HERO SECTION ADD ON + //Check Out Other Work
document.addEventListener('DOMContentLoaded', () => {

    heroTemplate(ascendProject);

    otherProjectsSmall(removeAscend);
    
})
