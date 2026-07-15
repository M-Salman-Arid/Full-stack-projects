
// Import Project Images

import youtube from "../../assets/images/youtube.png";
import calculator from "../../assets/images/calculator.png";
import rps from "../../assets/images/rps.png";
import ecommerce from "../../assets/images/ecommerce.png";
import imageValidation from "../../assets/images/image-validation.png";

const projects = [

        {
        id: 5,

        title: "Upload Image validator",

        category: "Backend",

        tags: ["Node js", "Validation", "Backend"],

        image: imageValidation,

        description:
            "Created a Secure image uploader with file validation, size limits, and instant preview.",

        github: "http://github.com/M-Salman-Arid/",

        demo: "http://localhost:5173/projects/image-validation"
    },

    {
        id: 4,

        title: "Amazon Ecommerce UI",

        category: "React",

        tags: ["React", "UI/UX", "Frontend"],

        image: ecommerce,

        description:
            "Modern ecommerce interface inspired by Amazon with responsive design and clean user experience.",

        github: "http://github.com/M-Salman-Arid/Ecommerce-website-Amazon",

        demo: "https://m-salman-arid.github.io/Ecommerce-website-Amazon/"
    },

    {
        id: 3,

        title: "Rock Paper Scissors Game",

        category: "JavaScript",

        tags: ["JavaScript", "Game", "Frontend"],

        image: rps,

        description:
            "Interactive Rock Paper Scissors game developed using HTML, CSS and JavaScript.",

        github: "https://github.com/M-Salman-Arid/rock-paper-scissor-game",

        demo: "https://m-salman-arid.github.io/rock-paper-scissor-game/"
    },

    {
        id: 2,

        title: "Scientific Calculator",

        category: "JavaScript",

        tags: ["JavaScript", "Calculator", "App"],

        image: calculator,

        description:
            "Modern scientific calculator built with JavaScript supporting advanced operations.",

        github: "https://github.com/M-Salman-Arid/calculator-project",

        demo: "https://m-salman-arid.github.io/calculator-project/"
    },

    {
        id: 1,

        title: "YouTube Clone",

        category: "React",

        tags: ["HTML", "CSS", "Frontend"],

        image: youtube,

        description:
            "Responsive YouTube homepage clone designed using HTML and CSS with pixel-perfect UI.",

        github: "https://github.com/M-Salman-Arid/YouTube-clone",

        demo: "https://m-salman-arid.github.io/YouTube-clone/"
    }

];

export default projects;