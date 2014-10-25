(function($){$.widget("ui.menubar",{version:"1.9m6",options:{autoExpand:false,buttons:false,menuIcon:false,position:{my:"left top",at:"left bottom"}},_create:function(){var that=this;var items=this.items=this.element.children("li")
.addClass("ui-menubar-item")
.attr("role","presentation")
.children("button, a");items.slice(1).attr("tabIndex",-1);this.element
.addClass("ui-menubar ui-widget-header ui-helper-clearfix")
.attr("role","menubar");this._focusable(items);this._hoverable(items);items.next("ul")
.menu({position:{within:this.options.position.within},select:function(event,ui){ui.item.parents("ul.ui-menu:last").hide();that._close();$(event.target).prev().focus();that._trigger("select",event,ui);}})
.hide()
.attr({"aria-hidden":"true","aria-expanded":"false"})
.bind("keydown.menubar",function(event){var menu=$(this);if(menu.is(":hidden"))
return;switch(event.keyCode){case $.ui.keyCode.LEFT:that._left(event);event.preventDefault();break;case $.ui.keyCode.RIGHT:that._right(event);event.preventDefault();break;};});items.each(function(){var input=$(this),//
menu=input.next("ul");input.bind("click.menubar focus.menubar mouseenter.menubar",function(event){if(event.type=="focus"&&!event.originalEvent){return;}
event.preventDefault();if(event.type=="click"&&menu.is(":visible")&&that.active&&that.active[0]==menu[0]){that._close();return;}
if((that.open&&event.type=="mouseenter")||event.type=="click"||that.options.autoExpand){if(that.options.autoExpand){clearTimeout(that.timer);}
that._open(event,menu);}})
.bind("keydown",function(event){switch(event.keyCode){case $.ui.keyCode.SPACE:case $.ui.keyCode.UP:case $.ui.keyCode.DOWN:that._open(event,$(this).next());event.preventDefault();break;case $.ui.keyCode.LEFT:that._prev(event,$(this));event.preventDefault();break;case $.ui.keyCode.RIGHT:that._next(event,$(this));event.preventDefault();break;}})
.addClass("ui-button ui-widget ui-button-text-only ui-menubar-link")
.attr("role","menuitem")
.attr("aria-haspopup","true")
.wrapInner("<span class='ui-button-text'></span>");if(that.options.autoExpand){input.bind("mouseleave.menubar",function(event){that.timer=setTimeout(function(){that._close();},150);});menu.bind("mouseleave.menubar",function(event){that.timer=setTimeout(function(){that._close();},150);})
.bind("mouseenter.menubar",function(event){clearTimeout(that.timer);});}
if(that.options.menuIcon){input.addClass("ui-state-default").append("<span class='ui-button-icon-secondary ui-icon ui-icon-triangle-1-s'></span>");input.removeClass("ui-button-text-only").addClass("ui-button-text-icon-secondary");}
if(!that.options.buttons){input.addClass("ui-menubar-link").removeClass("ui-state-default");};});that._bind({keydown:function(event){if(event.keyCode==$.ui.keyCode.ESCAPE&&that.active&&that.active.menu("collapse",event)!==true){var active=that.active;that.active.blur();that._close(event);active.prev().focus();}},focusin:function(event){clearTimeout(that.closeTimer);},focusout:function(event){that.closeTimer=setTimeout(function(){that._close(event);},100);}});},_destroy:function(){var items=this.element.children("li")
.removeClass("ui-menubar-item")
.removeAttr("role")
.children("button, a");this.element
.removeClass("ui-menubar ui-widget-header ui-helper-clearfix")
.removeAttr("role")
.unbind(".menubar");items
.unbind(".menubar")
.removeClass("ui-button ui-widget ui-button-text-only ui-menubar-link ui-state-default")
.removeAttr("role")
.removeAttr("aria-haspopup")
.children("span.ui-button-text").each(function(i,e){var item=$(this);item.parent().html(item.html());})
.end()
.children(".ui-icon").remove();this.element.find(":ui-menu")
.menu("destroy")
.show()
.removeAttr("aria-hidden")
.removeAttr("aria-expanded")
.removeAttr("tabindex")
.unbind(".menubar");},_close:function(){if(!this.active||!this.active.length)
return;this.active
.menu("collapseAll")
.hide()
.attr({"aria-hidden":"true","aria-expanded":"false"});this.active
.prev()
.removeClass("ui-state-active")
.removeAttr("tabIndex");this.active=null;this.open=false;},_open:function(event,menu){if(this.active&&this.active[0]==menu[0]){return;}
if(this.active){this.active
.menu("collapseAll")
.hide()
.attr({ "aria-hidden":"true","aria-expanded":"false"});this.active
.prev()
.removeClass("ui-state-active");}
var button=menu.prev().addClass("ui-state-active").attr("tabIndex",-1);this.active=menu
.show()
.position($.extend({of:button},this.options.position))
.removeAttr("aria-hidden")
.attr("aria-expanded","true")
.menu("focus",event,menu.children("li").first())
.focus()
.focusin();this.open=true;},_prev:function(event,button){button.attr("tabIndex",-1);var prev=button.parent().prevAll("li").children(".ui-button").eq(0);if(prev.length){prev.removeAttr("tabIndex")[0].focus();}else{var lastItem=this.element.children("li:last").children(".ui-button:last");lastItem.removeAttr("tabIndex")[0].focus();}},_next:function(event,button){button.attr("tabIndex",-1);var next=button.parent().nextAll("li").children(".ui-button").eq(0);if(next.length){next.removeAttr("tabIndex")[0].focus();}else{var firstItem=this.element.children("li:first").children(".ui-button:first");firstItem.removeAttr("tabIndex")[0].focus();}},_left:function(event){var prev=this.active.parent().prevAll("li:eq(0)").children(".ui-menu").eq(0);if(prev.length){this._open(event,prev);}else{var lastItem=this.element.children("li:last").children(".ui-menu:first");this._open(event,lastItem);}},_right:function(event){var next=this.active.parent().nextAll("li:eq(0)").children(".ui-menu").eq(0);if(next.length){this._open(event,next);}else{var firstItem=this.element.children("li:first").children(".ui-menu:first");this._open(event,firstItem);}}});}(jQuery));