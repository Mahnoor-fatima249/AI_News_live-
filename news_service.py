import feedparser

RSS_FEEDS={

    "pakistan":"https://www.dawn.com/feeds/home",

    "world":"https://feeds.bbci.co.uk/news/world/rss.xml",

    "technology":"https://feeds.bbci.co.uk/news/technology/rss.xml"
}

def get_news(category:str):

    feed_url=RSS_FEEDS.get(category)

    if not feed_url:
        return []

    feed=feedparser.parse(feed_url)

    data=[]

    for item in feed.entries[:20]:

        data.append({
            "title":item.title,
            "link":item.link,
            "published":item.get("published","")
        })

    return data