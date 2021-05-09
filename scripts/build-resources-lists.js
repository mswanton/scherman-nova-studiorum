var baseUrl = "https://cdn.jsdelivr.net/gh/mswanton/scherman-nova-studiorum@main/data/"
var cultureUrl = baseUrl + "resources-culture.json";
var instructionalUrl = baseUrl + "resources-instructional.json";
var historicalUrl = baseUrl + "resources-historical.json";
var classesUrl = baseUrl + "resources-classes.json";


function buildResourceList(url, templateClass, container){
    $.getJSON(url, function(data){
        var source = $(templateClass).html();
        var template = Handlebars.compile(source);
        var list = template(data);
        $(container).html(list);
    })
}

$(document).ready(function(){
    buildResourceList(cultureUrl, '#resource-template', '#resources-culture-container');
    buildResourceList(instructionalUrl, '#resource-template', '#resources-instructional-container');
    buildResourceList(instructionalUrl, '#resource-template', '#resources-historical-container');
    buildResourceList(classesUrl, '#class-template', '#classes-container');
})  