google.load("feeds", "1");
  function initialize() 
  {
    var feed = new google.feeds.Feed("http://techzei.com/feed");
    feed.setNumEntries(9);
    feed.load(function (result) {
      if (!result.error) 
      {
        result.feed.entries.forEach(function(entry)
        {
        	var images = $(entry.content).find('img').map(function(){
                       return $(this).attr('src')
                       }).get();
          //var placeholder = placeholder.png;
            $('#feed').append('<div class="card"><a href="' + entry.link + '">' + entry.title + '</a><p>' + entry.contentSnippet + '</p><br><p class="pubdate">'+ entry.publishedDate +'"</p> <br> <img src="'+(images.length == 0 ? 'placeholder.png' : images[0])+'"/></div>');
          //$('#feed').append('<div class="card"><img src="'+ images[0] +'"/><a href="' + entry.link + '">' + entry.title + '</a><p>' + entry.contentSnippet + '</p><br><p>'+ entry.publishedDate +'"</p></div>');
        //  $('#feed').append('<div class="card"><a href="' + entry.link + '">' + entry.title + '</a><p>' + entry.contentSnippet + '</p><br><p>'+entry.publishedDate+'</div>');
        });
      }
    });
  }
  google.setOnLoadCallback(initialize);