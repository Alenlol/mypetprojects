const faqs = document.querySelectorAll(".faq__bottom__box");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});