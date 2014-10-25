$.fn.underline = function(){
	$(this).css("text-decoration","underline");
	return $(this);
};
$.fn.bold = function(){
	$(this).css("font-weight","bold");
	return $(this);
}
$.fn.italic = function(){
	$(this).css("font-style","italic");
}
$.fn.date = function(){
	$(this).html(new Date());
}
$.fn.color = function(clr){
	$(this).css("color",clr);
}
$.fn.font = function(size){
	$(this).css("font-size",size);
}
$.fn.uc = function(){
	var text = $(this).text();
	$(this).html(text.toUpperCase());
}