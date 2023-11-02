function openLink(cardName) {
  const cardLinks = {
    whet: "https://github.com/dazziedez/idkfuckingbotting-",
    posting: "https://discord.gg/catposting",
    credits: "https://www.pixiv.net/en/artworks/106315001",
    pass: "pass.html"
  };

  if (cardLinks.hasOwnProperty(cardName)) {
    window.open(cardLinks[cardName], "_blank");
  }
}
