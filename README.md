



<!-- PROJECT LOGO -->


  <h1 align="center">Mint Scream!</h1>
  
  https://user-images.githubusercontent.com/33885541/131703711-76437a6a-f49a-4bcb-8d54-30808c7b47d4.mov

  
  <h2 align="center">
    <br />
    <a href="https://mintscream.netlify.app/">👻 Play the game, if you dare! 👻</a>
  </h2>




<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about">About The Game</a>
      <ul>
        <li><a href="#game-style">Game Style</a></li>
        <li><a href="#game-mechanics">Game Mechanics</a></li>
      </ul>
    </li>
    <li>
      <a href="#about">Levels</a>
      <ul>
        <li><a href="#level-1">Level 1</a></li>
        <li><a href="#level-2">Level 2</a></li>
        <li><a href="#level-3">Level 3</a></li>
        <li><a href="#level-4">Level 4</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#links">Links</a></li>
    <li><a href="#demo">Video Demo</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- About The Game -->
# About The Game:

<!-- Game Style -->
## Game Style:

Mint Scream! Is a 2D side-scrolling game, where the player must use a mouse or touch screen to click on the sprites before they reach the edge of the screen.  Best on desktop, but also works on mobile devices.

## Game Mechanics:

- Click on the sprites to make them disappear into a puff of smoke.
- The sprites must not reach the edge of the screen.
- Player must click on 10 sprites per level (4 levels total).


<!-- Levels -->
## Levels:

### Level 1

<img width="1425" alt="level1" src="https://user-images.githubusercontent.com/33885541/131605692-090c7fad-e677-4959-af58-d7d5c412b4c6.png">

### Level 2
<img width="1427" alt="level2" src="https://user-images.githubusercontent.com/33885541/131605612-0187938d-5dc1-4820-a69a-e0a83c5b9873.png">

### Level 3

<img width="1439" alt="level3" src="https://user-images.githubusercontent.com/33885541/131607085-f8144f7a-c9ea-4918-b46f-9c338739a0f1.png">

### Level 4

<img width="1437" alt="level4" src="https://user-images.githubusercontent.com/33885541/131608107-14e61a8f-12bf-45c7-a9ac-deeee3c16fbc.png">

<!-- Tech Stack -->
## Tech Stack:

Mint Scream! Is built from scratch using HTML5 Canvas, CSS, Javascript and Bootstrap. 
No gaming libraries were used.

* [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial)
* [CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS)
* [JavaScript](https://javascript.info/)
* [Bootstrap](https://getbootstrap.com/2.0.2/)




#### Custom Design Elements:
##### Splash Page:
  * CSS animated rain and lightning effects with sound. ⛈️

##### Landing Page: 
  * Animated character gifs. 🕷️
  * "Meet the Developers" cards custom designed to look like tombstones.

##### Sprites: 
  * Animated sprite sheets built from single image files.
  * Each character has their own movement pattern across the screen.

##### Background: 
  * Custom made parallax scrolling backgrounds, each level having a different number of layers and individualized speeds.
  * Bootstrap
  * Buttons

##### Sounds: 
  * Different music for each level
  * Sound for Game Over and Winner mode



<!-- GETTING STARTED -->

### Installation

```sh
-Clone repository using the command git clone https://github.com/Tamsauce/mintScream.git
-Open file in code editor
```
  
<!-- Optimizations -->
## Optimizations

* **Code Refactoring:** To achieve an MVP within the time constraints, we took on a "make it work" mentality.  Building each level, as if it was independent of the others, resulted in repetitious functions.   Ideally, the code would be refactored to run more smoothly by importing and exporting the needed code.  
* **Audio Controls:** Each level has music that plays in the background.  The audio controls are currently hidden because they haven’t been customized.  For accessibility reasons, we would like to stylize these controls and put the sound back in the users' control 
* **Looping Music:** When the game ends or is won, ideally the personalized songs that play for each level would also come to an end.
* **Start Game Page:** This page was built to look like our levels but doesn’t use Canvas. Currently, the page is not responsive. 
* **Player Controls:** A player can start the game on any level provided they have the right file path, this would also mean they would start with the needed points to achieve that level.  In the future, these paths would ideally be blocked.  
* **Points Earned:** A player is only required to earn 10 points per level, however it would be better if the level ended only after all monsters per level were killed. This would require coding a specific number of enemies to appear rather than a continuous line.
* **Pause Game:** The game is missing a pause game feature


<!-- Lessons Learned -->
## Lessons Learned
* **HTML5 Canvas:** Prior to this project, we had no experience with game making or Canvas.   Unlike regular HTML which allows for line breaks, we learned to render anything we needed to create mulitiple "draw" functions.  We learned how to manipulate the x and y-axis, create functions that detected color, and manually built click events.
* **Sprites and Parallex:** Having never worked with sprites or parallax before, we learned how to build and manipulate them. Based on a lot of math tweaking, we were able to flip them around on the x and y-axis at will and adjust their movements based on what seemed fitting. 
* **Delta Time:** We learned to increase performance, we needed to consider delta time which was written to account for the relationship of the users hardware and network responsiveness.

<!-- links -->
## Links

* [Splash Page](https://mintscream.netlify.app)
* [Landing Page](https://mintscream.netlify.app/about.html)
* [Game](https://mintscream.netlify.app/startgame/startgame)

<!-- Video Demo -->
## Demo

https://user-images.githubusercontent.com/33885541/131593266-e572e34e-7a71-4b45-b17a-14fdbb1ab8fd.mov


https://user-images.githubusercontent.com/33885541/131606904-dfb3de07-7f22-42ff-8f1d-56c769a88860.mov

<!-- CONTACT -->
## Contact
### Tami Hughes
* Twitter: [@Tamsaucce](https://twitter.com/Tamsaucce)
* LinkedIn: [@tami-hughes-58074a72](https://www.linkedin.com/in/tami-hughes-58074a72)
* Email: thughes78@gmail.com
* Portfolio: [https://www.tamsauce.com/](https://www.tamsauce.com/)
* Blog Post About This Project: [Tami's Blog](https://hashnode.com/post/the-good-the-bad-and-the-ugly-hackathon-addition-ckt2krrly0bxd2is1ck2k7i8s)


### Katie Marie
* Twitter: [@KHtmlscssjs](https://twitter.com/KHtmlcssjs)
* LinkedIn: [@katiemariedev](https://www.linkedin.com/in/katiemariedev)
* Email: katiemariedev@gmail.com
* Portfolio: [https://www.katiemarie.dev/](https://www.katiemarie.dev/)
* Blog Post About This Project: [Katie's Blog](https://katiemarie.hashnode.dev/mint-scream)


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements and Sources
* [MintBean Developer Community](https://mintbean.io/meets/d51762d5-b874-4cc1-a420-ff316600192f)
* [Free 2d Game Assets by Bevouliin](https://bevouliin.com/category/free_game_asset/)
* [Free Parallax Background Images](https://free-game-assets.itch.io/parallax-halloween-2d-game-backgrounds)
* [Spooky Google Fonts](https://fonts.googleblog.com/2011/10/scary-fonts-for-halloween.html)
* [Free 2D Game Backgrounds](https://free-game-assets.itch.io/parallax-halloween-2d-game-backgrounds)
* [Sprite Sheet Generator 1](https://spritesheet.org/) and [Sprite Sheet Generator 2](https://codeshack.io/images-sprite-sheet-generator/)
* [Sprite Sheet to GIF Converter](https://onlinegiftools.com/convert-sprite-sheet-to-gif)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
