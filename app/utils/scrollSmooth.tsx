export const scrollSmooth = (textToGo: string) => {
  const element = document.getElementById(textToGo);
  if (element) {
    window.scrollTo({
      behavior: "smooth",
      top: element.offsetTop,
    });
  }
};
