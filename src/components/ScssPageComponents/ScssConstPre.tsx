export const mediaOne = `
scss

.sidebar {
    width: 300px;
    @media screen and (orientation: landscape) {
        width: 500px;
    }
}

`;

export const mediaTwo = `
css

.sidebar {
    width: 300px;
}
@media screen and (orientation: landscape) {
    .sidebar {/span>
    width: 500px;
    }
}

`;

export const mediaThree = `
scss

@media screen {
    .sidebar {
        @media (orientation: landscape) {
            width: 500px;
        }
    }
}

`;

export const mediaFour = `
css

@media screen and (orientation: landscape) { 
    .sidebar {
        width: 500px;
    }
}

`;

export const mediaFive = `
scss

$media: screen;
$feature: -webkit-min-device-pixel-ratio;
$value: 1.5;
@media #{$media} and ($feature: $value) {
    .sidebar {
        width: 500px;
    }
}

`;

export const mediaSix = `
css

@media screen and (-webkit-min-device-pixel-ratio: 1.5) {
    .sidebar {
        width: 500px;
    }
}

`;

export const extendOne = `
scss

.error {
    border: 1px #f00;
    background-color: #fdd;
}
    .seriousError {
    @extend .error;
    border-width: 3px;
}

`;

export const extendTwo = `
css

.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}
.seriousError {
    border-width: 3px;
}

`;

export const extendThree = `
scss

.error {
    border: 1px #f00;
    background-color: #fdd;
}
.attention {
    font-size: 3em;
    background-color: #ff0;
}
.seriousError {
    @extend .error;
    @extend .attention;
    border-width: 3px;
}

`;

export const extendFour = `
css

.error, .seriousError {
    border: 1px #f00;
    background-color: #fdd;
}
.attention, .seriousError {
    font-size: 3em;
    background-color: #ff0;
}
.seriousError {
    border-width: 3px;
}

`;

export const extendFive = `
scss

.error {
    border: 1px #f00;
    background-color: #fdd;
}
.seriousError {
    @extend .error;
    border-width: 3px;
}
.criticalError {
    @extend .seriousError;
    position: fixed;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
}

`;

export const extendSix = `
css

.error, .seriousError, .criticalError {
    border: 1px #f00;
    background-color: #fdd;
}
.seriousError, .criticalError {
    border-width: 3px;
}
.criticalError {
    position: fixed;
    top: 10%;
    bottom: 10%;
    left: 10%;
    right: 10%;
}

`;

export const atRootOne = `
scss

.parent {
    ...
    @at-root .child { ... }
}

`;

export const atRootTwo = `
css

.parent { ... }
.child { ... }

`;

export const atRootThree = `
scss

.parent {
    ...
    @at-root {
        .child1 { ... }
        .child2 { ... }
    }
    .step-child { ... }
}

`;

export const atRootFour = `
css

.parent { ... }
.child1 { ... }
.child2 { ... }
.parent .step-child { ... }

`;

export const atRootFive = `
scss

@media print {
    .page {
        width: 8in;
        @at-root (without: media) {
            color: red;
        }
    }
}

`;

export const atRootSix = `
css

@media print {
    .page {
        width: 8in;
    }
} 
.page {
    color: red;
}

`;

export const debug = `
$primary-color: #007bff;
$secondary-color: #6c757d;

@debug $primary-color;
@debug $secondary-color;

`;

export const warn = `
@mixin adjust-location($x, $y) {
    @if unitless($x) {
        @warn;
        $x: 1px * $x;
    }
    @if unitless($y) {
        @warn;
        $y: 1px * $y;
    }
    position: relative;
    left: $x;
    top: $y;
}

`;

export const error = `
@mixin adjust-location($x, $y) {
    @if unitless($x) {
        @error "$x.";
    }
    @if unitless($y) {
        @error "$y.";
    }
    position: relative;
    left: $x;
    top: $y;
}

`;

export const ifOne = `
scss

p {
    @if 1 + 1 == 2 {
        border: 1px solid;
    }
    @if 5 < 3 {
        border: 2px dotted;
    }
    @if null {
        border: 3px double;
    }
}

`;

export const ifTwo = `
css

p {
    border: 1px solid;
}

p {
    border: 2px dotted;
}

p {
    border: 3px double;
}

`;

export const ifThree = `
scss

$type: monster;
    p {
    @if $type == ocean {
        color: blue;
    } @else if $type == matador {
        color: red;
    } @else if $type == monster {
        color: green;
    } @else {
        color: black;
    }
}

`;

export const ifFour = `
css

.monster p {
    color: green;
}

`;

export const forOne = `
scss

@for $i from 1 through 3 {
    .item-#{$i} {
        width: 2em * $i;
    }
}

`;

export const forTwo = `
css

.item-1 {
    width: 2em;
}
.item-2 {
    width: 4em;
}
.item-3 {
    width: 6em;
}

`;

export const eachOne = `
scss

@each $animal in puma, sea-slug, egret, salamander {
    .#{$animal}-icon {
        background-image: url('/images/#{$animal}.png');
    }
}

`;

export const eachTwo = `
css

.puma-icon {
    background-image: url('/images/puma.png');
}
.sea-slug-icon {
    background-image: url('/images/sea-slug.png');
}
.egret-icon {
    background-image: url('/images/egret.png');
}
.salamander-icon {
    background-image: url('/images/salamander.png');
}

`;

