c = require("choreographer");
t = require("timer");
var  video  = {

  name   : __appName,
        target : __targetName,
        targetId : __targetId,
  	_coreDoc: null, 

	element:null,

	start : function () { 

		this.element = this._coreDoc.createElement("div");

		this.elementv = this._coreDoc.createElement('video');
		this.elementv.setAttribute('width', '1000');
		//this.elementv.setAttribute('height', '360');
		this.elementv.setAttribute('autoplay', 'true');
		this.elementv.setAttribute('style', 'padding-left:0px');
		//this.elementv.setAttribute('src', 'com/taboca/videoexample/formiga.ogg');
		this.elementv.setAttribute('src', '');
		this.element.appendChild(this.elementv);
                this._coreDoc.getElementById(this._getId()).appendChild(this.element);

		var thiss = this; 
		t.setTimeout( function () { thiss.kick() } , 2000); 
	} ,

	images: ['i1.ogg','i2.ogg','i3.ogg','i4.ogg','org/fisl/videoexample/i5.ogg','org/fisl/videoexample/i6.ogg'], 
	titles: ['Abertura Oficial', 'Enquete ','Fabricio Solagna','josé fortunati',"manuela d'avila","Murilo"], 
	timing: [ 3*60*1000+11000, 2*60*1000+32000, 2*60*1000+44000, 1*60*1000+27000  ], 

	cc:-1,
	kick : function () { 

		this.cc++;
		if(this.cc>=15) { this.cc=0 } 

		this._dump(this.images[this.cc]);

		this.element.innerHTML="<video src='org/fisl/videoexample/i"+this.cc+".ogg' width='950' autoplay='true' style='padding-left:0px' />";

		var thiss = this; 
		t.setTimeout( function () { thiss.kick() } , this.timing[this.cc]); 

	},

	init : function () {


	}

}

c.register(video);
