com.taboca.upvisor.registerWidget( null , "com/icmc/3pane/gfxless.js","container");
com.taboca.upvisor.registerWidget( null , "com/taboca/calendar/calendar-icmc-3pane.js","calendar");
com.taboca.upvisor.registerWidget( null , "com/icmc/bg/bg.js","bgsemana");

com.taboca.upvisor.registerWidget( ".container" , "com/taboca/clock/clock.js","clock", "area_bottomright");
com.taboca.upvisor.registerWidget( ".container" , "com/icmc/rss-palestras/rss.js","twitter", "area_panel2");
com.taboca.upvisor.registerWidget( ".container" , "com/taboca/twitter-bloco1/twitter.js","redesocial", "area_panel3");
com.taboca.upvisor.registerWidget( ".container" , "com/taboca/typing/typing.js","uspmain", "area_bottom");

com.taboca.upvisor.startEngine( function () { com.taboca.upvisor.raiseEvent(".calendar", "start"); } ); 






