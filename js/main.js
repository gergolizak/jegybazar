// Callback függbény fade után
function fadeDone() {
    console.log(this);
}

// Eseménykezelő beállítása
$("p").click(function(){
    //$(this).hide();
    //$(this).fadeTo(5000, 1, fadeDone);
    //$(this).slideDown(3500).css("color", "blue");
});

// Esemény kiválasztása
//$("p").click();

// Kattintás megelőzése
$("nav a.nav-link").click( function(ev) {
    ev.preventDefault();
    startPageChange(this, 1, false);
});
function startPageChange(elem, num, bool) {
    var link = $(elem);
    var prop = link.data("prop")    || "opacity";
    var val = link.data("value")    || "0";
    var speed = link.data("speed")  || 1000;
    var settings = {};
    settings[prop] = val;

    $(document.body).animate(settings, speed, function() {
        document.location = link.attr("href");
    });
}