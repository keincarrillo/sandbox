

function toggleMenu() {
    const navButtons = document.querySelectorAll(".btn-nav");
    const navMenu = document.querySelector("nav ul");
    
    navButtons.forEach((element) =>{
        element.addEventListener("click", function(){
            navMenu.classList.toggle("active");
        });
    });
}

toggleMenu();

async function getServices() {
    const response = await fetch ("http://localhost:3000/services");
    const services = await response.json();

    services.forEach(function (service) {
        createServiceItem(
            service.image, 
            service.title, 
            service.description, 
            'Learn More',
            service.link
        );
    });
}


async function getTestimonials() {
    const response = await fetch ("http://localhost:3000/testimonials");
    const testimonials = await response.json();

    testimonials.forEach(function (testimonial) {
        createTestimonialItem(
            testimonial.author,
            testimonial.image,
            testimonial.area,
            testimonial.testimonial
        );
    });
}

async function getFaqs() {
    const response = await fetch ("http://localhost:3000/faqs");
    const faqs = await response.json();

    faqs.forEach(function (faq) {
        createFaqItem(
            faq.question,
            faq.answer
        );
    });
}

async function getProjects() {
    const response = await fetch ("http://localhost:3000/projects");
    const projects = await response.json();

    projects.forEach(function (project) {
        createProjectItem(
            project.img,
            project.title,
            project.category
        );
    });
}


getServices();
getTestimonials();
getFaqs();
getProjects();

function createProjectItem(img, title, category) {
    const projectList = document.querySelector(".projects__container");
    const projectItemContainer = document.createElement("div");
    projectItemContainer.classList.add("projects__project");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", img);

    const projectInfoContainer = document.createElement("div");
    projectInfoContainer.classList.add("projects__project__info");
    const projectTitle = document.createElement("h3");
    projectTitle.textContent = title;
    const projectCategory = document.createElement("p");
    projectCategory.textContent = category;

    projectItemContainer.append(imageElement, projectInfoContainer);
    projectInfoContainer.append(projectTitle, projectCategory);
    projectList.append(projectItemContainer);

}

function createFaqItem(question, answer) {
    const faqsList = document.querySelector(".faqs__list");
    const faqItemContainer = document.createElement("div");
    faqItemContainer.classList.add("faqs__list__item");

    const faqContainer = document.createElement("details");
    const faqQuestion = document.createElement("summary");
    faqQuestion.textContent = question;
    const faqAnswer = document.createElement("p");
    faqAnswer.textContent = answer;

    faqContainer.append(faqQuestion, faqAnswer);
    faqItemContainer.append(faqContainer);
    faqsList.append(faqItemContainer);
}

function createServiceItem(imageURL, title, description, linkText, linkHref) {
    const servicesList = document.querySelector(".services__list");
    const serviceItemContainer = document.createElement("div");
    serviceItemContainer.classList.add("services__list__item");
    

    const imageElement = document.createElement("img");
    imageElement.setAttribute('src', imageURL);
    serviceItemContainer.append(imageElement);

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    serviceItemContainer.append(titleElement);

    const paragraph = document.createElement('p');
    paragraph.textContent = description;
    serviceItemContainer.append(paragraph);

    const link = document.createElement('a');
    link.textContent = linkText;
    link.setAttribute('href', linkHref);
    serviceItemContainer.append(link);

    servicesList.append(serviceItemContainer);
}

function createTestimonialItem(author, image, area, testimonial) {
    const testimonialsList = document.querySelector(".testimonials__list");
    const testimonialsItemContainer = document.createElement("div");
    testimonialsItemContainer.classList.add("testimonials__list__item");
    
    const paragraph = document.createElement("p");
    paragraph.textContent = testimonial;

    const testimonialAuthorContainer = document.createElement("div");
    testimonialAuthorContainer.classList.add("testimonials__list__author");

    const testimonialImageContainer = document.createElement("div");
    testimonialImageContainer.classList.add("testimonials__list__image");

    const imageElement = document.createElement("img");
    imageElement.setAttribute('src', image);
    testimonialAuthorContainer.append(imageElement);

    const testimonialBioContainer = document.createElement("div");
    testimonialBioContainer.classList.add("testimonials__list__bio");
    
    const authorElement = document.createElement('h3');
    authorElement.textContent = author;
    testimonialBioContainer.append(authorElement);

    const areaElement = document.createElement('p');
    areaElement.textContent = area;
    testimonialBioContainer.append(areaElement);

    testimonialsItemContainer.append(paragraph, testimonialAuthorContainer);
    testimonialsList.append(testimonialsItemContainer);
}