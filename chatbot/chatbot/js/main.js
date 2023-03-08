let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Chitti", "Hi, I am a Robo", "Hello, My name is Chitti"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let drug = ['I know about Carboplatin, Remedesivir, Gemcitabine, Atomoxetine, Ciprofloxacin and NF Neuraminidase']
let carbo = ['Carboplatin is a alkylating agent used to treat advanced ovarian cancer.']
let reme = ['Remdesivir is a nucleoside analog used to treat RNA virus infections including COVID-19.']
let gem = ['Gemcitabine is a nucleoside metabolic inhibitor used as adjunct therapy in the treatment of certain types of ovarian cancer, non-small cell lung carcinoma, metastatic breast cancer, and as a single agent for pancreatic cancer.']
let atom = ['Atomoxetine is a selective norepinephrine reuptake inhibitor (SNRI) used in the management of Attention Deficit Hyperactivity Disorder (ADHD).']
let cipro = ['Ciprofloxacin is a second generation fluoroquinolone used to treat various susceptible bacterial infections.']
let neura = ['Neuraminidase inhibitors are a new class of antiviral drugs that inhibit influenza A and B viruses.']

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Sorry, am not able to understand!";
    if(message.includes('who are you')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = finalresult;
    }
    if(message.includes('fine')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = finalresult;
    }
    if(message.includes('how are you' || 'how are you doing today')){
        let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('thank you' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = finalresult;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('drug' || 'drugs')){
        let finalresult = drug;
        speech.text = finalresult;
    }
    if(message.includes('carbo' || 'carboplatin' || 'platin' )){
        let finalresult = carbo;
        speech.text = finalresult;
    }
    if(message.includes('remedesivir' )){
        let finalresult = reme;
        speech.text = finalresult;
    }
    if(message.includes('gem' || 'gemcitabine' || 'tabine' )){
        let finalresult = gem;
        speech.text = finalresult;
    }
    if(message.includes('atom' || 'atomoxetine' )){
        let finalresult = atom;
        speech.text = finalresult;
    }
    if(message.includes('cipro' || 'ciprofloxacin' )){
        let finalresult = cipro;
        speech.text = finalresult;
    }
    if(message.includes('neura' || 'neuraminidase' )){
        let finalresult = neura;
        speech.text = finalresult;
    }
    
    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81f';
    recognition.start();
    console.log("Activated");
})
