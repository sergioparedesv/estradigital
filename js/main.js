$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})


var html = document.querySelector("link[rel='import']").import;
var footer_import = html.getElementById("footer-import");

document.body.appendChild(footer_import.cloneNode(true));