/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play("title");
         sym.play("sphere");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.play("laser1");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 186, function(sym, e) {
         sym.play("rapegun_laser2");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         yepnope({
             load: "http://cdn.edgecommons.org/an/1.0.2/js/min/EdgeCommons.js",
         	callback: function() {
         		EC.centerStage(sym);
         	}
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "mousemove", function(sym, e) {
         var movementStrength = 100;
         var height = movementStrength / $(window).height();
         var width = movementStrength / $(window).width();
         
         var pageX = e.pageX - ($(window).width() / 2);
         var pageY = e.pageY - ($(window).height() / 2);
         var newvalueX = width * pageX * -1 - 25;
         var newvalueY = height * pageY * -1 - 50;
         sym.$('background2').css({
         'top': ''+newvalueY+'px',
         'left': ''+newvalueX+'px'
         });
         sym.$('stage').css('cursor', 'url(images/cursor.png), pointer');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_background2}", "mousemove", function(sym, e) {
         

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_rapegun_group}", "mouseover", function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'laser1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.play();

      });
      //Edge binding end

   })("laser1");
   //Edge symbol end:'laser1'

   //=========================================================
   
   //Edge symbol: 'sphere'
   (function(symbolName) {   
   
   })("sphere");
   //Edge symbol end:'sphere'

   //=========================================================
   
   //Edge symbol: 'laser2'
   (function(symbolName) {   
   
   })("laser2");
   //Edge symbol end:'laser2'

   //=========================================================
   
   //Edge symbol: 'background'
   (function(symbolName) {   
   
   })("background");
   //Edge symbol end:'background'

   //=========================================================
   
   //Edge symbol: 'rapegun_group'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rapegun}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_rapegun}", "mouseout", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("rapegun_group");
   //Edge symbol end:'rapegun_group'

   //=========================================================
   
   //Edge symbol: 'tesla_group'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_teslaGun}", "mouseover", function(sym, e) {
         sym.play();

      });
         //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_teslaGun}", "mouseout", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("tesla_group");
   //Edge symbol end:'tesla_group'

   //=========================================================
   
   //Edge symbol: 'photon_group'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_photon}", "mouseover", function(sym, e) {
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_photon}", "mouseout", function(sym, e) {
         sym.playReverse();

      });
      //Edge binding end

   })("photon_group");
   //Edge symbol end:'photon_group'

})(jQuery, AdobeEdge, "EDGE-176484570");