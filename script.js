// JS for triggering a super high bounce

document.getElementById('bounce-btn').addEventListener('click', function() {
    var kittyImg = document.querySelector('.kitty-img');
    if (!kittyImg) return;
    kittyImg.classList.remove('super-bounce'); // In case it's already animating
    // Trigger reflow to restart animation
    void kittyImg.offsetWidth;
    kittyImg.classList.add('super-bounce');
});

// Add the animation CSS dynamically so it only triggers via JS
const style = document.createElement('style');
style.textContent = `
@keyframes superBounce {
    0% { transform: translateY(0); }
    12% { transform: translateY(-60px); }
    20% { transform: translateY(-115px); }
    30% { transform: translateY(-60px); }
    45% { transform: translateY(0); }
    100% { transform: translateY(0); }
}
.super-bounce {
    animation: superBounce 0.9s cubic-bezier(.42,1.31,.4,.93) 1 !important;
}
`;
document.head.appendChild(style);

// Remove the class when animation ends
const kittyImg = document.querySelector('.kitty-img');
if (kittyImg) {
  kittyImg.addEventListener('animationend', function(e) {
    if (kittyImg.classList.contains('super-bounce')) {
      kittyImg.classList.remove('super-bounce');
    }
  });
}
