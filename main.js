// Sets current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

function selectBuild(buildName) {
  document.getElementById("selected_build").value = buildName;
  window.scrollTo({ top: document.getElementById("contact").offsetTop, behavior: "smooth" });
}
