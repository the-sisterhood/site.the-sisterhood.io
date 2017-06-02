var selectedWitch = "";

function findMember(witchName) {
    let member = Members.find(w => getName(w) === witchName);
    return member;
}

function getName(member) {
    if (member.exactName) return (member.alt || member.name);
    return "WitchDoctor" + (member.alt || member.name);
}

function loadMember(witchName) {
    var member = findMember(witchName);
    if (!member) return;
    
    var name = getName(member);
    
    var display = "";
    display += "<p>Name: " + member.name + "</p>";
    if (member.blurb) {
        var blurb = "" + member.blurb;
        if (!/<p>.+<\/p>/i.test(blurb)) blurb = "<p>" + blurb + "</p>";
        display += blurb;
    }
    
    selectedWitch = name;
    loadMemberList();
    
    document.getElementById('member-name').innerHTML = name;
    document.getElementById('member-description').innerHTML = display;
}

function loadMemberList() {
    let display = "<table>" + Members.map(m => {
        let name = getName(m);
        return '<tr><td onclick="loadMember(\'' + name + '\')"' + (selectedWitch === name ? ' style="background: rgba(0,252,0,0.2);"' : '') + '>' + name + '</td></tr>';
    }).join("") + "</table>";
    
    document.getElementById("member-list").innerHTML = '<div style="overflow-y: scroll; max-height: 400px">' + display + '</div>';
}