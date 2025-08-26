/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
const handleFirstTab = (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
    window.addEventListener('mousedown', handleMouseDownOnce);
  }
};
const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing');
  window.removeEventListener('mousedown', handleMouseDownOnce);
  window.addEventListener('keydown', handleFirstTab);
};
window.addEventListener('keydown', handleFirstTab);

/* -----------------------------------------
  Back to Top Button Logic
 ---------------------------------------- */
const backToTopButton = document.querySelector(".back-to-top");
if (backToTopButton) {
  let isBackToTopRendered = false;
  const alterStyles = (isRendered) => {
    backToTopButton.style.visibility = isRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isRendered ? 1 : 0;
    backToTopButton.style.transform = isRendered ? "scale(1)" : "scale(0)";
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      if (!isBackToTopRendered) { isBackToTopRendered = true; alterStyles(true); }
    } else {
      if (isBackToTopRendered) { isBackToTopRendered = false; alterStyles(false); }
    }
  });
}

/* -----------------------------------------
  DYNAMIC BLOG POST AND CARD LOGIC (FINAL ROBUST VERSION)
 ---------------------------------------- */

const cardsContainer = document.querySelector('.cards');
const overlay = document.querySelector('.overlay');
let currentlyOpenCard = null;

function handleWindowClick(event) {
  if (currentlyOpenCard && !currentlyOpenCard.contains(event.target)) {
    closeCard();
  }
}

// --- Card Logic ---
function openCard(card) {
  if (currentlyOpenCard) return;
  currentlyOpenCard = card;
  card.classList.add('card--enlarged');
  setTimeout(() => {
    overlay.classList.add('is-visible');
    card.classList.add('is-visible');
  }, 10);

  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    window.addEventListener('click', handleWindowClick);
  }, 0);
}

function closeCard() {
  if (!currentlyOpenCard) return;
  overlay.classList.remove('is-visible');
  currentlyOpenCard.classList.remove('is-visible');
  document.body.style.overflow = 'auto';
  window.removeEventListener('click', handleWindowClick);
  
  
  setTimeout(() => {
    if (currentlyOpenCard) {
      currentlyOpenCard.classList.remove('card--enlarged');
      currentlyOpenCard = null; 
    }
  }, 100); 
}


function createCardHTML(post) {
  return `
    <li class="card" data-post-id="${post.id}">
      <div class="card__content-wrapper"> 
        <h3 class="card-title">${post.title}</h3>
        <div class="card-content">${post.summary}</div>
        <div class="card-full-content">${post.fullContent}</div>
      </div>
      
      <button class="card__close-btn">&times;</button>
    </li>
  `;
}

function attachInitialListeners(cards) {
  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      if (card.classList.contains('card--enlarged') || event.target.closest('a')) return;
      openCard(card);
    });
    
    const closeButton = card.querySelector('.card__close-btn');
    if (closeButton) {
      closeButton.addEventListener('click', (event) => {
        event.stopPropagation(); 
        closeCard();
      });
    }
  });
}


async function loadPosts() {
  try {
    const response = await fetch('posts.json');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const posts = await response.json();
  
    posts.reverse();

    cardsContainer.innerHTML = posts.map(createCardHTML).join('');
    attachInitialListeners(document.querySelectorAll('.card'));

  } catch (error) { 
    console.error('Error fetching or displaying posts:', error);
    cardsContainer.innerHTML = '<p style="color: var(--pink);">Could not load blog posts.</p>';
  }
}

document.addEventListener('DOMContentLoaded', loadPosts);