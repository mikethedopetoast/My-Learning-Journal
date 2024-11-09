// Assign a click event listener to toggle (more / less) blog posts

const viewMore = document.querySelector(".view-more")
const hiddenBlogs = document.querySelectorAll(".hidden")

viewMore.addEventListener("click", () => {
    hiddenBlogs.forEach((blog) => {
        blog.classList.toggle("hidden")    
    })
    viewMore.textContent === "View More"
    ? viewMore.textContent = "View Less"
    : viewMore.textContent = "View More"
})