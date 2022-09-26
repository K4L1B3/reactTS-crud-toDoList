import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        scroll-behavior: smooth;

    }

    /*
  1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }

    body {
        background-color: #131212;
    }

    html, body, #root {
        height: 100%;
    }

    button {
        cursor:pointer;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    /*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
    */
    body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    }
   
    /*
  6. Improve media defaults
    */
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    
    /*
  7. Remove built-in form typography styles
    */
    input, button, textarea, select {
    font: inherit;
    }
    
    /*
  8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }

    /*
  9. Create a root stacking context
    */
    #root, #__next {
    isolation: isolate;
    }
   
    
  

`;
