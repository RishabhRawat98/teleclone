let form = document.getElementById("form");

form.addEventListener("submit", handler)

function Handler () {
    fetch("http://localhost:3000/post")
            .then(res => (res).json())
            .then(data => console.log(data))
            .catch((error) => {
                console.error('Error:', error)
            })  
}