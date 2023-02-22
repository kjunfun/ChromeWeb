const quotes = [
    {
        quote: "명성이란 결국 하나의 이름 주위로 몰려드는 오랜 오해들의 총합에 지나지 않는다.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "경쟁심이나 허영심이 없이 다만 고요하고 조용한 감정의 교류만이 있는 대화는 가장 행복한 대화이다.",
        author: "Rainer Maria Rilke"
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "To Travel is to Live",
        author: "Hans Christian Andersen"
    },
    {
        quote: "Only a life lived for others is a life worthwhile.",
        author: "Albert Einstein"
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Never go on trips with anyone you do ntot love.",
        author: "Hemmingway"
    },
    {
        quote: "We wander for distraction, but we travel for fulfilment.",
        author: "Hilaire Belloc"
    },
    {
        quote: "Travel expands the mind and fills the gap.",
        author: "Sheda Savage"
    },
];

const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;