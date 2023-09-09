export const scrollToAnchor = (anchorId: string) => {
  const anchor = document.querySelector(`#${anchorId}`);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" });
  }
};
