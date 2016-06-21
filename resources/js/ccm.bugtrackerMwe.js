ccm.component({name:"bugtrackerMwe",config:{html:[ccm.store,{local:"./templates.json"}],remoteStore:[ccm.store,{store:"bugtracker",url:"http://ccm2.inf.h-brs.de/index.js"}],key:"bugtracker",style:[ccm.load,"http://moritzkemp.github.io/bugtracker-mwe/resources/css/bug.css"]},Instance:function(){var e=this;e.render=function(o){var s=ccm.helper.element(e),r=function(t){s.html(ccm.helper.html(e.html.get("main")));var o=ccm.helper.find(e,".bugs-overview"),r=$(ccm.helper.html(e.html.get("header"),{bugIdTitle:"ID",nameTitle:"Name",statusTitle:"Status",subscriberTitle:"Subscriber",descriptionTitle:"Describtion"}));r.appendTo(o);for(var n=0;t[n];){var i=$(ccm.helper.html(e.html.get("bug"),{bugId:t[n].bugId,subscriber:t[n].subscriber,description:t[n].description,status:t[n].state,name:t[n].name}));i.appendTo(o),n++}i.append("<br><button class='new_bug'>Neuer Bug</button>"),i.find(".new_bug").click(function(){o.html("<h2>Add a new bug ...</h2><form><label for='bug_subject'>Subject</label><textarea id='subject' name='ta_subject' cols='20' rows='5' required></textarea><br><label for='bug_status'>Status</label> <select name='Status'><option value='neu'>Neu</option><option value='in_bearb'>in Bearbeitung</option><option value='umgesetzt'>Umgesetzt</option></select><br><label for='bug_prio'>Priorität</label> <select name='Priorität'><option value='niedrig'>niedrig</option><option value='mittel'>mittel</option><option value='hoch'>hoch</option></select><br><button class='return_to_overview'>Bug-Überblick</button></form>")})},n=function(){return $(this).hasClass("no-order")?($(this).removeClass("no-order"),$(this).addClass("asc"),void t(0)):$(this).hasClass("asc")?($(this).removeClass("asc"),$(this).addClass("desc"),void t(1)):void($(this).hasClass("desc")&&($(this).removeClass("desc"),$(this).addClass("asc"),t(0)))},i=function(){console.log("Add new Bug!")};e.remoteStore.get(function(e){r(e),$(".current-status-header").click(n),$(".new_bug").click(i)}),o&&o()},e.storeBug=function(t){e.remoteStore.set({bugId:t.bugId,context:t.context,subscriber:t.subscriber,description:t.description,name:t.name,state:t.state})},e.removeBug=function(t){t.key||console.log("Bug not persisted yet. Skip delete request."),e.remoteStore.del(t.key,function(){console.log("Delete bug with key "+t.key)})};var t=function(e){var t=$(".bugs-overview"),o=t.find(".bug");o.remove(),e=0===e?["open","pending","closed"]:["closed","pending","open"],e.forEach(function(e){o.each(function(){$(this).find(".current-status").html()===e&&$(this).appendTo(t)})})}}});