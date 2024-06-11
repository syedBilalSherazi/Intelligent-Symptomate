// articles.js

// Function to toggle the visibility of article content
function toggleContent(articleId) {
    var articleContent = document.getElementById(articleId + '-content');
    var readMoreBtn = document.getElementById(articleId + '-read-more');

    if (articleContent.style.display === 'none') {
        articleContent.style.display = 'block';
        readMoreBtn.innerText = 'Read Less';
    } else {
        articleContent.style.display = 'none';
        readMoreBtn.innerText = 'Read More';
    }
}

// Attach event listeners to "Read More" buttons
document.addEventListener('DOMContentLoaded', function() {
    var readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var articleId = this.dataset.articleId;
            toggleContent(articleId);
        });
    });
});
