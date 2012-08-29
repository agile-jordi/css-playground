var Templating = (function(){

	// TODO: bind(element, templateUrl, data)
	// get the template
	// element.data("template", template)
	// element.data("data",data)
	// update(element)

	function bind(template, data){
	    if(template.length!=1) throw "The template must be a jQuery object with exactly 1 element, it had template.length";
	    template.data("data",data);
	    update(template);
	};

	
	//TODO: Assume the element to update will have the templateHtml attribute
	// function update(elements) 
	//   elements.replaceWith(function(){
    //     var data = $(this).data("data");
    //     var templateHtml = $(this).data("template");
    //     var html = Mustache.render(templateHtml,data);
    //     return $(html).data("data",data).data("template",templateHtml);
	//   });
	function update(elements){
		if(elements.length!=1) console.log("Updating " + elements.length + " elements...")
        elements.replaceWith(function(){
            var data = $(this).data("data");
            if(!data) console.log("No data found!")
        	var templateHtml = $(this).data("template") || $("<div>").append($(this).clone()).html();
            var html = Mustache.render(templateHtml,data);
            // console.log("Html: ", html)
            return $(html).data("data",data).data("template",templateHtml);
        });
	}

	var result = {
	    bind: bind,
	    update: update
	};
	return result;
})();