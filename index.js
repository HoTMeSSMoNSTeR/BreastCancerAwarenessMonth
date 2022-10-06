

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

// picture carousel

document.getElementById("previous-btn").addEventListener('click', function () {
    moveToPrevPic()
})
document.getElementById("next-btn").addEventListener('click', function () {
    moveToNextPic()
})

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
    },
    personal: {
        name: 'Start Your Own Fundraiser!',
        imageAlt: 'A simple vector image of the pink breast cancer ribbon on a white background',
        mission: 'Raise your own funds in honor of a loved one',
        link: 'https://tiltify.com/explore/fundraising-opportunities?search=breast%20cancer',
        logo: 'images/pinkribbon.png',
        fundraiser: 'https://tiltify.com/explore/fundraising-opportunities?search=breast%20cancer',
        linkText: 'Raise you own funds for breast cancer'
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
const personal = new ResourceList(resources.personal)


function renderResources() {
    document.getElementById("bccsi").innerHTML = stickIt.getResourceHtml()
    document.getElementById("nbcf").innerHTML = nationalBCF.getResourceHtml()
    document.getElementById("bcrf").innerHTML = bcResearchFoundation.getResourceHtml()
    document.getElementById("sgk").innerHTML = susanGKomen.getResourceHtml()
    document.getElementById("acs").innerHTML = americanCS.getResourceHtml()
    document.getElementById("personal").innerHTML = personal.getResourceHtml()
}

renderResources()


const factsThree = [
    'One in eight women in the U.S. will be diagnosed with breast cancer',
    'Men can get breast cancer too, and the symptoms are the same',
    'Metastatic breast cancer is when the cancer has spread to other parts of the body',
    'Today, there are more than 4 million breast cancer survivors in the U.S.'
]

const renderFactsThree = factsThree.map(function (fact) {
    const number = factsThree.indexOf(fact) + 1
    return `<div class="box-style box${number} facts">${fact}</div>`
}).join('')

document.getElementById("third-subsection").innerHTML = renderFactsThree


// story popup

document.getElementById("popup-link").addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'block'
    document.querySelector('.popup-story').style.display = 'block'
    document.getElementById('popup-story').innerHTML = renderStoryHtml()
})

document.getElementById("popup-story").addEventListener('click', function () {
    document.querySelector('.overlay').style.display = 'none'
    document.querySelector('.popup-story').style.display = 'none'
})

