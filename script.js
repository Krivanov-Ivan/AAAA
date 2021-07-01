function Applab() {
    let link = document.querySelectorAll('.menu-item');
    let underline = document.querySelectorAll('.underline');
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.menu-container');
    let c = 0;
    let line1 = document.querySelector('.line1');
    let line2 = document.querySelector('.line2');
    let FeaturePhone = document.querySelector('#feature-phone');
    let JackpotTitle = document.querySelectorAll('.title')[1];
    let JackpotDescr = document.querySelectorAll('.paragraph')[1];
    let tiles = document.querySelectorAll('.seen-part');
    let t = document.querySelectorAll('.tile');
    let tileP = document.querySelectorAll('.tile>p');
    let arrow = document.querySelectorAll('.seen-part>img');
    let IntegrationT = document.querySelector('.integration-desc>h2');
    let IntegrationP = document.querySelector('.integration-desc>p');
    let h = t[0].clientHeight;
    let time = document.querySelectorAll('.card-toggler>p');
    let price = document.querySelectorAll('.price>span');
    let leftArr = document.querySelector('.left-arrow');
    let rightArr = document.querySelector('.right-arrow');
    let leftArrS = document.querySelector('.left-arrow>svg');
    let rightArrS = document.querySelector('.right-arrow>svg');
    let reviews = document.querySelectorAll('.review');
    let slidec = 1;
    let quesCont = document.querySelectorAll('.question-content');
    let pluses = document.querySelectorAll('.question-content>img');
    let answer = document.querySelectorAll('.question-answer');
    let question = document.querySelectorAll('.question');
    let wrapper = document.querySelectorAll('.wrapper');

    t[0].style.height = `${h}px`;
    wrapper[0].style.padding = '50px 0';
    quesCont[0].style.margin = '0 0 30px 0';
    pluses[0].style.transform = 'rotate(45deg)';

    if (window.innerWidth >= 718) {
        JackpotTitle.innerHTML = 'Smart jackpots that<br>you may love this<br>anytime & anywhere';
        JackpotDescr.innerHTML = "The rise of mobile devices transforms the way we<br>consume information entirely and the world's most<br>elevant channels such as Facebook";
    }
    else if (window.innerWidth >= 620){
        JackpotTitle.innerHTML = 'Smart jackpots<br>that you may love<br>this anytime &<br>anywhere';
        JackpotDescr.innerHTML = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook";
    }
    else if (window.innerWidth >= 500){
        JackpotTitle.innerHTML = 'Smart<br>jackpots that<br>you may love<br>this anytime &<br>anywhere';
    }
    else if (window.innerWidth > 460){
        JackpotTitle.innerHTML = 'Smart<br>jackpots that<br>you may love<br>this anytime<br>& anywhere';
    }
    else {
        JackpotTitle.innerHTML = 'Smart jackpots';
    }

    if (window.innerWidth < 700) {
        IntegrationP.innerHTML = "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."
        IntegrationT.innerHTML = "Designed & built by the latest code integration"
    }
    burger.addEventListener('click', () => {
        if (c % 2 === 0) {
        menu.style.transform = 'translateX(0)';
        line1.style.transform = 'rotateZ(45deg)';
        line2.style.transform = 'rotateZ(-45deg)';
        line1.style.margin = '0 0 -3px 0';
        } else {
            menu.style.transform = 'translateX(100%)';
            line1.style.transform = 'rotateZ(0)';
            line2.style.transform = 'rotateZ(0)';
            line1.style.margin = '0 0 5px 0';
        }
        c += 1
    })

    link.forEach((element, i) => {
        element.addEventListener('mouseenter', () => {
            underline[i].style.animation = '';
            underline[i].style.animation = 'under 0.2s ease';
            underline[i].style.width = '100%';
        });
        element.addEventListener('mouseleave', () => {
            underline[i].style.animation = '';
            underline[i].style.width = '0%';
        });
    });

    document.addEventListener('scroll', () => {
        if (window.scrollY >= 500 & window.scrollY <= 1900) {
            FeaturePhone.style.animation = 'trans 1s ease-out';
            FeaturePhone.style.opacity = '1';
        };
    });

    tiles.forEach((tile, i) => {

        tile.addEventListener('click', () => {
            if (tileP[i].innerHTML === '') {
                tileP[i].innerHTML = 'Get your blood tests delivered at home collect a sample from the news your blood tests.';
                tileP[i].style.animation = 'op 1s ease'
                t[i].style.height = `${h}px`;
                arrow[i].style.transform = 'rotate(0.5turn)';
            }
            else {
                tileP[i].innerHTML = '';
                tileP[i].style.animation = '';
                t[i].style.height = '70px';
                arrow[i].style.transform = 'rotateZ(0deg)';
            }
        });
    });

    time.forEach((p, i) => {
        p.addEventListener('click', ()=>{
            p.className = 'toggled';
            time[1-i].className = '';

            if (i===0) {price[0].innerHTML = '$0'; price[1].innerHTML = '$99'}
            else {price[0].innerHTML = '$300'; price[1].innerHTML = '$999'}
        });
    });
/*
    leftArr.addEventListener('click', ()=>{
        slidec -= 1;
        rightArrS.style.fill = '#2500f9';
        rightArr.className = 'right-arrow active-arrow';
        if (slidec<=0) {
            leftArrS.style.fill = '#e7e7e7';
            leftArr.className = 'left-arrow';
            slidec = 0;
        }
        else {
            leftArr.style.fill = '#2500f9';
            leftArr.className = 'left-arrow active-arrow';
        }
        reviews.forEach(review => {
            review.style.transform = `translateX(-${slidec*100}%)`
        });
    });
    rightArr.addEventListener('click', ()=>{
        slidec += 1
        leftArrS.style.fill = '#2500f9';
        leftArr.className = 'left-arrow active-arrow';
        if (slidec>=2) {
            rightArrS.style.fill = '#e7e7e7';
            rightArr.className = 'right-arrow';
            slidec = 2;
        }
        else {
            rightArr.style.fill = '#2500f9';
            rightArr.className = 'right-arrow active-arrow';
        }
        reviews.forEach(review => {
            review.style.transform = `translateX(-${slidec*100}%)`
        });
    });*/

    pluses.forEach((plus, i) => {
        plus.addEventListener('click', ()=>{
            if (answer[i].innerHTML === '') {
                plus.style.transform = 'rotateZ(45deg)'
                quesCont[i].style.margin = '0 0 30px 0';
                answer[i].innerHTML = 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.'
                wrapper[i].style.padding = '50px 0';
            }
            else {
                answer[i].innerHTML = '';
                plus.style.transform = 'rotateZ(0deg)'
                quesCont[i].style.margin = '0 0 0px 0';
                wrapper[i].style.margin = '0 auto';
                wrapper[i].style.padding = '10px 0';
            }
        });
    });
}

window.addEventListener('load', ()=>{
    Applab()
})