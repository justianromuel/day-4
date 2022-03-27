let blog = [];

function addBlog(event) {
    event.preventDefault();

    let project = document.getElementById("input-project-name").value;
    let description = document.getElementById("input-description").value;
    let reactjs = document.getElementById("reactjs").checked;
    let javascript = document.getElementById("javascript").checked;
    let nodejs = document.getElementById("nodejs").checked;
    let java = document.getElementById("java").checked;
    let image = document.getElementById("input-image").files;
    image = URL.createObjectURL(image[0]);

    // Kondisi Start
    if (reactjs == true) {
        reactjs = document.getElementById("reactjs").value;
    } else {
        reactjs = "";
    }

    if (javascript == true) {
        javascript = document.getElementById("javascript").value;
    } else {
        javascript = "";
    }

    if (nodejs == true) {
        nodejs = document.getElementById("nodejs").value;
    } else {
        nodejs = "";
    }

    if (java == true) {
        java = document.getElementById("java").value;
    } else {
        java = "";
    }
    // Kondisi End


    let blogPost = {
        project: project,
        description: description,
        image: image,
        reactjs: reactjs,
        javascript: javascript,
        nodejs: nodejs,
        java: java,
    };

    blog.push(blogPost);
    console.log(blog);
    renderBlog();
}

function renderBlog() {
    document.getElementById("blog").innerHTML = `
    <div class="card-blog1">
        <img src="assets/PewDiePie.jpg" class="image">
        <div class="card-blog-content">
            <a href="blog-detail.html">
                <h2>Dumbways Mobile App - 2021</h2>
            </a>
            <p style="color: #726C6C; font-size: 14px;">durasi : 3 bulan</p>
            <p>
                App that used for dumbways student, it was deployed and can downloaded on playstore. Happy
                download
            </p>
        </div>
        <div class="icon">
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-node"></i>
            <i class="fa-brands fa-java"></i>
        </div>
        <br>
        <div class="button-blog-card">
            <button class="button-edit">edit</button>
            <button class="button-delete">delete</button>
        </div>
    </div>`;

    for (let i = 0; i < blog.length; i++) {
        document.getElementById("blog").innerHTML += `
        <div class="card-blog1">
            <img src="${blog[i].image}" class="image">
            <div class="card-blog-content">
                <a href="blog-detail.html">
                    <h2>${blog[i].project}</h2>
                </a>
                <p style="color: #726C6C; font-size: 14px;">durasi : 3 bulan</p>
                <p>
                    ${blog[i].description}
                </p>
            </div>
            <div class="icon">
                <i class="${blog[i].reactjs}"></i>
                <i class="${blog[i].javascript}"></i>
                <i class="${blog[i].nodejs}"></i>
                <i class="${blog[i].java}"></i>
            </div>
            <br>
            <div class="button-blog-card">
                <button class="button-edit">edit</button>
                <button class="button-delete">delete</button>
            </div>
        </div>`;
    }
}