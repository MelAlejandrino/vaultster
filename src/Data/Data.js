export const Data = [
  {
    id: 2,
    name: "Pinoy Movie Site",
    tag: "Entertainment",
    background: "#FF7474",
    context: [
      {
        text: "SITE LINK",
        snippet: "https://moviehab.asia/",
      },
    ],
  },
  {
    id: 3,
    name: "Canva Class",
    tag: "Premium",
    background: "#67FF9B",
    context: [
      {
        snippet:
          "https://www.canva.com/brand/join?token=4iYnuSSDZuF2uIpdl7DV1A&referrer=team-invite",
      },
    ],
  },
  {
    id: 4,
    name: "CSS RESET",
    tag: "Programming",
    background: "#F5FFBB",
    context: [
      {
        snippet: `
        *, *::before, *::after{
            box-sizing: border-box;
        }
        
        * {
            margin: 0;
            padding: 0;
            font: inherit;
        }
        
        html, body, section{
            min-height: 100vh;
        }
        
        img, picture, svg, video{
            display: block;
            max-width: 100%;
        }
        
        html:focus-within {
          scroll-behavior: smooth;
        }
        
        ul[role='list'],
        ol[role='list'] {
          list-style: none;
        }
        a{
        text-decoration: none;
        }
        
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }
        
        body {
          text-rendering: optimizeSpeed;
          line-height: 1.5;
        }
        
        /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
           scroll-behavior: auto;
          }
          
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        `,
      },
    ],
  },
  {
    id: 5,
    name: "CSS COURSE",
    tag: "Programming",
    background: "#F5FFBB",
    context: [
      {
        text: "Where I learned CSS",
        snippet: `https://www.w3schools.com/css/default.asp`
      },
      {
        text: "Where I understood CSS",
        snippet: `https://www.youtube.com/@KevinPowell`,
      },
    ],
  },
  {
    id: 6,
    name: "REACT ICONS",
    tag: "Programming",
    background: "#F5FFBB",
    context: [
      {
        text: "docs",
        snippet: `https://react-icons.github.io/react-icons`
      },
      {
        text: "Installation",
        snippet: `npm install react-icons --save`,
      },
      {
        text: "USAGE"
      },
      {
        text: "SIMPLE ICON",
        snippet: `
        import { SiReact } from "react-icons/si";
        
        <SiReact />
        
        docs: https://github.com/icons-pack/react-simple-icons
        `,
      },
      {
        text: "FONT AWESOME",
        snippet: `
        import { FaBeer } from 'react-icons/fa';
        
        <FaBeer />
        
        docs: https://fontawesome.com/v5/docs/web/use-with/react
        `,
      }
    ],
  },
  {
    id: 7,
    name: "UI-UX RESOURCES",
    tag: "Programming",
    background: "#F5FFBB",
    context: [
      {
        snippet: `https://github.com/hendurhance/ui-ux`
      }
    ]
  }
];
