export const scrollToAnchor = (anchorName: string) => {
  const anchor = document.querySelector(`a[name="${anchorName}"]`);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" });
  }
};
