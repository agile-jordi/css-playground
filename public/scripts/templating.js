var Templating = (function(){

	function bind(template, data){
	    if(template.length!=1) throw "The template must be a jQuery object with exactly 1 element, it had template.length";
	    template.data("data",data);
	    update(template);
	};

	function update(templates){
		if(templates.length!=1) console.log("Updating " + templates.length + " templates...")
        templates.replaceWith(function(){
            var data = $(this).data("data");
            var templateHtml = $("<div>").append($(this).clone()).html();
            var html = Mustache.render(templateHtml,data);
            console.log("Html: ", html)
            return html;
        });
	}

	var result = {
	    bind: bind,
	    update: update
	};
	return result;
})();