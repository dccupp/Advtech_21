function blah(){
    alert("yes");
}

function divWider(){
    document.getElementsByTagName("div")[0].className="wider";
}

onload=init;

function init() {
    document.getElementsByTagName("div")[0].onclick = function(){
        divWider();
    }
}
