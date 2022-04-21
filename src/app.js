var affirmation = 
[
    `I am experiencing a financial breakthrough. I am receiving more money than ever before.`,
    `I am experiencing a mental breakthrough. New inspiration now fills my mind and guides my actions.`,
    `My endless good now comes to me in many ways.`,
    `I am open and receptive to what is new, different and unimaginable.`,
    `I am healthy. Every particle in my body is functioning perfectly and harmoniously.`,
    `I feel so magnetic and attractive. Everything I desire naturally flows to me. `,
    `My mind and heart are fully aligned. It is easy for me to do right actions.`,
    `I let go of what needs to go for my inevitable good.`,
    `It’s safe for me to let go of what no longer serves me for my highest good.`,
    `I love my body. I love the way I look and feel. I feel radiant from the inside out and others notice. `,
    `I’m grateful that everything I create serves to bless, heal and elevate humanity.`,
    ` I’m so magnetic to all the success that I desire.`,
    `Success comes naturally and easily to me.`, 
    `I am the best at what I do in my own way.`,
    `There is no such thing as lack in my reality for I am deeply connected to the Source of Infinite supply.`,
    `I love and honor myself for who I am, who I’ve been, and who I am becoming.`,
    `More and more I let go of all that’s holding me back from what is divinely mine.`,
    `What I desire, desires me too.`,
    `It’s natural and normal for me to have what I desire.`,
    `I allow myself to be my true authentic self. I’m worthy of it and more.`,
    `I allow myself to receive the love I deserve. I’m worthy of it and more.`,
    `I allow myself to receive financial abundance. I’m worthy of it and more.`,
    `I’m worthy of receiving a respectful, passionate and committed relationship.`,
    `I receive signs and synchronicities every day. I’m grateful to be divinely supported in all ways.`,
    `I now draw to me everything I desire with ease and grace.`,
    `I am confident in myself and my abilities.`,
    `I trust myself to always make the right decisions.`,
    `I validate myself in every way. I love myself and my life.`,
    `I am inspired and inspiring.`,
    `My mind is clear and only thinks upon that which I desire.`,
    `My heart is open and fully aligned to my divinity. `,
    `I choose to extend love to all that I see. `,
    `Great opportunities keep showing up for me every day!`,    
    `It’s so easy for me to earn huge amounts of money and to live out my dreams.`,
    `I grow more attractive every year.`,
    `I am worthy of receiving the best life has to offer.`,
    `I forgive myself for any negative thinking that has held me back.`,
    `I let go of fear, doubt and anxiety. It’s safe for me to move on and welcome better.`,
    `I am open to experiencing the best of everything. I welcome it all!`,
    `What’s meant for me will always be for me. It can never be taken from me.`,
    `I let go of the how or when and allow divine timing to take place. I always get what I want.`,
    `I am rooted and guided in Love. I feel and embody this truth.`,
    `I am grateful for my strong body and its incredible ability to heal anything.`,
    `I love feeding my mind and body nourishing food and liquids that optimize my health.`,
    `I now call back my energy from any person, place, or thing where I directly or indirectly placed it.`,
    `It’s safe for me to move on from any person, place, or thing that I’ve outgrown. I deserve and welcome better. `,
    `I am a magnet to perfect ideas that bring me great success.`,
    `I love having deep and meaningful relationships with loving people.`,
    `My heart is open and magnetic. My mind is clear, spacious, and receptive to successful thoughts. `,
    `I surrender to the grandness that life wants me to have. I let go of my small ways to welcome greater things in all ways.`,

];

function newAffirmation() {
    let randomAffirmation = Math.floor(Math.random() * affirmation.length);
    document.querySelector(".quote").innerHTML = affirmation[randomAffirmation];
};

soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");
quoteText = document.querySelector(".quote");

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=> {
    navigator.clipboard.writeText(quoteText.innerText)
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerHTML}`;
    window.open(tweetUrl, "_blank");
});




