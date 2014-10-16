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
            $('#feed').append('<div class="card"><a class="title" href="' + entry.link + '">' + entry.title + '</a><p class="author"> Written by ' + entry.author + '</p><p>' + entry.contentSnippet + '</p> <br> <center> <img src="' + (images.length == 0 ? 'placeholder.png' : images[0]) + '"/></center></div>');
        });
      }
    });
  }
  google.setOnLoadCallback(initialize);