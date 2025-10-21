const sc1Wrapper = document.querySelector('.sc1Wrapper');
const sc2Wrapper = document.querySelector('.sc2Wrapper');
const sc3Wrapper = document.querySelector('.sc3Wrapper');
const gc1Wrapper = document.querySelector('.gc1Wrapper');
const gc4Wrapper = document.querySelector('.gc4Wrapper');
const diceWrapper = document.querySelector('.diceWrapper');
const grapesWrapper = document.querySelector('.grapesWrapper');
const cherryWrapper = document.querySelector('.cherryWrapper');
const watermelonWrapper = document.querySelector('.watermelonWrapper');
const lemonWrapper = document.querySelector('.lemonWrapper');
const gc2Wrapper = document.querySelector('.gc2Wrapper');
const gc3Wrapper = document.querySelector('.gc3Wrapper');
const chars1 = document.querySelector('.chars-1');
const chars2 = document.querySelector('.chars-2');

const cursorElements = [
  diceWrapper,
  grapesWrapper,
  cherryWrapper,
  watermelonWrapper,
  lemonWrapper,
  chars1,
  chars2
];

var cursor = document.querySelector("body");
function handleMouseMove(e) {
var x = e.clientX * 0.02;
  var y = e.clientY * 0.02;

  cursorElements.forEach(element => {
    element.style.transform = `translate(calc(var(--translateX) - ${x}px), calc(var(--translateY) - ${y}px))`;
  });
}
document.addEventListener("mousemove", handleMouseMove);

const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  const formPart = document.querySelector('.formPart');
  formPart.innerHTML = `
    <div class='success'>
    <div class='header thank-you'>
       <div class="header-blue-test">Thank</div>
       <div class="header-purple-test">You!</div>
    </div>
    <h2 class="join">
    You're officially on the list.<br><br>

We’ll let you know as soon as we go live — you’ll be the first to hear about it!<br><br>

In the meantime, feel free to follow us for sneak peeks and updates.
    </h2>
    </div>
  `;

  diceWrapper.classList.add('success-dice');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    document.addEventListener('mousemove', handleMouseMove);
  } else {
    cursorElements.forEach(element => {
      element.style.transform = `translate(calc(var(--translateX)), calc(var(--translateY)))`;
    });
    document.removeEventListener('mousemove', handleMouseMove);
  }
})

const offer = document.querySelector('.offer');
const offer2 = document.querySelector('.offer2');
window.addEventListener('scroll', () => {
    // Sayfanın üstünden ne kadar kaydırıldığını al
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY >= 200) {
    offer.classList.add('show');
    offer2.classList.add('show');
  } else {
    offer.classList.remove('show');
    offer2.classList.remove('show');
  }
});