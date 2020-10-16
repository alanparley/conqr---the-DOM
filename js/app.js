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
