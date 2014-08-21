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
          $('#feed').append('<div class="card"><a href="' + entry.link + '">' + entry.title + '</a><p>' + entry.contentSnippet + '</p><br><p>'+entry.publishedDate+'</div>');
        });
      }
    });
  }
  google.setOnLoadCallback(initialize);