 
		
		com.taboca.upvisor.registerWidget( null , "com/icmc/gfxfullvideo/gfxless.js","container");
		com.taboca.upvisor.registerWidget( null , "com/taboca/calendar/calendar.js","calendar");

		com.taboca.upvisor.registerWidget( ".container" , "com/taboca/clock/clock.js","clock", "area_topright");
//                com.taboca.upvisor.registerWidget( ".container" , "com/icmc/magna/grade.js","grade", "area_midleft");
                com.taboca.upvisor.registerWidget( ".container" , "com/taboca/twitter-slash/twitter.js","twitter", "area_midleft");


		com.taboca.upvisor.startEngine( function () { com.taboca.upvisor.raiseEvent(".calendar", "start"); } ); 






