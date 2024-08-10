// console.log($("h1").css("color"))

$("h1").addClass("gamer");

$("h1").html("<h2>SUPPP</h2>");
$("button").html("<h2>dare u click me</h2>");

$("h1").click(() => {
  $("h1").css("color", "purple");
    $("h1").fadeToggle();
});

$("button").click(() => {
  $("button").css("color", "purple");
  $("button").remove();
});

$("body").keypress((e) => {
  console.log(e.key);
  $("h1").html(e.key);
});

$("h1").before("<h2>Gamer</h2>");
$("h1").append("<h2>tamer</h2>");
