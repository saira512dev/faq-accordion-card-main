const accordionHeaders = document.getElementsByClassName('accordion-header');

for( let i=0;i<= accordionHeaders.length-1; i++) {
    accordionHeaders[i].addEventListener('click',function(){toggleAccordion(i+1)});
}


function toggleAccordion(id){
    let accordion = document.getElementById('accordion'+id);
    accordion.classList.toggle('hide');
    if(accordion.classList.contains('hide')) { removeAllProperties(accordion);}
    else{
        let text = accordion.previousElementSibling.children[0];
        text.classList.add('show');
        accordion.previousElementSibling.children[1].classList.add('rotate180');
    }
    closeAllOtherAccordions(id);
}

function removeAllProperties(accordion){
    let text = accordion.previousElementSibling.children[0];
    text.classList.remove('show');
    accordion.previousElementSibling.children[1].classList.remove('rotate180');
}

function closeAllOtherAccordions(id){

    for( let i=0;i<= accordionHeaders.length-1; i++) {
        if(i+1!==id){
            let accordion = document.getElementById('accordion'+(i+1));
            removeAllProperties(accordion);
            accordion.classList.add('hide');
        }
    }
}

