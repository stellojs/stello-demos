
(function($) {
  var searchResultTpl = $('#search-result-tpl').html();

  $(function() {
    var doSearch = function() {
      var val = $('.site-search')[0].value.toLowerCase()
        , $resultContainer = $('.search-results')
        , $noResults = $('.no-search-results')
        , hasSearchResults = false;

      $resultContainer.empty();

      if(val.length < 2) {
        $noResults.show();
        return;
      }
      
      $.each(searchData, function(ix, d) {
        if(~d.name.toLowerCase().indexOf(val) || ~d.desc.toLowerCase().indexOf(val)) {
          $(searchResultTpl)
            .prependTo($resultContainer)
            .show()
            .find('a')
            .text(d.name).attr('href', d.link);
          hasSearchResults = true;
        }
      });

      if(hasSearchResults) {
        $noResults.hide();
      } else {
        $noResults.show();
      }
    };

    $('.site-search').on('change keyup', _.debounce(doSearch, 300));
  });
}(jQuery));
