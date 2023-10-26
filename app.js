const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide all the articles and display the one that has the id
    articles.forEach (function(article){
        article.classList.remove('active');
    })
        const details = document.getElementById(id);
        details.classList.add('active');
    }
});