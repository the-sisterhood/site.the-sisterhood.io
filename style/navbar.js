var bar = '<div class="textbar">' + 
'    <a style="font-weight: bold;" href="index">The Sisterhood</a>' +
'    <a href="members">Members</a>' +
'    <a href="about">About Us</a>' +
'    <a href="themes">Themes</a>' +
'    <a href="quotes">Quotes</a>' +
'    <a href="news">News</a>' +
'</div>';

var backtrack = '../';

function loadNavBar(backtracks, ignore) {
    var display = "" + bar;
    
    if (ignore) display = display.replace('href="' + ignore + '"', "");
    if (backtracks && backtracks > 0) display = display.replace(/href="/g, 'href="' + new Array(backtracks).fill(backtrack).join());
    
    document.getElementById('navbar').innerHTML = display;
}