export class GoogleHomePage{

    get getGoogleURL() {
        return "https://www.google.com"
    }

    get getSearchInput(){
        return "//input[@name='q']"
    }

    get expectURL(){
       return "https://www.google.com/search?q=minh&s"
    }
}