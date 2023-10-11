// const sheetID = "1oZTxo3t6oxmgntlZtr-xycFBFUABnd7yQtLUMkxD8sA";
const baseURL = ScriptApp.getService().getUrl(); // https://stackoverflow.com/questions/14132760/get-current-page-url
let htmlService, favicon = "https://cdnjs.com/favicon.png";

function doGet(e) {
    Logger.log(baseURL);
    Logger.log(e);

    if (e.queryString.length == 0) {
        htmlService = HtmlService.createTemplateFromFile("index");
        htmlService.title = "Home Page";
        htmlService.baseURL = baseURL;
        return htmlService.evaluate().
          setTitle("Welcome to Home Page").setFaviconUrl(favicon).
          setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
          addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
    } // end of main if
    else {
        if (e.parameter.vu == "home" || e.parameter.vu == "index") {
            htmlService = HtmlService.createTemplateFromFile("index");
            htmlService.title = "Home Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
            setTitle("Welcome to Home Page").setFaviconUrl(favicon).
          setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
          addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of if ( e.parameter.vu == "home" || e.parameter.vu == "index" )
        else if (e.parameter.vu == "about") {
            htmlService = HtmlService.createTemplateFromFile("about");
            htmlService.title = "About Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
              setTitle("Welcome to About Page").setFaviconUrl(favicon).
              setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
              addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of else if ( e.parameter.vu == "about" )
        else if (e.parameter.vu == "services") {
            htmlService = HtmlService.createTemplateFromFile("services");
            htmlService.title = "Services Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
              setTitle("Welcome to Services Page").setFaviconUrl(favicon).
              setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
              addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of else if ( e.parameter.vu == "services" )
        else if (e.parameter.vu == "products") {
            htmlService = HtmlService.createTemplateFromFile("products");
            htmlService.title = "Products Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
              setTitle("Welcome to Products Page").setFaviconUrl(favicon).
              setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
              addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of else if ( e.parameter.vu == "products" )
        else if (e.parameter.vu == "contact") {
            htmlService = HtmlService.createTemplateFromFile("contact");
            htmlService.title = "Contact Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
              setTitle("Welcome to Contact Page").setFaviconUrl(favicon).
              setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
              addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of else if ( e.parameter.vu == "contact" )
        else {
            htmlService = HtmlService.createTemplateFromFile("index");
            htmlService.title = "Home Page";
            htmlService.baseURL = baseURL;
            return htmlService.evaluate().
              setTitle("Welcome to Home Page").setFaviconUrl(favicon).
              setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL).
              addMetaTag("viewport", "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no");
        } // end of inner else
    } // end of main else
} // end of doGet()

// --------------------------------- //

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
} // end of include(fileName)
