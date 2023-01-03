const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelector('[role="tab"]');
const tabPanels = tabs.querySelector('[role="tab"]');

function handleTabClick(event) {
    tabButtons.forEach(button =>
        button.addEventListener('click', handleTabClick));
    console.log(event);
    // hide all tab panels
    tabPanels.forEach(panel => {
        panel.hidden = true;
    });
    // mark all tabs as unselected
    tabButtons.forEach(tab => {
        // tab.ariaSelected = false;
        tab.setAttribute('aria-selected', false);
    });
    // mark the clicked tab as selected
    event.currentTarget.setAttribute('aria-selected', true);
    // find the associated tabPanel and show it!
    const { id } = event.currentTarget;

    // const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
    // console.log(tabPanel);
    // tabPanel.hidden = false;

    // const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

    // const tabPanel = tabPanels.find((panel) => {
    //     if (panel.getAttribute("aria-labelledby") === id) {
    //         return true;
    //     }
    // });

}

