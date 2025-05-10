document.addEventListener("DOMContentLoaded", function () {
  const themeColor = "#1658ae"; // Itt állítod be a központi színt

  let metaTag = document.querySelector('meta[name="theme-color"]');
  if (metaTag) {
    metaTag.setAttribute("content", themeColor);
  } else {
    metaTag = document.createElement("meta");
    metaTag.name = "theme-color";
    metaTag.content = themeColor;
    document.head.appendChild(metaTag);
  }
});