export const eachThree = `
scss

@each $animal, $color, $cursor in (puma, black, default),
    (sea-slug, blue, pointer), (egret, white, move)
{
    .#{$animal}-icon {
    background-image: url("/images/#{$animal}.png");
    border: 2px solid $color;
    cursor: $cursor;
    }
}

`;

export const eachFour = `
css

.puma-icon {
    background-image: url("/images/puma.png");
    border: 2px solid black;
    cursor: default;
}
.sea-slug-icon {
    background-image: url("/images/sea-slug.png");
    border: 2px solid blue;
    cursor: pointer;
}
.egret-icon {
    background-image: url("/images/egret.png");
    border: 2px solid white;
    cursor: move;
}

`;

export const eachFive = `
scss

@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
    #{$header} {
        font-size: $size;
    }
}

`;

export const eachSix = `
css

h1 {
    font-size: 2em;
}
h2 {
    font-size: 1.5em;
}
h3 {
    font-size: 1.2em;
}

`;

export const whileOne = `
scss

$i: 6;
@while $i > 0 {
    .item-#{$i} { width: 2em * $i; }
    $i: $i - 2;
}

`;

export const whileTwo = `
css

.item-6 {
    width: 12em;
}
.item-4 {
    width: 8em;
}
.item-2 {
    width: 4em;
}

`;

export const mixinOne = `
scss

@mixin large-text {
    font: {
        family: Arial;
        size: 20px;
        weight: bold;
    }
    color: #ff0000;
}

`;

export const mixinTwo = `
scss

@mixin clearfix {
    display: inline-block;
    &:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    * html & {
        height: 1px
    }
}

`;

export const mixinThree = `
scss

.page-title {
    @include large-text;
    padding: 4px;
    margin-top: 10px;
}

`;

export const mixinFour = `
css

.page-title {
    font-family: Arial;
    font-size: 20px;
    font-weight: bold;
    color: #ff0000;
    padding: 4px;
    margin-top: 10px;
}

`;

export const mixinFive = `
scss

@mixin silly-links {
    a {
        color: blue;
        background-color: red;
    }
}
@include silly-links;

`;

export const mixinSix = `
css

a {
    color: blue;
    background-color: red;
}

`;

export const argumentOne = `
scss

@mixin sexy-border($color, $width) {
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}
p {
    @include sexy-border(blue, 1in);
}

`;

export const argumentTwo = `
css

p {
    border-color: blue;
    border-width: 1in;
    border-style: dashed;
}

`;

export const argumentThree = `
scss

@mixin sexy-border($color, $width: 1in) {
    border: {
        color: $color;
        width: $width;
        style: dashed;
    }
}
p {
    @include sexy-border(blue);
}
h1 {
    @include sexy-border(blue, 2in);
}

`;

export const argumentFour = `
css

p {
    border-color: blue;
    border-width: 1in;
    border-style: dashed;
}
h1 {
    border-color: blue;
    border-width: 2in;
    border-style: dashed;
}

`;

export const argumentFive = `
scss

p {
    @include sexy-border($color: blue);
}
h1 {
    @include sexy-border($color: blue, $width: 2in);
}

`;

export const argumentSix = `
scss

@mixin box-shadow($shadows...) {
    -moz-box-shadow: $shadows;
    -webkit-box-shadow: $shadows;
    box-shadow: $shadows;
}
.shadows {
    @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}

`;

export const argumentSeven = `
css

.shadows {
    -moz-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    -webkit-box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
    box-shadow: 0px 4px 5px #666, 2px 6px 10px #999;
}

`;

export const argumentEight = `
scss

@mixin colors($text, $background, $border) {
    color: $text;
    background-color: $background;
    border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
    @include colors($values...);
}
$value-map: (text: #00ff00, background: #0000ff, border: #ff0000);
.secondary {
    @include colors($value-map...);
}

`;

export const argumentNine = `
css

.primary {
    color: #ff0000;
    background-color: #00ff00;
    border-color: #0000ff;
}
.secondary {
    color: #00ff00;
    background-color: #0000ff;
    border-color: #ff0000;
}

`;

export const argumentTen = `
scss

@mixin wrapped-stylish-mixin($args...) {
    font-weight: bold;
    @include stylish-mixin($args...);
}
.stylish {
    // Аргумент $width будет получен миксином "stylish-mixin" как именованный.
    @include wrapped-stylish-mixin(#00ff00, $width: 100px);
}

`;

export const argumentTenUA = `
scss

@mixin wrapped-stylish-mixin($args...) {
    font-weight: bold;
    @include stylish-mixin($args...);
}
.stylish {
    // Аргумент $width буде отриманий міксином "stylish-mixin" як іменований.
    @include wrapped-stylish-mixin(#00ff00, $width: 100px);
}

`;

export const contentOne = `
scss

@mixin apply-to-ie6-only {
    * html {
    @content;
    }
}
@include apply-to-ie6-only {
    #logo {
        background-image: url(/logo.gif);
    }
}

`;

export const contentTwo = `
css

* html #logo {
    background-image: url(/logo.gif);
}

`;

export const contentThree = `
scss

$color: white;
@mixin colors($color: blue) {
    background-color: $color;
    @content;
    border-color: $color;
}
.colors {
    @include colors {
        color: $color;
    }
}

`;

export const contentFour = `
css

.colors {
    background-color: blue;
    color: white;
    border-color: blue;
}

`;

export const contentFive = `
scss

#sidebar {
    $sidebar-width: 300px;
    width: $sidebar-width;
    @include smartphone {
        width: $sidebar-width / 3;
    }
}

`;
