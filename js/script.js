let lastSearchedUser = '';
let lastSearchedUserId = '';
$("#searchForm").submit(function (event) {
    event.preventDefault();
    var searchInput = $("#searchInput").val();
    //scroll
    if (searchInput === lastSearchedUser) {
        var lastRow = $(".col-md-12.text-light:last-of-type");
        if (lastRow.length > 0) {
            $('html, body').scrollTop(lastRow.offset().top);
        }
        return;
    }
    //fetch
    fetch("https://api.github.com/users/" + searchInput)
    .then(response => response.json())
    .then(response => displaySearchResults(response));
    //display
    function displaySearchResults(response) {
        var searchResults = document.getElementById("searchResults");
        var searchRow = document.createElement("div");
        searchRow.classList.add("col-md-12", "text-light");
        var userId = response['id'];
        searchRow.setAttribute("id", "i" + userId);
        if (response['created_at']) { //exist
            searchRow.innerHTML = `
                ${response['avatar_url'] ? `<img class="mb-3" style="width:150px" src="${response['avatar_url']}">` : ''}
                ${response['name'] ? `<p><strong>Name:</strong> ${response['name']}</p>` : ''}
                ${response['company'] ? `<p><strong>Company:</strong> ${response['company']}</p>` : ''}
                ${response['email'] ? `<p><strong>Email:</strong> ${response['email']}</p>` : ''}
                ${response['followers'] !== null ? `<p><strong>Followers:</strong> ${response['followers']}</p>` : ''}
                ${response['following'] !== null ? `<p><strong>Following:</strong> ${response['following']}</p>` : ''}
                ${response['public_repos'] !== null ? `<p><strong>Public Repos:</strong> ${response['public_repos']}</p>` : ''}
                <div class="row">
                <div class="col-md-12 mt-1 border-success">
                <hr class="line-edit border-success">
                </div>
                </div> `;
            searchResults.appendChild(searchRow);
        }
        lastSearchedUser = searchInput;
        lastSearchedUserId = userId;
    }
});