let showBtn = document.querySelector('.show-btn');
let closeModal = document.querySelector('.modal-bg');
let freeCard = document.querySelector('.free-card');
let closeBtn = document.querySelector('.close-btn');
let formBlockBtn = document.querySelector('.form-block__btn');
let closeSuccessBtn = document.querySelector('.close-success-btn');
let openMap = document.querySelector('.adress__link')

function paralax (e){
    this.querySelectorAll('.clouds').forEach(clouds =>{
        clouds.style.transform = `translateX(${e.clientX/20}px)`;
    })
}

function show (state){
    document.querySelector('.modal').style.display = state;
    document.querySelector('.modal-bg').style.display = state;
}

openMap.addEventListener('mouseover', function(){
    document.querySelector('.adress__map').style.display = 'block';
})
openMap.addEventListener('mouseout', function(){
    document.querySelector('.adress__map').style.display = 'none';
})

closeSuccessBtn.addEventListener('click', function(){
    closeModal.style.display = 'none';
    document.querySelector('.modal-success').style.display = 'none';
    
})

formBlockBtn.addEventListener('click', function(){
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.modal-success').style.display = 'block';
    
})
showBtn.addEventListener('click', () => show ('block'));
freeCard.addEventListener('click', () => show ('block'));
closeBtn.addEventListener('click', () => show ('none'));
closeModal.addEventListener('click', () => show ('none'));

document.addEventListener('mousemove', paralax);