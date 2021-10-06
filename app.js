var main = function () {
"use strict";
$(".comment-input #one").on("click", function (event) {
var $new_comment = $("<p>"),
comment_text = $(".comment-input input").val();
$new_comment.text(comment_text);
$(".comments").append($new_comment);
});
};
$(document).ready(main);



/*var max = function () {
"use strict";
$("#aga").on("click", function (event) {
$("body").append("<p>rrr</p>");
});
};
$(document).ready(max); */

