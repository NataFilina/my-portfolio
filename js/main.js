window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs_item");

  tabs.forEach((elem) => {
    elem.addEventListener("click", () => {
      elem.classList.toggle("tabs_item_active");
    });
  });
});
$(".variable-width").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});
