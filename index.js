function changeBackground(url) {
  document.body.style.backgroundImage = `url(${url})`;
  const divs = document.getElementsByTagName("div");
  for (let i = 0; i < divs.length; i++) {
    divs[i].style.backgroundImage = `url(${url})`;
  }
  const audio = new Audio("./img/sound.mp3");
  audio.play();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeExpandedCard();
  }
});

function openLink(cardType) { 
  fetch(`markdown/${cardType}.md`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch Markdown file for ${cardType}`);
      }
      return response.text();
    })
    .then((markdownContent) => {
      const htmlContent = marked(markdownContent);

      document.querySelectorAll(".card-container").forEach((card) => {
        card.style.opacity = "0";
        card.style.pointerEvents = "none";
      });

      const expandedCard = document.getElementById("expandedCard");

      expandedCard.classList.add("active");
      document.getElementById("expandedTitle").innerText = cardType;
      document.getElementById("expandedContent").innerHTML = htmlContent;
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

function closeExpandedCard() {
  document.querySelectorAll(".card-container").forEach((card) => {
    card.style.opacity = "1";
    card.style.pointerEvents = "auto";
  });
  document.getElementById("expandedCard").classList.remove("active");
}

const buttons = document.querySelectorAll(".button");
const animationDuration = 150;

buttons.forEach((button) => {
  const tooltip = button.querySelector(".tooltip");

  let opacity = 0;
  let animationFrameId = null;
  button.addEventListener("mouseenter", () => {
    cancelAnimationFrame(animationFrameId);
    animateTooltip(tooltip, 0.95);
  });

  button.addEventListener("mouseleave", () => {
    cancelAnimationFrame(animationFrameId);
    animateTooltip(tooltip, 0);
  });

  function animateTooltip(element, targetOpacity) {
    const duration = animationDuration;
    let startTime;

    function step(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }
      const progress = Math.min(1, (timestamp - startTime) / duration);

      opacity = lerp(opacity, targetOpacity, progress);
      element.style.opacity = opacity;
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (targetOpacity === 0) {
          element.style.visibility = "hidden";
        } else {
          element.style.visibility = "visible";
        }
      }
    }
    if (targetOpacity > 0) {
      element.style.visibility = "visible";
    }
    animationFrameId = requestAnimationFrame(step);
  }
  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }
});
