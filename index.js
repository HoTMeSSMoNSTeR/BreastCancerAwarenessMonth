const slides = document.getElementsByClassName("carousel-image")
let slidePosition = 0
const totalSlides = slides.length
const siteMusic = document.getElementById("youtube")

// music and buttons

function playMusic() {
    siteMusic.play()
}

window.onload = function () {
    playMusic()
}

document.getElementById("play").addEventListener('click', function () {
    siteMusic.play()
})
document.getElementById("pause").addEventListener('click', function () {
    siteMusic.pause()
})

document.getElementById("previous-btn").addEventListener('click', function () {
    moveToPrevPic()
})
document.getElementById("next-btn").addEventListener('click', function () {
    moveToNextPic()
})

// picture carousel

function autoScroll() {
    setInterval(moveToNextPic, 2000);
}
autoScroll()

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('pic-visible');
        slide.classList.add('pic-invisible');
    }
}

function moveToNextPic() {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("pic-visible")
}

function moveToPrevPic() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("pic-visible")
}

// BC facts
const factsOne = [
    'This year 43,500 women and 530 men will die from breast cancer in the U.S.',
    'Only about 4% of breast cancers occur in women under 40.',
    'Every 2 minutes a woman in the US is diagnosed with breast cancer.',
    'Breast cancer is the leading cause of cancer death in women 20-39.'
]

const renderFactsOne = factsOne.map(function (fact) {
    const number = factsOne.indexOf(fact) + 1
    return `<div class="box-style box${number} facts">${fact}</div>`
}).join('')

document.getElementById("first-subsection").innerHTML = renderFactsOne


// resources bC

const resources = {
    bccsi: {
        name: 'Breast Cancer Can Stick It!',
        imageAlt: "The logo for the 'Breast Cancer Can Sick It'",
        mission: 'To drum up funds for treatment, research, trials, and mammograms through music-centric events that ROCK, to ultimately STICK IT to breast cancer.',
        link: 'https://www.breastcancercanstickit.org/',
        logo: 'images/stick-it.jpg',
        fundraiser: 'https://tiltify.com/@hotmessmonster87/baddasscancerslayer-is-kicking-cancer',
        linkText: 'badasscancerslayer is kicking cancer!!! fundraiser'
    },
    nbcf: {
        name: 'National Breast Cancer Foundation, Inc.',
        imageAlt: "The logo for the 'National Breast Cancer Foundation'",
        mission: 'NBCF was founded to fill in the gaps of cancer care, ensuring every woman has the access and information she needs to get through every step of her breast cancer journey.',
        link: 'https://www.nationalbreastcancer.org/',
        logo: 'images/nbcf.png',
        fundraiser: 'https://tiltify.com/@hotmessmonster87/badasscancerslayer-is-kicking-the-cancer',
        linkText: "Screening isn't Scary 2022"
    },
    bcrf: {
        name: 'Breast Cancer Research Foundation',
        imageAlt: "The logo for the 'Breast Cancer Research Foundation'",
        mission: "Our mission is to prevent and cure breast cancer by advancing the world's most promising research.",
        link: 'https://www.bcrf.org/',
        logo: 'images/bcrf.jpg',
        fundraiser: 'https://tiltify.com/@hotmessmonster87/badasscancerslayer-kicking-the-cancer',
        linkText: 'Paint Gaming Pink!!',
    },
    sgk: {
        name: 'Susan G. Komen',
        imageAlt: "The logo for the 'Susan G. Fomen' foundation",
        mission: 'Our mission is to save lives by meeting the most critical needs in our communities and investing in breakthrough research to prevent and cure breast cancer.',
        link: 'https://www.komen.org/',
        logo: 'images/sgklogo.png',
        fundraiser: 'https://www.facebook.com/donate/1213111052592746?mcp_token=eyJwaWQiOjE0MDg0NjI1MTU2LCJzaWQiOjU2ODE4MzAxNjg1Mjk2NTEsImF4IjoiNjc2MTgzMmU1NjFlY2Q4NmI1N2IyZTY5OWRmMjA3OGEiLCJ0cyI6MTY2NDYxNjcyOCwiZXhwIjoxNjY3MDM1OTI4fQ.kNZA7LM0Vytmce1j7KIQn_-JXdczkuj8cEHeY9EBpk0',
        linkText: '60 Minutes a Day, Gaming For a Cure',
    },
    acs: {
        name: 'American Cancer Society',
        imageAlt: "A pink cersion of the logo for the 'The American Cancer Society'",
        mission: "At the American Cancer Society, we're on a mission to free the world from cancer.",
        link: 'https://www.cancer.org/',
        logo: 'images/ACS.png',
        fundraiser: 'https://tiltify.com/@hotmessmonster87/badasscancerslayer-destroying-the-cancer',
        linkText: 'Grab Your Girls Fundraiser',
    }
}


function ResourceList(data) {
    Object.assign(this, data)

    this.getResourceHtml = function (data) {
        const { name, imageAlt, mission, link, logo, fundraiser, linkText } = this;
        return `
                <div class="resourcesBC box-style">             
                  <img class="logo-img" src="${logo}" alt="${imageAlt}">
                    <div class="resource-information">
                          <a target="_blank" class="resource-link" href="${link}"><p>${name}</p></a>
                      <p class="resource-mission">Their Mission: ${mission}</p>
                      <p> Help out here➜ <a target="_blank" class="resource-fundraiser" href="${fundraiser}">${linkText}</a>
                      </p>
                    </div>
                </div>
              `
    }
}



const stickIt = new ResourceList(resources.bccsi)
const nationalBCF = new ResourceList(resources.nbcf)
const bcResearchFoundation = new ResourceList(resources.bcrf)
const susanGKomen = new ResourceList(resources.sgk)
const americanCS = new ResourceList(resources.acs)


function renderResources() {
    document.getElementById("bccsi").innerHTML = stickIt.getResourceHtml()
    document.getElementById("nbcf").innerHTML = nationalBCF.getResourceHtml()
    document.getElementById("bcrf").innerHTML = bcResearchFoundation.getResourceHtml()
    document.getElementById("sgk").innerHTML = susanGKomen.getResourceHtml()
    document.getElementById("acs").innerHTML = americanCS.getResourceHtml()
}

renderResources()
