function openTab(tabName) {
    var i, tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        if (tabContent[i].id === tabName) {
            tabContent[i].classList.add("active");
        } else {
            tabContent[i].classList.remove("active");
        }
    }
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        if (tabButtons[i].innerText.toLowerCase() === tabName) {
            tabButtons[i].classList.add("active");
        } else {
            tabButtons[i].classList.remove("active");
        }
    }
}