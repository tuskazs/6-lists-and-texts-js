let names = ["Zoltán", "Béla", "Jani", "Gergő", "Viki", "TZsuzsa"];
names.forEach(element => {
  if(element ==="TZsuzsa"){
    $("ul").append('<li id="' + element+ '">' + element + '</li>');
    $("#"+element).css("font-weight","bold");
  
  } else{
    $("ul").append('<li class="' + element+ '">' + element + '</li>');
  }
});

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using JavaScript's jQuery library. How awesome!"
};
$("ul").append('<head>' + additionalBlock.title + '</head>');
$("ul").append('<p>' + additionalBlock.text + '</p>');