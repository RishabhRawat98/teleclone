let form = document.getElementById("form");

form.addEventListener("submit", handler)

function handler (e) {
    e.preventDefault();
    const articleData = {
        title: e.target.title.value,
        userName: e.target.author.value,
        article: e.target.article.value,
        //ts: Date.now(),
    };

    const options ={
            method: 'POST',
            body: JSON.stringify(articleData)
    };

    fetch("http://localhost:3000/post", options)
            .then(res => (res).json())
            .then(appendArticle(articleData))
            .catch((error) => {
                console.error('Error:', error)
            })  
}

// function appendArticles(data){
//     data.cats.forEach(appendArticle);
// };

function appendArticle(articleData){
    const article = document.createElement('article');
    article.textContent = `Title: ${articleData.title} && user: ${articleData.user} && article: ${articleData.article} `
    // .append(newLi);
};