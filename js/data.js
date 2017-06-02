var reverseDisplay = true;

function loadQuotes(reverse) {
    if (!Quotes || !Quotes.length) return;
    if (reverse) reverseDisplay = !reverseDisplay;
    let display = Quotes.map(q => {
        return '<div class="textbox">' + q.quote + (!q.by && !q.date ? '' : '<div class="signature">' + (q.by || '') + (q.date ? ' [' + q.date + ']' : '') + '</div>') + '</div>';
    });
    
    if (reverseDisplay) display.reverse();
    
    document.getElementById("reverse-button").innerHTML = reverseDisplay ? 'Newest' : 'Oldest';
    document.getElementById("quotes").innerHTML = display.join('<br />');
}

function loadNews(reverse) {
    if (!News || !News.length) return;
    if (reverse) reverseDisplay = !reverseDisplay;
    let display = News.map(n => {
        return '<div class="textbox">"' + n.entry + '"' + (!n.by && !n.date ? '' : '<div class="signature">' + (n.by || '') + (n.date ? ' [' + n.date + ']' : '') + '</div>') + '</div>';
    });
    
    if (reverseDisplay) display.reverse();
    
    document.getElementById("reverse-button").innerHTML = reverseDisplay ? 'Newest' : 'Oldest';
    document.getElementById("quotes").innerHTML = display.join('<br />');
}