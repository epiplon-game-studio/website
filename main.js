const maxScroll = 20
document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content")
    document.addEventListener('scroll', e => {
      content.style.opacity = window.scrollY / 200
    });
})