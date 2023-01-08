const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");
const buttons = list.querySelectorAll('button');

// we need an array to hold our state
const items = [];

function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted!!!");
    // hold and log the value input
    const name = e.currentTarget.item.value;
    // console.log(name);
    const item = {
        name: name,
        id: Date.now(),
        complete: false
    }
    // if it's empty, then don't submit it.
    if (!name) return;

    // push these items to our state
    items.push(item);
    console.log(`There are now ${item.length} in your state`);

    // clear the form
    // event.currentTarget.item.value = '';
    e.target.reset();

    // fire off a custom event that will tell anyone else who cares that the items have been updated!
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}
list.addEventListener('itemsUpdated', (e) => {
    console.log(e);
});

// display the items that are in our state
function displayItems() {
    console.log(items);
    const html = items
        .map(
            (item) => `<li class="shopping-item">
                <input
                    type="checkbox"
                    value="${item.id}"
                    ${item.complete ? 'checked' : ''}
                    >
                <span class="itemName">${item.name}</span>
                <button
                    aria-label="Remove ${item.name}"
                    value="${item.id}"
                >&times;</button>
                </li>`
        )
        .join("");
    list.innerHTML = html;
}

// create a function that will mirror our data to localstorage
function mirrorToLocalStorage() {
    localStorage.setItem(items, JSON.stringify(items));
    console.info('Saving items to localstorage');
};

// restores from localstorage when you load the page
function restoreFromLocalStorage() {
    console.log('Restoring from LS');
    const lsItems = JSON.parse(localStorage.getItem("item"));
    // pull the items from LS
    if (lsItems.length) {
        // items = lsItems;
        // lsItems.forEach(item => items.push(item));
        // items.push(lsItems[0], lsItems[1]);
        items.push(...lsItems);
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

function deleteItem(id) {
    // update our items array without this one
    console.log("Deleting Item!", id);
    // find the item's index
    items = items.filter(item => item.id !== id);
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function markAsComplete(id) {
    console.log("Marking as complete!", id);
    let itemRef = items.find((item) => item.id === id);
    itemRef.complete = !itemRef.complete;
    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener("itemsUpdated", displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);
// event delegation: We listened for the click on the list <ul>
// but then delegate the click over to the button if that is what was clicked.
list.addEventListener('click', function (e) {
    const id = parseInt(e.target.value);
    if (e.target.matches('button')) {
        deleteItem(id);
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
});
restoreFromLocalStorage();