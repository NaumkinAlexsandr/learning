export const transition = `
width: 100px; 
transition-property: width;
transition-duration: 5s; 
transition-delay: 2s; 
:hover {width: 400px;}
`;

export const offset = `
.offsetElement {
    height: 400px;
    .offset {
        width: 50px;
        height: 50px;
        background-color: $buttonNeon;
        offset: path("M 50 50 L 320 50 L 200 320 z") auto;
        animation: move 3s linear infinite;
  
        @keyframes move {
            from {
                offset-distance: 0%;
            }
            to {
                offset-distance: 100%;
            }
        }
    }
  }

`;

export const backfaceVisibility = `
#backface_visibility {
    display: flex;
    flex-direction: row;
  
    .container {
        width: 150px;
        height: 150px;
        margin: 25px 0 0 55px;
        border: none;
  
        .showbf div {
            backface-visibility: visible;
        }
  
        .hidebf div {
            backface-visibility: hidden;
        }
  
        .cube {
            width: 100%;
            height: 100%;
            perspective: 550px;
            perspective-origin: 150% 150%;
            transform-style: preserve-3d;
        }
  
        .face {
            display: block;
            position: absolute;
            width: 100px;
            height: 100px;
            border: none;
            line-height: 100px;
            font-size: 60px;
            color: white;
            text-align: center;
        }
  
        .front {
            background: rgba(211, 211, 211, 0.3);
            transform: translateZ(50px);
        }
  
        .back {
            background: rgba(0, 255, 0, 1);
            color: black;
            transform: rotateY(180deg) translateZ(50px);
        }
  
        .right {
            background: rgba(196, 0, 0, 0.7);
            transform: rotateY(90deg) translateZ(50px);
        }
  
        .left {
            background: rgba(0, 0, 196, 0.7);
            transform: rotateY(-90deg) translateZ(50px);
        }
  
        .top {
            background: rgba(196, 196, 0, 0.7);
            transform: rotateX(90deg) translateZ(50px);
        }
  
        .bottom {
            background: rgba(196, 0, 196, 0.7);
            transform: rotateX(-90deg) translateZ(50px);
        }
    }
}

`;

export const rotate = `
.rotate {
    div {
        width: 150px;
        height: 100px;
        margin: 0 auto;
  
        h4 {
            padding: 10px 5px;
            border: 3px solid $buttonNeon;
            border-radius: 20px;
            width: 150px;
            font-size: 1.2rem;
            text-align: center;
            color: $buttonNeon;
        }
  
        .rotate_text {
            transition: rotate 1s;
        }
  
        &:hover .rotate_text {
            rotate: 1 -0.5 1 180deg;
        }
    }
}
`;

export const scale = `
.scale {
    div {
        width: 150px;
        height: 100px;
        margin: 0 auto;
  
        h4 {
            padding: 10px 5px;
            border: 3px solid $buttonNeon;
            border-radius: 20px;
            width: 150px;
            font-size: 1.2rem;
            text-align: center;
            color: $buttonNeon;
        }
  
        .scale_text {
            transition: scale 1s;
        }
  
        &:hover .scale_text {
            scale: 2 1;
        }
    }
}
 `;

export const translate = `
 .translate {
    div {
        width: 150px;
        height: 100px;
        margin: 0 auto;
  
        h4 {
            padding: 10px 5px;
            border: 3px solid $buttonNeon;
            border-radius: 20px;
            width: 150px;
            font-size: 1.2rem;
            text-align: center;
            color: $buttonNeon;
        }
  
        .translate_text {
            transition: translate 1s;
        }
  
        &:hover .translate_text {
        translate: 50px -150px;
        }
    }
}

`;

export const circle = `
.circle {
    .left {
        float: left;
        height: 200px;
        width: 200px;
        shape-outside: circle();
        -webkit-shape-outside: circle();
        clip-path: circle();
        -webkit-clip-path: circle();
        background: $buttonNeon;
    }
  
    p {
        text-align: left;
    }
  }

`;

export const ellipse = `
.ellipse {
    .left {
        float: left;
        shape-outside: ellipse();
        -webkit-shape-outside: ellipse();
        clip-path: ellipse();
        -webkit-clip-path: ellipse();
        width: 150px;
        height: 300px;
        background: $buttonNeon;
    }
  
    p {
        text-align: left;
    }
  }

`;

export const inset = `
.inset {
    .left {
        float: left;
        shape-outside: inset(75px);
        -webkit-shape-outside: inset(75px);
        clip-path: inset(75px);
        -webkit-clip-path: inset(75px);
        width: 300px;
        height: 300px;
        background: $buttonNeon;
    }
  
    p {
        text-align: left;
    }
  }

`;

export const polygon = `
.polygon {
    .left {
        width: 40%;
        height: 12ex;
        background-color: $buttonNeon;
        float: left;
        shape-outside: polygon(0 0, 100% 100%, 0 100%);
        -webkit-shape-outside: polygon(0 0, 100% 100%, 0 100%);
        clip-path: polygon(0 0, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(0 0, 100% 100%, 0 100%);
    }
  
    p {
        text-align: left;
    }
  }

`;
