$(document).ready(function() {
    function displayCheck(element) {
        $(element).find('.fa-check').addClass("d-block").removeClass("d-none");
        $(element).css("color","white");    
        $(element).css("background-color", "gray");
        $(element).css("text-decoration", "line-through");
    }    
    function deleteTask(element) {
        $(element).closest('li').remove();
    }
    $("#myToDoList").submit(function(event) {
        event.preventDefault();
        var newTaskCont = $("#newTask").val().trim();
        if(newTaskCont.length > 0) {
            $("#list-group").append(`
                <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-check text-success d-none"></i>
                        <span class="ms-5">${newTaskCont}</span>
                    </div>
                    <a href="#!" class="delete-task" data-mdb-toggle="tooltip" title="Remove item">
                        <i class="fas fa-times text-primary"></i>
                    </a>
                </li>
            `);
            $("#newTask").val("");
        }
    });

    $("#list-group").on("click", "li", function() {
        displayCheck(this);
    });

    $("#list-group").on("click", ".delete-task", function(event) {
        deleteTask(this);
    });
});
