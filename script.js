document.addEventListener("DOMContentLoaded", () => {
    // Search Bar Functionality
    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("keyup", (e) => {
        let value = e.target.value.toLowerCase();
        let products = document.querySelectorAll(".product");
        products.forEach((product) => {
            let name = product.querySelector("h3").innerText.toLowerCase();
            if (name.includes(value)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });

    // FAQ Accordion
    const faqs = document.querySelectorAll("details");
    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faqs.forEach((item) => {
                if (item !== faq) {
                    item.removeAttribute("open");
                }
            });
        });
    });

    // Scrolling Elements Auto Scroll
    const scrollContainer = document.querySelector(".scrolling-container");
    if (scrollContainer) {
        let scrollAmount = 0;
        const scrollMax = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        setInterval(() => {
            scrollAmount += 50;
            if (scrollAmount >= scrollMax) {
                scrollAmount = 0;
            }
            scrollContainer.scrollTo({
                left: scrollAmount,
                behavior: "smooth"
            });
        }, 2000);
    }
});

// Testimonial Slider
const slider = document.getElementById('testimonial-slider');
let index = 0;
const moveSlider = (direction) => {
    const items = slider.children.length;
    index = (index + direction + items) % items;
    slider.style.transform = `translateX(-${index * 100}%)`;
};
document.getElementById('prev').addEventListener('click', () => moveSlider(-1));
document.getElementById('next').addEventListener('click', () => moveSlider(1));