google.load("feeds", "1");

              function initialize() {

                  var feed = new google.feeds.Feed("http://techzei.com/feed");
                 feed.setNumEntries(4);
                 feed.load(function (result) {
                
                if (!result.error) 
                {
                  result.feed.entries.forEach(function(entry)
                  {
                      var images = $(entry.content).find('img').map(function(){
                                 return $(this).attr('src')
                                 }).get();
                      $('#feed').append(' <div class="list-group-item"> <div class="row-picture"> <img class ="circle" alt ="icon" src="' + (images.length == 0 ? 'placeholder.png' : images[0]) + '"/>  </div><a class="title" href="' + entry.link + '"> <div class="row-content"><h4 class="list-group-item-heading">' + entry.title + '</h4></a>   <p class="list-group-item-text">'+ entry.contentSnippet+'</p>  </div> </div>    <div class ="list-group-separator"></div> ');
                  });
                }
              });

              
              var feed1 = new google.feeds.Feed("http://the4cast.com/feed/");
              feed1.setNumEntries(4);
              feed1.load(function (result) {
                if (!result.error) 
                {
                  result.feed.entries.forEach(function(entry)
                  {
                      var images = $(entry.content).find('img').map(function(){
                                 return $(this).attr('src')
                                 }).get();
                      $('#feed1').append(' <div class="list-group-item"> <div class="row-picture"> <img class ="circle" alt ="icon" src="' + (images.length == 0 ? 'placeholder.png' : images[0]) + '"/>  </div><a class="title" href="' + entry.link + '"> <div class="row-content"><h4 class="list-group-item-heading">' + entry.title + '</h4></a>   <p class="list-group-item-text">'+ entry.contentSnippet+'</p>  </div> </div>    <div class ="list-group-separator"></div> ');
                  });
                }
              });


              var feed2 = new google.feeds.Feed("http://reddit.com/r/AppHookup/.rss");
              feed2.setNumEntries(4);
              feed2.load(function (result) {
                if (!result.error) 
                {
                  result.feed.entries.forEach(function(entry)
                  {
                      var images = $(entry.content).find('img').map(function(){
                                 return $(this).attr('src')
                                 }).get();
                      $('#feed2').append(' <div class="list-group-item"> <div class="row-picture"> <img class ="circle" alt ="icon" src="' + (images.length == 0 ? 'placeholder.png' : images[0]) + '"/>  </div><a class="title" href="' + entry.link + '"> <div class="row-content"><h4 class="list-group-item-heading">' + entry.title + '</h4></a>   <p class="list-group-item-text">'+ entry.contentSnippet+'</p>  </div> </div>    <div class ="list-group-separator"></div> ');
                  });
                }
              });

              

          }
              google.setOnLoadCallback(initialize);
