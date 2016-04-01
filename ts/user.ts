class User {
    login: string;
    mdp: string;

    constructor() {
        this.login = $("#login").val();
        this.mdp = $("#mdp").val();
    }

    public RedirectionJavascript() {
        
        if(this.login=="maloflo" && this.mdp=="123"){
           window.document.location.href = 'index.html';
            }else{
            $("#login").css("border-color", "red");
            $("#mdp").css("border-color", "red");
            $("#erreur").html("<b><FONT color=\"red\">login / mot de passe invalide</FONT></b><br/><br/>");
            }
        return false;
    }
}

function validateRequest() {
    var user = new User();
    return user.RedirectionJavascript();
}
