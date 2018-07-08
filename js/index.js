import Tab from './tab.js';
import TabBar from './tab-bar.js';

const tabBarElement = document.querySelector('.tab-bar');
const tabElements = Array.of(...document.querySelectorAll('.tab'));
const panelElements = document.querySelectorAll('.panel');

const tabBar = new TabBar({
    element: tabBarElement,
    tabs: tabElements.map(element => new Tab({ element })),
    onChange: handleChange
});


function handleChange(activeTab) {
    panelElements.forEach(panel => {
        if (panel.id === activeTab.id) {
            panel.classList.add('active');
        } else {
            panel.classList.remove('active');
        }
    })
}