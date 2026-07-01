
// IMPORTING OTHER JS SCRIPTS

import {portfolioDetails} from './Js/portfolio.js';

import {carouselCreation, boldenHighlightModal} from './Js/component.js';

import {heroTemplate, otherProjectsSmall} from './Js/general.js';

//use to filter to only wacom images 
const stompingGrapes = portfolioDetails.find(item => item.id === 2);

//use to filter STOMPING GRAPES out
const removeGrapes = portfolioDetails.filter(item => item.id !== 2);

//CAROUSEL IMPLEMENTATION
document.addEventListener('DOMContentLoaded', ()=> {

    const carousels = document.querySelectorAll("[data-carousel]");

    carouselCreation(carousels[0],stompingGrapes.artifacts.understandingTheProblem);
    carouselCreation(carousels[1],stompingGrapes.artifacts.developingSolution);
    carouselCreation(carousels[2],stompingGrapes.artifacts.designingConcept);
    carouselCreation(carousels[3],stompingGrapes.artifacts.brandAesthetics);
    carouselCreation(carousels[4],stompingGrapes.artifacts.finalDesigns);
 
});

//HIGHLIGHT MODAL IMPLEMENTATION + Text Marker
document.addEventListener('DOMContentLoaded', ()=> {

    const textHighlight = document.querySelectorAll("[data-text-highlight]");

    console.log('Total number of highlight Links ' + textHighlight.length + ' IN EFFECT')

    boldenHighlightModal(textHighlight[0], stompingGrapes.artifacts.GeneralResearch);
    boldenHighlightModal(textHighlight[1], stompingGrapes.artifacts.WineSnob);
    boldenHighlightModal(textHighlight[2], stompingGrapes.artifacts.CasualEnjoyer);
    boldenHighlightModal(textHighlight[3], stompingGrapes.artifacts.empathyMap);
    boldenHighlightModal(textHighlight[4], stompingGrapes.artifacts.cardsort1);
    boldenHighlightModal(textHighlight[5], stompingGrapes.artifacts.cardsort2);
    boldenHighlightModal(textHighlight[6], stompingGrapes.artifacts.userflow);
    boldenHighlightModal(textHighlight[7], stompingGrapes.artifacts.Ab);
    
});


//HERO SECTION ADD ON + //Check Out Other Work
document.addEventListener('DOMContentLoaded', () => {

    heroTemplate(stompingGrapes);

    otherProjectsSmall(removeGrapes);
    
});