c     = require("choreographer");
timer = require("timer");

var twitter =  {
	name   : __appName,
        target : __targetName,
        targetId : __targetId,
	crop    : "50",
	title   : "Twitter 10",
	feedURL : "http://softwarelivre.org/fisl11/noticias/feed",
	feed    : null, 
	style : <><![CDATA[
		.tweetdate { 
			color:gray;
			font-weight:bold;
			font-size:18px;
			margin-right:.5em;
			border-right:6px solid white;
			padding-right:.5em
		}
		.tweetauthor { 
			color:gray; 
		} 
		.tweetpublic { 
			color:black;
			font-size:20px;
			font-weight:bold;
			background-color: rgba(230,230,230,1);
			-moz-border-radius:20px;
			padding:10px;
			margin-bottom:15px;
		} 
		.twitterPanel { 
			width:1000px;
		} 
		.newsdesc { 
			font-size:18px;
			
		} 
	]]></>, 
	start : function() {

                this.elementStore = this._coreDoc.createElement('div');
		this.elementStore.setAttribute("id","storetemp");
		this._coreDoc.getElementById(this._getId()).appendChild(this.elementStore);

		this.element = this._coreDoc.createElement('div');

		this.element.className="twitterPanel";
		this.element.id = Math.random();
		this.tweetQueue = new Array();

		var first = this._coreDoc.createElement("div");
		this.firstId = "firsttwitter";
		first.id = this.firstId;

		this.tweetRepeated = {};
		this.element.appendChild(first);
		this._coreDoc.getElementById(this._getId()).appendChild(this.element);
		var self = this;
		timer.setTimeout( function(){self.updateFeed()},10000);
	},
	init : function () { 
	 	var style = this._coreDoc.createElementNS("http://www.w3.org/1999/xhtml", "style");
		this._coreDoc.getElementById("headtarget").appendChild(style);
		style.innerHTML=this.style; 
		//this.feed = new this._service_google.feeds.Feed(this.feedURL);
		this.feed = this._service_jquery;
	} ,
	popTweet : function() {
		if (this.tweetQueue.length == 0) return false;
		var t = this.tweetQueue.pop();
		if (t in this.tweetRepeated) {
			return;
		}
		this.tweetRepeated[t] = true;
		var k = this._coreDoc.createElement('div');
		k.className = 'tweetpublic';
		k.innerHTML = t;
		this.element.insertBefore(k, this.element.firstChild);
		return true;
	},

	updateFeed : function() {
		if (! this.popTweet()) {
			var self =this; 
			this.feed.ajax( { type:"GET", url: this.feedURL, dataType: "xml", success: function (xml) {  self.__feedUpdated(xml) } });
		}
		var self = this;
		timer.setTimeout( function(){self.updateFeed()},10000);
	},
	__feedUpdated : function(xml) {

		var self  = this; 
		this.feed(xml).find('item').each(function(){
			var pubDate = self.feed(this).find('pubDate').text();
			var description = self.feed(this).find('description').text();
			var title   = self.feed(this).find('title').text();
			var link    = self.feed(this).find('link').text();
	
			//self.tweetQueue.push(  title + ' <div class="tweetauthor">(FISL)</div><div class="tweetdate">' + pubDate + '</div>');
			self.tweetQueue.push(  title + '<div class="newsdesc">' + description + '</div>');

		});

	}
}
c.register(twitter);
