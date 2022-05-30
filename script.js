const tagListElement = document.querySelector('.tagList');
const elementsForFiltering = document.querySelectorAll('div');
const tagList = [
    // whenever new videos are made add tags as required
    "sensor",
    "install",
    "how to",
    "app",
];

function generateTagList() {
    // loop through the tag list
    tagList.forEach(tag => {
        // generate HTML elements
        let li = document.createElement("li");
        // create and append text node with the tag value
        li.appendChild(document.createTextNode(tag));
        // add class
        li.classList.add('tagList__tag');

        // add eventlisteners  
        li.addEventListener('click', () => {
            console.log(li.textContent);
            filterTags(li.textContent);
        });

        // add to list
        tagListElement.appendChild(li);

    });

}

function filterTags(tag) {
    console.log('filtering for tag: ', tag);

    elementsForFiltering.forEach(element => {
        let tags = element.dataset.tags.split(',');
        // check if the set of tags includes any of the terms in set in the filters
        console.log(tags);
        if (tags.some(r => [tag].includes(r))) {
            console.log('found!');
            element.classList.add('active');
            element.classList.remove('inactive');
        } else {
            element.classList.remove('active');
            element.classList.add('inactive');
        }
        console.log(tags.some(r => tagList.includes(r)));
        console.log(tags);
    });

}

function resetAllFilters() {
    elementsForFiltering.forEach(element => {
        element.classList.remove('active');
        element.classList.remove('inactive');
    });
}
generateTagList();

document.querySelector('.resetFilters').addEventListener('click', resetAllFilters);