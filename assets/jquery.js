//MODEL, THIS IS THE DATA IN THE APP

$(document).ready(function () {
  // when the document is reeady (opening the website)

  $("form").on("submit", function () {
    //when the 'add item' is clicked this function will run

    const item = $("form input"); //user input
    const todo = { item: item.val() }; //grabs user input and stores it into an object

    $.ajax({
      type: "POST",
      url: "/todo",
      data: todo,
      success: function (data) {
        //displays data to the frontend
        location.reload(); //reloads the page
      },
    });

    return false;
  });

  $("li").on("click", function () {
    const item = $(this).text().replace(/ /g, "-");
    $.ajax({
      type: "DELETE",
      url: "/todo/" + item,
      success: function (data) {
        location.reload();
      },
    });
  });
});