function renderStoryHtml() {
    return `
        <p class="story-text">
        I was 34 years old with a one and a half year old, fresh out of a nasty divorce and picking up the pieces. I was trying to work full time to take care of my baby girl and myself during the start of the COVID-19 pandemic. Things were already crazy, and then things got about as crazy as they could have.<br> 
	I found what appeared to be not quite a “lump” on my right breast, or maybe I just didn't want it to be a lump… because that thought was terrifying. It was more of just an area that felt harder and thicker, obviously different than it had been since I was 12! It appeared swollen and like my skin was a bit tighter, and was kind of dimpled but not in a normal way, like an orange peel. I was freaking out. I knew what they said about things like that and what it could be. I kept going back and forth between freaking out and researching to telling myself, "No way!!" There was no way that would happen to me! I was only 34 and had a little baby. It was pretty stressful to say the least. Thinking about what could happen if it was the worst or what else it could even be. My friend told me about numerous other things it COULD have been, but I think deep down we both knew. It was just too obvious and the warning signs were just too exact. I didn't want it to be, I made every excuse and came up with every reason that it couldn't possibly be the disease that would not be named.<br>
    I only even ended up seeing my doctor when I did because I was already scheduled for an annual wellness checkup. I think I felt like if I called someone for the problem that I thought I had, then I would be admitting to the possibility of it being the no-good, very bad thing. I explained what was happening to my doctor, hoping she would tell me it was just an infection--which is a thing. I learned about that the hard way. Double mastitis with a newborn had been quite the experience just a year and a half earlier, and I had all but convinced myself that it was just some residual damage or a similar infection.<br> 
    I remember the look on her face. She said to me that it very well could just be an infection but she didn't want to take any chances. She recently told me that she didn't feel it was her place to take that kind of chance on my life, or make that judgment as my doctor. And considering that I had a young child and everything to live for, we were taking NO chances. Still sitting in that same appointment, she called the radiology office down the hall in the same building and pretty much told them that it was an emergency and that I needed to be seen immediately.<br> 
    Fortunately for me, my doctor knows how to get things done; I left her office and walked right down the hall to the radiologist's office for my appointment. I just have to interject here that I am extremely fortunate that my doctor handled that the way that she did. I can't even tell you how many stories I have heard from women around my age whose doctors told them it was nothing, not to worry,  and that they were too young for it to be anything despite all of the symptoms being there.<br> 
    My doctor had ordered an ultrasound and a mammogram. It was my first mammogram since no one expects you to even consider getting one until you're in your 40s--which is why so many women have had issues go undetected. They “weren't old enough” so they were brushed off. The procedure was definitely interesting, but not as bad as I had heard. After an hour or two of all of that, the technician told me to stay put. She wanted the radiologist to come and speak with me. I didn't know if that was a normal protocol or not because I'd had plenty of ultrasounds during my pregnancy but Id never had a mammogram before. <br>
I remember it feeling like I sat there and waited forever. The dude came in and sat down, and he pulled up all my scans. He started pointing at things and explaining things and I honestly don't remember much of what he said. I just remember my heart dropping as he said to me that, while a biopsy would need to be done to confirm, the likelihood of it not being the badness, from the way it looked, was slim to none. He said that it would be surprising if it wasn't cancer, and pretty much told me that I should prepare myself for the worst. I think I may have been in shock. Instead of going home, I immediately drove to my parents' house. Fortunately they had moved to Idaho within the past year to help me with my baby as a single working mom.<br> 
At that point I just knew. I knew what it was and I knew what was going to happen. I got to my parents and, as I walked in the door, told them what was happening. My poor mom started laughing. It was a mix of thinking I was joking and the fact that when she hears or faces something she can't process or handle, it's her normal anxious reaction. I don't even remember what my dad did. <br>
Most of the rest of that night and week were just nerves and tears and anxiety. I had to wait about a week for my biopsy, so technically nothing was positively diagnosed. But, like I said, I just knew.<br> 
A biopsy is not a pleasant experience. I have always had a crazy fear of needles, so the idea of having a ginormous one shoved through parts of my body was probably the worst idea ever in history. (Obviously not really but I was terrified.) It wasn't as bad as I had worked myself up for, but it never is with needles. They numbed me up and I refused to look and probably almost broke my mom's hand. I also had to have something called a stereotactic core needle biopsy. I think that's what it's called, don't quote me on that. This is just my story, not by any means medical information or from a medical professional. Anyway, they put me back into the mammogram machine with some other weird contraptions and did another biopsy with the help of the imaging. That was also not pleasant.<br> 
It took another week or so for any results to come back, which was super frustrating and nerve racking. My doctor scheduled me for an appointment when the results came back and that's when I got my news. The doctor that was working that day looked so sad and felt so bad. <br>
I had breast cancer.<br> 
The very next day I went to see my oncologist for the first time. By that point I had already made the decision that I was going to live. The scariest part of cancer for me was what would happen to my little girl if something happened to me. She would end up with her dad,  which was an awful and terrifying thought. Don't judge me too quickly, that is a whole other story and he is legitimately a terrible person. Anyway, my first oncology appointment was kind of a whirlwind. I'm pretty sure we decided that day that I would do surgery first, and it was my choice whether I did a lumpectomy, a single mastectomy, or a double mastectomy. I was being referred to one surgeon for the surgery, and another that would eventually be in charge of my recovery and then reconstruction at some point.<br> 
I saw the first surgeon and I had decided to get a full-on double mastectomy. I wanted to decrease any and every chance of things getting worse or coming back. After lots of back and forth and waiting and calling and all kinds of things, I was finally scheduled for a double mastectomy on June 1st. The next couple of weeks were filled with making arrangements with work, planning to stay with my parents during recovery, and getting back to work as soon as I could while doing all my treatments.<br> 
June 1st came. We went to the hospital early in the morning. I got an IV and they tried, like, three times to give me a second one and couldn't get any veins. Next I had to get a shot in the stomach, and then I was rolled back. I don't think I remember being taken back, but at this point I think it's because I've had so many surgeries it's just all a blur. I very vaguely remember waking up. My best friend told me that I immediately asked where my child was, then asked for a Dr. Pepper, and then apologized profusely for not having shaved my legs before surgery.<br> 
I remember waking up later. Since we were in the thralls of a global pandemic, children weren't allowed in the hospital unless they were a patient. However my kind nurses allowed my baby girl to come in for a few minutes to see me. My best friend stayed with me for quite some time and my parents took the baby home to bed. My roommate didn't mean to stay so long but her car broke down and she had horrible car insurance and horrible roadside assistance. I was secretly quite grateful to have someone there with me. I'd had both breasts completely removed and I think it was eighteen lymph nodes on my right side. Which meant it had started spreading. Only about nine of the eighteen tested positive, so from what they found, they got clear margins. That means that they got out all the cancer that they knew about in that area. It also put me at risk of developing lymphedema, but I have not. I have been told that I can no longer have any shots or blood draws done from my right arm, or any excessive pressure, like a blood pressure cuff, because it could trigger lymphedema.<br> 
I stayed at least one night and when I was discharged. My surgeon set it up so that a nursing service would be coming and checking on me for a week or two. They were supposed to be helping me empty my drains, checking my incision sites, and checking for fevers or anything else that could be dangerous. It was a total flop because the nurse that was coming entirely missed the beginning of a horrible infection and my incisions coming right back open!I realized something was wrong and told the head nurse right before she was going to discharge me. She helped me reach the right people. I was given an antibiotic, and by the time I actually followed up with my surgeon about said infection, it was a full-blown open wound--and not a small one. Wound breakdown, tissue necrotizing, and a whole new world of complications. Fortunately for me, I did not, and still have not, regained feeling in those areas, so I couldn't feel this gaping wound on my chest.<br> 
At this point I was told that I would have to go to the wound care office in the hospital until we could get the issue resolved. At least enough that I could start chemotherapy without putting myself even more at risk for more complications. Three times a week I went to the hospital for wound care. I would have my wound cleaned, measured, and re-packed. After a month or two of almost no progress I was told I would need to be put on something called a wound vac. Basically, it's a small machine that I carried around for almost three months that would pull out the nastiness and encourage bleeding and blood flow, which would encourage new tissue and healing. I still had to go two to three times a week to wound care, but now they would just re-do my wound vac dressing on top of the other stuff.<br> 
I don't remember the timeline very well, just what happened. After my double mastectomy I went back to my oncologist, at which point he decided we needed to wait to start chemo until my wound was healed. It was also then that he told me that my pathology had shown it was worse than we thought, and that it was a really good thing I had done a full-on double mastectomy. I also had something called inflammatory breast cancer, which is one of the more aggressive types of breast cancer, with less chance of a good outcome. Cancer comes in stages, and each stage has its own three levels. So, there are stages one, two, three, and four, and stages one through three have levels a, b, and c. Stage 4 cancer is considered terminal. I was told that day that I had stage 3c breast cancer, literally the step before terminal. Inflammatory breast cancer is always at least stage 3, because it has technically already metastasized into the skin and is more likely to have spread already. But I would have to wait to move forward with the rest of my treatment until my wound closed.<br> 
Eventually, after several weeks and my wound not closing, my oncologist decided we couldn't wait any longer to start chemo. I had a port placed during my double mastectomy that was going to make the process easier and safer. The first kind of chemo that I was supposed to receive is caustist and can destroy your skin, muscle, and tissue if it leaks anywhere other than in your veins. A port significantly reduces that chance. Well, my port had been put in poorly. It was too deep to be accessed unless you had the help of an x-ray, which they obviously wouldn't have at every chemo…<br> 
So I had to have another surgery scheduled where they would take out my original port and put in another, but in a better position. They got me in really quick. I wasn't put all the way under, just into a very, very, very relaxed state. They tried to get me to go to sleep but I wouldn't stop talking. The surgeon who was replacing my port was different than the one who had put it in, and I definitely heard him muttering under his breath about how poorly it had been placed, and possibly some other words of frustration. He had a really hard time getting it out, to the extent that the new one had to be placed in a completely different place. So, that was all done and good and I was ready to start chemo. The original site of my port got infected, because I'm just lucky like that, and pretty much exploded. I kid you not, it was like a giant, oozing zit–not looks, but just the oozing. It was nasty. I went to wound care and they sent me to the emergency room. (It has been over a year since that and my original port site is still struggling to heal fully).<br>
(Side notes: but right in the middle of all of this, my ex-husband decided to take me to court over custody, probably because he didn't like paying child support. He put us through hell and back while I was in wound care and having chemo. What luck. He never did find out I had cancer. I did everything I could to make sure he didn't find out because he would have used that against me so, so fast, but it added quite a lot of extra stress for all of us, on top of cancer.)<br>
In the coming days and weeks I started chemo. Chemotherapy is insane and generally wipes you clean out, destroys your immune system, and hurts all the way down to your bones. I lost my hair after my second treatment, I believe. That was quite emotional. Up until that point I had always had long, thick, beautiful hair. It was really hard to lose it. And yes, it's just hair, but I think it's something people don't understand unless they've been there. Being bald was quite the experience and not necessarily an enjoyable one.<br> 
A simple way of explaining chemotherapy is that it goes into your body and just kills the evil cells, but chemo isn't smart enough to differentiate between the good and bad cells, which is why it is so incredibly hard on your body with all the crazy side effects. It obviously affects your hair and makes you lose it, and makes it stop growing for some time. It can also affect your fingernails, vision, skin, teeth, and just about everything. On top of that, it also destroys your immune system, which makes it much easier to get sick or get infections because it seriously depletes your white blood cell count. So, my experience was that things in my body that were already struggling, that the white blood cells were already fighting a battle, and the dams broke pretty much just broke. I lost count of how many different infections I had, and all this in the middle of a global pandemic. While I was fortunate to not contract COVID during the worst parts of my treatment, it did affect just about everything. My hair was gone, my finger and toenails are still trying to recover from chemo, one toenail just fell off, and then there’s my teeth. My teeth had minimal and manageable problems before. Then I had chemo, and it ruined them. That was another really, really hard part of all of this for me. My hair and my smile have always been the things that I felt were so pretty and always got complimented. Well, not anymore.<br> 
One of the things that is really hard to acknowledge and talk about is how chemo ruined my teeth. Before I was done with treatment, I had to have a full extraction, and now my teeth are fake. It doesn't bother me much, but it is a hard thing to not feel self-conscious about. My eyebrows have still not come back more than a few tiny hairs, so I'm pretty sure they aren't going to at this point. I developed something called neuropathy in my right arm and hand. That happens when chemo damages some of your nerves and causes weakness, numbness, and pain in whichever extremity it's affecting. My vision was also affected, I lost my sense of taste for the most part for several months, and I lost my appetite. The week or so following chemo was mostly spent sleeping and not being able to move or eat or do much. It’s incredibly frustrating, but I feel like I was able to stay quite positive through most of it. And honestly, positivity can literally save your life.<br>  
Chemo is a bitch, but it's a life saving bitch, so I would totally take what it put my body through over dying. I've been on several different chemo drugs, and as of writing this down, I'm nearing the end of my treatment. Having such a long recovery from surgery (technically about 8 months because my wounds would not close, especially since I had to start chemo before they were healed) was difficult. I couldn't lift my child or do much for her or anyone. It was not easy, but we did what we had to do. I fortunately had a lot of support all around me.<br> 
After the really bad chemo and during the less bad chemo, I attempted to go back to work and start my radiation treatment at the same time. To say the least, that went poorly and I was back out of work after about 2 weeks. Radiation hit me way harder than I expected, which I guess is normal for someone who isn't retired and therefore can't rest all day, or doesn't have children at home…. Since that was not my situation, iit took me down and burned up my front and side. I have scars from radiation inside and out. The muscles and tissue on my right side, my arm and shoulder won't ever be the same because of the internal scarring. Fortunately again, I never regained feeling in those places so I couldn’t feel the excruciating burning that had been described to me. I had 30 rounds of radiation on my right side. Five days a week for six weeks. After the intense chemo and my radiation was done (still doing the less intense chemo) I was put on hormone pills. That was a trip.<br>
I had three types of cancer, ductal carcinoma in situ, invasive ductal carcinoma, and inflammatory breast cancer. It was given the status of HER2 positive, ER+, PR+, which basically means that this fancy protein makes your cells grow and divide even faster and it makes the cancer more aggressive. ER+ and PR+ means that my hormones feed the cancer. So, after the worst chemo and radiation were done, I was put on a hormone blocking drug. I won't go into too much detail, but for me, it was an incredibly terrible experience. It basically made me into a much worse version of myself. It was awful. After speaking with several of my doctors and weighing the pros and cons, it was decided that the best route for me was to have a full hysterectomy, and I mean they took everything! All the hormone pieces.<br> 
It was the hardest decision I had to make regarding my treatment. But, ultimately, I wanted to be a good mom to the baby I have as opposed to being a crazy terrible mom to also probably just my one kid. All of the treatment significantly decreases the likelihood that you can get pregnant again and being as young as I am, it still may have been an option. But with how the medicines that I was put on affected me, it would have probably destroyed me and my child. So I made the decision that was best for us. I know I made the right decision, as hard as it was. But it also means I probably won't get ovarian cancer or uterine cancer siince I don’t have those pieces anymore. <br>
That was another 2 months of healing, and not being able to pick up my baby or drive. It was a tough one because you start to feel better before you are better, so it can get tricky.<br> 
I'm nearing the end of my treatment. I had 7 surgeries removing so many pieces, 30 rounds or of radiation, 8 months of wound care in the hospital, and I've lost count of how much chemo. It has been INSANE.<br> 
What I will say and what I do want people to know is that cancer is the best worst thing that has ever happened to me. I am coming out of this battle a better and stronger person than I was. Or maybe I was strong, and I just didn't realize it until I was really put through some craziness. I have learned so, so much, we have been so, so loved and supported. Through some serious miracles, we were able to survive financially and I, as a single mom, was able to spend the first almost 3 years of my baby's life with her at home! I can't even begin to list the amazing things that have happened in my life during this fight for my life. It has left some trauma and some processing, but all in all, I came out having gained more than I lost. As hard as it is to be positive sometimes, I’m sure it’s part of what saved my life. My prognosis was not good, it was downright bad. But here I am coming out the other end, getting stronger every day, learning new things, setting new goals, and looking at an amazing future! As hard as it is, I want anyone else going through this to know that it is possible!! You can do this. It will be the hardest thing you ever do, and it won’t necessarily get easier, but you will get stronger and more capable of handling what is thrown at you. If you made it through the whole thing, thank you for reading my story! I hope now to get to a place in the future where I can really help others struggling through this and other things, and really make a difference for them.
        </p>
    `
}

