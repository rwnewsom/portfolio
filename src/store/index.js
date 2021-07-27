import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    skills: [
      { 
        id: "1",
        title: "HTML",
        icon: "html5"
      },
      {
        id: "2",
        title: "CSS",
        icon: "css3"
      },
      {
        id: "3",
        title: "JavaScript",
        icon: "microchip"
      }, 
      {
        id: "4",
        title:"C#",
        icon: "microchip"
      },
      {
        id: "5",
        title:"Vue",
        icon: "vuejs"
      },
    ],
    books: [
      {
        title: "The Pragmatic Programmer",
        author: "David Thomas & Andrew Hunt",
        isbn: "0135957052",
        details: "I came across several references to it so decided to pick up a copy. I'm only two chapters in, but looking forward to reading more."
      },
      {
        title: "The Bourgeois Virtues",
        author: "Deirdre McCloskey",
        isbn: "9780226556642",
        details: "An entertaining overview of ethics (virtue-based vs rule-based etc)"
      },
      {
        title: "Company Town",
        author: "Madeline Ashby",
        isbn: "9780765382917",
        details: "In this sci-fi mystery, the protagonist must investigate mysterious deaths in her oil rig community."
      },
      {
        title: "Lower Ed",
        author: "Tressie McMillian Cottom",
        isbn: "9781620970607",
        details: "Simply put, many universities excel at generating debt, leaving students (and taxpayers) on the hook."
      },
      {
        title: "Fooled by Randomness",
        author: "Nassim Nicholas Taleb",
        isbn: "9780141032740",
        details: "Luck and timing may affect our lives more than we would like to admit.  I believe you will be luckier and have better timing if you apply yourself, work hard and seek out challenging opportunities."
      },
      {
        title: "The Black Swan",
        author: "Nassim Nicholas Taleb",
        isbn: "9780812973815",
        details: "Ultimately this books asks a question that I frequently ponder... How, from what I have observed in the past and know of the world, can I predict that which I haven't experienced yet?"
      },
      {
        title: "Antifragile",
        author: "Nassim Nicholas Taleb",
        isbn: "9781400067824",
        details: "My biggest takeaway - there are fundamental limits to our ability to predict - but there are steps we can take to mitigate uncertainty."
      },
      {
        title: "The Perfect War",
        author: "James William Gibson",
        isbn: "0871137992",
        details: "A mentor one told me 'You tell me how I will be measured, and I'll tell you how I will perform.' This book provides harrowing and damning examples of that aphorism."
      },
      {
        title: "Scientific Management In Action",
        author: "Hugh Aitken",
        isbn: "0691042411",
        details: "An account of the one instance in the history of the USA where federal government employees went on strike. An excellent case study in labor relations and change management."
      },
      {
        title: "The Scramble for Africa",
        author: "Thomas Pakenham",
        isbn: "0380719991",
        details: "I read this in preparation for an assignment in support of Africa.  Highly recommended if you have read 'King Leopold's Ghost' and want to learn more."
      },
      {
        title: "The Boer War",
        author: "Thomas Pakenham",
        isbn: "9780349104669",
        details: "Truly a prelude to World War I.  Additionally a must read for serious students of insurgency / counter insurgency warfare."
      },
      {
        title: "Cryptonomicon",
        author: "Neal Stephenson",
        isbn: "0380788624",
        details: "I read this as a junior officer and it sparked a serious interest in cryptography. Sadly, none of my friends were willing to configure PGP.",
      },
      {
        title: "The Forever War",
        author: "Joe Haldeman",
        isbn: "0060510862",
        details: "I read this long after I read 'Starship Troopers.' Wish I had read it sooner.  Come to think of it, if anyone told me they were thinking of joining the service, this is the book I would recommend that they read first.",
      },
      {
        title: "The Neuromancer",
        author: "William Gibson",
        isbn: "0441569595",
        details: "Classic Cyberpunk.",
      }
    ],
    bloodyMarys: [
      { 
        id: "1",
        date: "June 24th, 2017",
        location: "Can Can Brasserie, Richmond, VA",
        description: "Served in a tall glass. Garnished with lemon wedge & celery stalk. Slightly spicy with a pronounced horseradish flavor."
      },
      {
        id: "2",
        date: "July 2nd, 2017",
        location: "Reagan National Airport Bar, Washington, DC",
        description: "'Reservoir Bloody Mary'. Tall glass. Absolute Pepper vodka. Mild horseradish flavor. Garnished with lemon & lime, 2 briny olives."
      },
      {
        id: "3",
        date: "November 12th, 2017",
        location: "Fado Pub, Easton Shopping Center, Columbus, OH",
        description: "Titos by default. Garnish is olive and lime wedge. Nice burn on back of throat. Served alternately in pint or stem glass."
      },
      {
        id: "4",
        date: "March 24th, 2019",
        location: "La Chatelaine, Columbus, OH",
        description: "Tabasco mix. Pint glass, no garnish. Bland. Tastes like V8."
      },
      {
        id: "5",
        date: "March 6th, 2021",
        location: "Rusty Bucket, Worthington, OH",
        description: "Stupid spicy Bloody Mary (habanero pepper). Shot glass,, crushed ice.. garnish is tomato,  generous pickle, olive and carrot. Spicy salt & pepper rim. Appropriately sour & astringent. Spicy but not stupid spicy"
      },
      
    ],
  },
  strict:true,
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
