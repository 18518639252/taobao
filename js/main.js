var slides = document.querySelectorAll('.slide');
index = 0, //当前图片index
    shang = document.querySelector('.shang'),
    xia = document.querySelector('.xia'),
    ul = document.querySelector('.slider ul'),
    slider = document.querySelector('.slider');
dingshiqi();

function dingshiqi() {
    f = setInterval(function() {
        if (index == slides.length - 1) {
            ul.children[slides.length - 1].style.background = "";

            slides[slides.length - 1].style.opacity = "0";
            slides[0].style.opacity = "1"
            ul.children[0].style.background = "red";

            index = 0;

        } else {
            ul.children[index].style.background = "";

            slides[index].style.opacity = "0"
            index++;

            slides[index].style.opacity = "1";
            ul.children[index].style.background = "red";

        }



    }, 3000)
};

xia.onclick = function() {
    clearInterval(f);
    if (index == slides.length - 1) {
        ul.children[slides.length - 1].style.background = "";

        slides[slides.length - 1].style.opacity = "0";
        slides[0].style.opacity = "1"
        ul.children[0].style.background = "red";


        index = 0;

    } else {
        ul.children[index].style.background = "";

        slides[index].style.opacity = "0"
        index++;

        slides[index].style.opacity = "1";
        ul.children[index].style.background = "red";

        dingshiqi();

    }

}
shang.onclick = function() {
    clearInterval(f);
    if (index == 0) {
        ul.children[0].style.background = "";

        slides[0].style.opacity = "0";
        ul.children[slides.length - 1].style.background = "red";

        slides[slides.length - 1].style.opacity = "1";
        index = slides.length - 1;
    } else {
        ul.children[index].style.background = "";

        slides[index].style.opacity = "0";
        index--;

        slides[index].style.opacity = "1";
        ul.children[index].style.background = "red";



    }
    dingshiqi();

};
for (i = 0; i < slides.length; i++) {
    var li = document.createElement('li')
    ul.appendChild(li);
};
ul.children[0].style.background = "red";
for (i = 0; i < slides.length; i++) {
    ul.children[i].setAttribute('index', i);
    ul.children[i].onclick = function() {
        clearInterval(f);

        for (i = 0; i < slides.length; i++) {
            ul.children[i].style.background = "";
            slides[i].style.opacity = "0";
        }
        this.style.background = "red";
        index = this.getAttribute('index');
        slides[index].style.opacity = "1";
        dingshiqi();

    }
};
xia.style.display = "none";
shang.style.display = "none";
slider.onmouseenter = function() {
    clearInterval(f);
    xia.style.display = "block";
    shang.style.display = "block";

};
slider.onmouseleave = function() {
    dingshiqi();
    shang.style.display = "none";
    xia.style.display = "none";


}
var news = document.querySelector('.news');
window.addEventListener('resize', function() {
    if (window.innerWidth <= 1000) {
        news.style.display = "none";
    } else {
        news.style.display = "block";

    }
})
var aside = document.querySelector('.aside');
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 460) {
        aside.style.position = "fixed";
        aside.style.top = '0';
    } else {
        aside.style.position = "absolute";
        aside.style.top = '460px';


    }
})
window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 600) {
        aside.children[4].style.display = "block";
    } else {
        aside.children[4].style.display = "none";

    }
});
document.querySelector('.guanggao .cha').onclick = function() {
    document.querySelector('.guanggao').style.display = "none";
}
var a = document.querySelectorAll('.minenav a');

var mineitem = document.querySelectorAll('.mineitem');
mineitem[0].style.display = "block";
for (i = 0; i < a.length; i++) {
    a[i].setAttribute('a', i);

    a[i].onmouseover = function() {
        var a = this.getAttribute('a');
        for (i = 0; i < mineitem.length; i++) {
            mineitem[i].style.display = "none";
        }
        mineitem[a].style.display = "block";
    }

}