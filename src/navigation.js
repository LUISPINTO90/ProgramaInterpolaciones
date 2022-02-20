let tabs = document.querySelectorAll(".tabs h3");
let tabsContents = document.querySelectorAll(".tabsContent div");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabsContents.forEach(content => {
            content.classList.remove("active")
        });
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tabsContents[index].classList.add("active");
        tabs[index].classList.add("active");
    });
});