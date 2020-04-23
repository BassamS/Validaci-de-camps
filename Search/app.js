
document.addEventListener('DOMContentLoaded', function () {
  let searchpara = document.getElementById("search_para").innerHTML;
  searchpara = searchpara.toString();
  document.getElementById("search").onclick = function () { highlight_word(searchpara) };
}, false);

function highlight_word(searchpara) {
  let text = document.getElementById("search_text").value;
  if (text) {
    let pattern = new RegExp("(" + text + ")", "gi");
    let new_text = searchpara.replace(pattern, "<span class='highlight'>" + text + "</span>");
    document.getElementById("search_para").innerHTML = new_text;
  }

  if (text.length < 3) {
    alert('Search word should be greater than 3 letters');
  }
}