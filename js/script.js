const animitems = document.querySelectorAll('.anim-items');
const buttOns = document.querySelectorAll('._buttOns');
if(animitems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0; index < animitems.length; index++){
            const animitem = animitems[index];
            const animitemHeight = animitem.offsetHeight;
            const animitemOffset = offset(animitem).top;
            const animStart = 4;

            let animitemPoint = window.innerHeight - animitemHeight/animStart;
            if (animitemHeight>window.innerHeight){
                animitemPoint=window.innerHeight - window.innerHeight/animStart;
            };
            if((scrollY > animitemOffset-animitemPoint) && scrollY < (animitemOffset+animitemHeight)){
                animitem.classList.add('_active');
            }else{
                animitem.classList.remove('_active');
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
scrollTop = window.scrollY || document.documentElement.scrollTop;
return{top: rect.top + scrollTop, left: rect.left + scrollLeft}    }
animOnScroll();
}

