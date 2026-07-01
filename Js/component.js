
//Carousel

export function carouselCreation(carouselContent, Images) {

    let currentPageIndex = 0; //Local state to the carousel

    //creating the structure of the carousel -> similar concept like template literal
    
        //This creates the buttons
        const nextButton = document.createElement("button");
        nextButton.className ="material-symbols-Rounded"
        nextButton.textContent = "Chevron_Right";

        const previousButton = document.createElement("button");
        previousButton.className ="material-symbols-Rounded"
        previousButton.textContent = "Chevron_Left";

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "buttons-CTA";

        // This creates a div with the class="carousel-page-view"
        const PageViewingScreen = document.createElement("div");
        PageViewingScreen.className = "carousel-page-view";

        // a container for the images, enables transitions.
        const carouselWrapper = document.createElement("div");
        carouselWrapper.className = "carousel-Wrapper"

        //Creating dots to provide a visual identifier for how many images exist.

        const dotTracker = document.createElement("div");
        dotTracker.className = "dot-tracker";

        // A empty array to push the dots based off the Images.length
        const dotArray = [] 

    // based on the Images.length -> create a element div -> call it carousel-dot
    // "ignored" is the value of image in the array -> we do not need but have to pass through so we can utalise the second argument
    // "imageIndex" is the index (optional), therefore the current position -> when clicked, the state = position of the image in the array
        Images.forEach((imageSource,imageIndex) => {

            const dot = document.createElement("div");
            dot.className = "carousel-dot";

            // Each of those dots -> if clicked the state = the image selected (not the image itself, its index position)
            dot.addEventListener("click", () => {

                currentPageIndex = imageIndex;
                
                render();

            });

            // this adds dot -> into dotArray which means based on the 'Images' argument, that decides on the length for the carousel
            dotArray.push(dot);

            // class="carousel-dot" -> is now attached to class="dot-tracker" 'DOM INSERTION
            dotTracker.appendChild(dot);

        });

    //Here we use the argument, as when we intiialise the function, all this will be incorporated into the areas where data-carousel lies
        
        carouselContent.appendChild(PageViewingScreen);
        carouselContent.appendChild(buttonContainer);

        PageViewingScreen.appendChild(carouselWrapper);
        buttonContainer.appendChild(previousButton);
        buttonContainer.appendChild(nextButton);

        carouselContent.appendChild(dotTracker);
        

    // Here this allows us to load all 'Images' from object parameter variable into here dynamically
        Images.forEach(imageSrc => {

            const img = document.createElement("img");
            img.src = imageSrc;
            img.alt = "N/A";
            img.className = "carousel-img";

            carouselWrapper.appendChild(img);           
            
        })

        
    //Inbuilt function -> renders the state
        function render() {

            const offSet = currentPageIndex * 100 ;

            carouselWrapper.style.transform = `translateX(-${offSet}%)`;

            //LOGIC RATIONALE
                //Each slide is 100% width of the container ->  .carousel-img { width: 100% }

                //If currentPageIndex = 0 → first slide → no offset → translateX(0%) → shows first slide

                //If currentPageIndex = 1 → second slide → offset = 100% → translateX(-100%) → moves wrapper left by 1 slide

                //If currentPageIndex = 2 → third slide → offset = 200% → translateX(-200%)

                //carouselWrapper.style.transform = `translateX(-${offSet}%)`;


            dotArray.forEach((dot, dotIndex) => {
                dot.classList.toggle("active-dot", dotIndex === currentPageIndex);
            });
            
        }
        
    //function for how the slides operate based on the index position at the start and end

        function slideNext() {
            currentPageIndex ++

            if(currentPageIndex >= Images.length) {

                currentPageIndex = 0;
                // TRANSLATION: Last image in the array, go back to the start. ENSURES CONTINIOUS LOOP
            }

            render();
        }

        function slidePrevious() {
            currentPageIndex --

            if(currentPageIndex < 0) {

                currentPageIndex = Images.length - 1;
                // TRANSLATION: First image in the array, go to the end on the array. ENSURES CONTINIOUS LOOP
            }

            render();
        }
        

    // Assigns those functions above as an event to be called upon when the buttons are clicked.

        nextButton.addEventListener("click", slideNext);
        previousButton.addEventListener("click", slidePrevious);
    
    // Here if the amount of images is less || equal to 1 -> We hide the buttons and dots
        if(dotArray.length <= 1) {

            buttonContainer.remove();
            dotTracker.remove();           
        }
    //Renders eveything
        render()

};

//Modal

export function boldenHighlightModal(textHighlighted, imagePath) {

    textHighlighted.addEventListener("click", () => {

        const background = document.createElement("div");
        background.className = "background-modal";

        const image = document.createElement("img");
        image.className = "image-modal";
        image.src = imagePath;

        const exit = document.createElement("div");
        exit.className = "modal-exit";

        const exitIcon = document.createElement("div");
        exitIcon.className = "material-symbols-Rounded";
        exitIcon.textContent = "Close";

        document.body.appendChild(background);
        background.appendChild(exit);
        exit.appendChild(exitIcon);
        background.appendChild(image);

        // close modal when clicking background
        exit.addEventListener("click", () => {
            background.remove();
        });

    });
    

}

//Modal text highlight

document.addEventListener('DOMContentLoaded', ()=> {
    
    const textHighlight = document.querySelectorAll("[data-text-highlight]");   

    textHighlight.forEach(text => {

        text.innerHTML += '<span class="material-symbols-Rounded heading-icon no-copy">Left_Click</span>';
    })
        
});

