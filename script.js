// function myFunction() {
//     // Declare variables
//     let input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('li');

//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];
//         txtValue = a.textContent || a.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

function myFunction() {
    let filters = [myInput];


    const tagsElements = document.querySelectorAll('div,iframe,li');
    console.log(tagsElements);

    // loop through all elements and find matching tags
    tagsElements.forEach(element => {
        let tags = element.dataset.tags.split(',');
        // check if the set of tags includes any of the terms in set in the filters
        if (tags.some(r => filters.includes(r))) {
            console.log('found!');
            element.classList.add('active');
        }
        console.log(tags.some(r => filters.includes(r)));
        console.log(tags);
    });
}