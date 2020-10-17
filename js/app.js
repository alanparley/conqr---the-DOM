document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const bucketListItem = createBucketListItem(event.target);
    const bucketList = document.querySelector('#bucket-list');
    bucketList.appendChild(bucketListItem);

    event.target.reset();
}

const createBucketListItem = function (form) {
    const bucketListItem = document.createElement('li');
    bucketListItem.classList.add('bucket-list-item');

    const city = document.createElement('h4');
    city.textContent = form.city.value.toUpperCase();
    bucketListItem.appendChild(city);

    const country = document.createElement('h3');
    country.textContent = form.country.value;
    bucketListItem.appendChild(country);

    const continent = document.createElement('p');
    continent.textContent = form.continent.value;
    bucketListItem.appendChild(continent);

    const visited = document.createElement('p');
    visited.textContent = form.visited.value;
    bucketListItem.appendChild(visited)

    return bucketListItem;

}

const handleDeleteAllClick = function (event) {
    const bucketList = document.querySelector('#bucket-list');
    bucketList.innerHTML = '';
}