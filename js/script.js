$(document).ready(function() {
    var searchInput = $("#searchInput");
    searchInput.autocomplete({
        minLength: 3,
        source: function(request, response) {
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php",
                dataType: "jsonp",
                data: {
                    action: "opensearch",
                    format: "json",
                    search: request.term
                },
                success: function(data) {
                    response(data[1]);
                }
            });
        }
    });
    $("#searchForm").submit(function(event) {
        event.preventDefault();
        var searchTerm = searchInput.val();
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                action: "query",
                format: "json",
                list: "search",
                srsearch: searchTerm,
                srlimit: 5,
                srinfo: "totalhits",
                srprop: "snippet"
            },
            success: function(data) {
                var results = data.query.search;
                displaySearchResults(results);
            }
        });
    });
    searchInput.keypress(function(event) {
        if (event.keyCode === 13) { 
            $(this).autocomplete("close");
            $("#searchForm").submit(); 
        }
    });

    function displaySearchResults(results) {
        var html = "<ul >";
        if (results.length > 0) {
            results.forEach(function(result) {
                html += "<li ><a href='https://en.wikipedia.org/wiki/" + encodeURIComponent(result.title) + "' target='_blank'>" + result.title + "</a> - " + result.snippet + "</li>";
            });
        } else {
            html += "<li >No results found</li>";
        }
        html += "</ul>";
        $("#searchResults").html(html);
    }
});
