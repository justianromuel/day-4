let blogs = [];
let choice = [];

function choices(value) {
    console.log(value);
}

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("input-project-name").value;
    let description = document.getElementById("input-description").value;
    let image = document.getElementById("input-image").files;
    image = URL.createObjectURL(image[0]);

    let blogPost = {
        project: project,
        description: description,
        image: image,
    };

    blogs.push(blogPost);
    renderBlog();
}

function renderBlog() {
    document.getElementById("blogs").innerHTML = "";

    for (let i in blogs) {
        document.getElementById("blogs").innerHTML += `
    <div class="card-blog1">
        <img src="${blogs[i].image}" class="image" alt=""> 
        <a href="blog-detail.html">
            <h3>${blogs[i].project}</h3>
        </a>
        <p>
        ${blogs[i].description}
        </p>
    </div>`;
    }
}