$(document).ready(function() {

var searchBox = document.querySelector('#searchArticle');

searchBox.addEventListener('keypress', function(e) {
    let searchText = "";
    var search = "";
    var title = "";
    var link = "";
    if(e.which === 13) {
        searchText = this.value;
        let url = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&format=json&limit=5&search=${searchText}`;
        $.getJSON(url, function(data) {
            $.each(data, function(i, index) {
                search = data[0];
                title = data[1][i];
                link = data[3][i];
                $('#results').wrap('ul').append(`<li><a href="${link}">${title}</a></li>`).addClass('links');
            });
        });
        
        $('h1').html('Your Results ').append('<span id="reset" onClick="history.go(0)" VALUE="Refresh"><i class="fa fa-mail-forward"></i></span>');
        $('#random-article-box').remove();
        $('#search-box').remove();
        $('#results').css('height', '100%');
    }//end if
     
    
});

});//end of document