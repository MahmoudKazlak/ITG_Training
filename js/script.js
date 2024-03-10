let lastSearchedUser = '';
let lastSearchedUserId = '';
let existingRows = {};

$("#searchForm").submit(function (event) {
    event.preventDefault();
    var searchInput = $("#searchInput").val();

    //check
    if (searchInput === lastSearchedUser) {
        var lastRow = $("#i" + lastSearchedUserId);
        if (lastRow.length > 0) {
            $("#searchResults tbody").append(lastRow);
            $('html, body').animate({
                scrollTop: lastRow.offset().top
            }, 0);
        }
        $("#searchInput").val('');
        return;
    }
    //check
    if (existingRows[searchInput]) {
        var existingRow = $("#i" + existingRows[searchInput].id);
        existingRow.appendTo("#searchResults tbody");
        $('html, body').animate({
            scrollTop: existingRow.offset().top
        }, 0);
        $("#searchInput").val('');
        return;
    }

    //fetch

    fetch("https://api.github.com/users/" + searchInput) 
        .then(response => response.json())
        .then(response => {
            displaySearchResults(response);
            existingRows[searchInput] = response; 
        });
});

//display
function displaySearchResults(response) {
    var searchResults = $("#searchResults tbody");
    var searchRow = $("<tr>").addClass("");
    var userId = response['id'];
    searchRow.attr("id", "i" + userId);
    if (response['created_at']) { 
        searchRow.append(`
            <td>${response['avatar_url'] ? `<img style="width:100%"  src="${response['avatar_url']}">` : ''}</td>
            <td>${response['name'] ? response['name'] : ''}</td>
            <td>${response['company'] ? response['company'] : ''}</td>
            <td>${response['email'] ? response['email'] : ''}</td>
            <td>${response['followers'] !== null ? response['followers'] : ''}</td>
            <td>${response['following'] !== null ? response['following'] : ''}</td>
            <td>${response['public_repos'] !== null ? response['public_repos'] : ''}</td>
        `);
        searchResults.append(searchRow);
        $('html, body').animate({
            scrollTop: searchRow.offset().top
        }, 0);
    }
    //clear
    $("#searchInput").val('');
    lastSearchedUser = searchInput;
    lastSearchedUserId = userId;
}
