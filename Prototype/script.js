let btn = document.querySelector('.form-block__btn');
let inp = document.querySelector('.form-block__inp');
let sucsessBlock = document.querySelector('.sucsess');
let btnClose = document.querySelector('.btn-close');

btn.addEventListener('click', function(e){
    e.preventDefault();
    if(inp.value != ''){
        sucsessBlock.style.display = 'block'
    }
})

btnClose.addEventListener('click', function(){
    sucsessBlock.style.display = ''
})

