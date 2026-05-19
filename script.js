const filterButtons = document.querySelectorAll(".skill-filter");
const projectCards = document.querySelectorAll(".project-card");
const filterStatus = document.getElementById("filterStatus");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    const label = button.textContent;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });
    button.classList.add("active");

    projectCards.forEach((card) => {
      const tags = card.dataset.tags?.split(" ") || [];
      const shouldShow = filter === "all" || tags.includes(filter);

      card.classList.toggle("hidden", !shouldShow);

      if (shouldShow) {
        visibleCount++;
      }
    });

    filterStatus.textContent =
      filter === "all"
        ? "Showing all projects."
        : `Showing ${visibleCount} ${label} project${visibleCount === 1 ? "" : "s"}.`;
  });
});