const warningSigns = [
    'lump in or around breast', 'thickness in or around breast', 'breast skin dimpling',
    'nipple tenderness', 'tightening of breast skin', 'unexplained swelling especially on one side',
    'recent asymmetry', 'inverted nipple', 'skin becoming scaly or red'
]


const warningList = warningSigns.map(function (symptom) {
    return `
            <span class="list-item">${symptom}</li><br>
    `
}).join('')



document.getElementById("warnings").addEventListener('click', function () {
    document.getElementById("warnings").classList.add("display")
    document.getElementById("ul-symptoms").innerHTML = warningList
})

document.getElementById("ul-symptoms").addEventListener('click', function () {
    document.getElementById("warnings").classList.remove("display")
    document.getElementById("warnings").style.color = '#FD68B4, #1a1a1a'
    document.getElementById("ul-symptoms").innerHTML = ''
})

const factsFive = [
    '47% of women put off preventitive care due to high costs',
    'Breast cancer deaths are 40% higher in black women than white women',
    '49% of uninsured women delay or forego treatement due to cost',
    'Breast cancer is the leading cause of cancer death among Latin women in the U.S.'
]

const renderFactsFive = factsFive.map(function (fact) {
    const number = factsFive.indexOf(fact) + 1
    return `<div class="box-style box${number} facts">${fact}</div>`
}).join('')

document.getElementById("fifth-subsection").innerHTML = renderFactsFive