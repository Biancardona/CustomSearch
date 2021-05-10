let key = "AIzaSyA5gbq4gQ83AEP633ET52IbloKJiKlOAks";       // API KEY
let id = "9a352a89890a7adf4";                             // CSE ID
let q = "cats";
let siteSearch = "https://www.pharmacy.ca.gov/"          // QUERY


function hndlr(response) {
    console.log(response)               // a way to see your results
    for (var i = 0; i < response.items.length; i++) {
        var item = response.items[i];
        // in production code, item.htmlTitle should have the HTML entities escaped.
        document.getElementById("content").innerHTML += "<br>" + item.htmlTitle + "<br>" + "<a href =URL> " + item.link + "</a>";

    }
}

function triggersearch() {
    let query = document.getElementById("query").value;
    let JSElement = document.createElement('script');
    JSElement.src = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${id}&siteSearch=${siteSearch}&q=${q}` + query + '&callback=hndlr';
    document.getElementsByTagName('head')[0].appendChild(JSElement);
}

triggersearch();