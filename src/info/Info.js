// ALL of this pictures have to be changed
import self from "../img/self.png"
import mock1 from "../img/mock1.png"

export let colors = ["rgb(218,211,216)", "rgb(166,104,255)"];


// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; old gradiant and terminal colors

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

export const info = {
    firstName: "Janik",
    lastName: "Meyer",
    initials: "jm", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Programmer apprentice",
    selfPortrait: self, // ToDo changing it with a picture of me
    // as i changed one of the values of the color array the gradient under the links changed because of this
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🚰',
            text: 'average water enjoyer'
        },
        {
            emoji: '🌎',
            text: 'from germany'
        },
        {
            emoji: "💼",
            text: "Trainee IT specialist specializing in application development"
        },
        {
            emoji: "📧",
            text: "janikmeyer1607@outlook.de"
        }
    ],
    socials: [
        {
            link: "https://github.com/Manofward",
            icon: "fa fa-github",
            label: 'github'
        }
    ],

    // anpassen später
    bio: "Hi I'm Janik. I'm a Software apprentice at BBW-Suedhessen. I like dogs and also gaming. I'm also highly motivated for most things.",
    skills:
        {
            proficientWith: ['javascript', 'html5', 'css3', 'c', 'c#', 'git', 'github', 'gitlab', 'react', 'bootstrap', 'visual studio', 'microsoft office', 'visual studio code', ],
            exposedTo: ['nodejs', 'python']  
        },
        // anpassen später
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'series',
            emoji: '📺'
        },
        {
            label: 'nature',
            emoji: '🌲'
        }
    ],
    // ToDo: those Projects need to bee updatet
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Hashing Algorithm",
            live: "", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://gitlab.bbwausbildung-digital.de/meyerjan/hahsing", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        }
    ]
}