var url = "http://books.chec.kr?q=";

function init() {
      K("searchBox").focus();
      K("searchButton").addEventListener("click",_search,false);
      K("searchBox").addEventListener("keyup",_keyUp,false);
}

function _keyUp(e) {

    if (e.keyCode==13) {
        _search();
    }

} 

function _search() {

    var anfrage = K("searchBox").value;
    chrome.tabs.create({url:url+anfrage})
}     

function K(id) {
    return document.getElementById(id);
} 
