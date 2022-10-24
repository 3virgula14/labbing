window.addEventListener('load', () => {
    //construction
    let tl = gsap.timeline()
    
    let wrapper = document.querySelector("#logo");
    let all = wrapper.contentDocument.querySelectorAll("svg > *");
    all.forEach(el => {
        el.style.opacity = 0
    })

    let content = wrapper.contentDocument.querySelector("#content");
    content.style.opacity = 0

    let construtora = wrapper.contentDocument.querySelector("#construtora");
    let confidence = wrapper.contentDocument.querySelector("#confidence");

    //landing animations
    tl.to(confidence, {opacity: 1, duration: 0.7}, 0.4)
    tl.to(construtora, {opacity: 1, duration: 0.4}, "<")
    
    tl.to(content, {opacity: 1, duration: 0.7},  "+=0")
})