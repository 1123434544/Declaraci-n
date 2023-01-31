const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('UYS, ya sabia jsjs, ESTOY MUY FELI. UWU.  por cierto soy Jorge el niño q esta loco por Ty. YO HIZE ESTE PROGRAMA, ¿Te gusta?   Me encantas, mucho mucho mucho. QUIERO ESTAR CONTIGO. X3000 <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
noBtn.style.setproperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})