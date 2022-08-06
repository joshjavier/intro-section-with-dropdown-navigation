# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshots

![Screenshot of desktop design](/design/screenshot-desktop.png)

<img
    src="/design/screenshot-mobile.png"
    alt="Screenshot of mobile design"
    width="375px"
/>

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-using-flexbox-grid-and-11ty-dDp58fK1AN](https://www.frontendmentor.io/solutions/intro-section-with-dropdown-navigation-using-flexbox-grid-and-11ty-dDp58fK1AN)
- Live Site URL: [https://idyllic-mooncake-e899da.netlify.app/](https://idyllic-mooncake-e899da.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [11ty](https://www.11ty.dev/) - static site generator

### What I learned

What really made me spend a lot of time on this was the mobile menu, specifically how to implement the different designs for mobile and desktop with the same HTML code. On top of that, I wanted to follow accessibility best practices for my solution, so I learned about common design patterns for slide-out menus and using `aria-expanded` to indicate the open state of a menu.

```html
<nav>
  <button
    aria-expanded="false"
    aria-controls="slideoutMenu"
  >
    <img
      src="/images/icon-menu.svg"
      alt=""
      aria-hidden="true"
      focusable="false"
    />
    <span class="visually-hidden">Open menu</span>
  </button>

  <div id="slideoutMenu" data-visible="false">
    ...
  </div>
</nav>
```

It took a while to wrap my head around all these concepts, and even though it's not really included in the challenge requirements, I wanted to do it anyway to build a good habit for other coding projects I'll do in the future.

One thing I should really avoid is trying to learn too many things at once. I used 11ty, a static site generator, for my solution, and even though I made it work, I wasn't really able to maximize its features. It just increased my cognitive load and distracted me from learning about the accessibility aspect of the challenge.

I also think I could polish my process to make it more efficient. Break problems into smaller pieces, and work on one small piece at a time to avoid overwhelm.

### Continued development

At one point I stopped caring about making my code dry and just making it *work*, so I'm sure there's lots of opportunities to organize the code.

Since I also used 11ty, the challenge can also be broken down into smaller components to make it easier to maintain.

### Useful resources

- [Alt-texts: The Ultimate Guide](https://axesslab.com/alt-texts/) - This guide emphasizes the importance of **context** when writing alt text, among other best practices.

- [Write good Alt Text to describe images](https://accessibility.huit.harvard.edu/describe-content-images) - Another good resource that contains specific examples on using alt text for various image types like graphs, diagrams, images of text, etc.

- [Menus & Menu Buttons](https://inclusive-components.design/menus-menu-buttons/) - From Heydon Pickering's [Inclusive Components](https://inclusive-components.design/), this guide talks about accessibility considerations for faux menus and true menus, although it goes into slightly more detail on the latter. (The mobile menu for this challenge is a faux menu.)

- [Let’s Focus on Slide-Out Navigation](https://knowbility.org/blog/2020/accessible-slide-menus/) - This guide is the closest to what I was trying to achieve, so it heavily inspired my implementation of the mobile menu.

- [Accessible and Keyboard-Friendly Hamburger Menu + Slide Out Navigation](https://www.impressivewebs.com/accessible-keyboard-friendly-hamburger-menu-slide-out-navigation/) - Another very good example of accessible slide-out navigation.

- [Breakpoint conditional JavaScript in vanilla JS](https://gomakethings.com/breakpoint-conditional-javascript-in-vanilla-js/) - This helped me implement the different behavior of dropdown menus - hover on desktop and by click on mobile menu.

## Author

- Website - [Josh Javier](https://joshjavier.com/)
- Frontend Mentor - [@joshjavier](https://www.frontendmentor.io/profile/joshjavier)
- Twitter - [@joshjavierr](https://twitter.com/joshjavierr)
- Codepen - [@joshjavier](https://codepen.io/joshjavier/)
- Codewars - [@joshjavier](https://www.codewars.com/users/joshjavier)
