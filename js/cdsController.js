var Cd = (function () {
    function Cd() {
    }
    return Cd;
})();
/// <reference path="../typings/angularjs/angular.d.ts"/>
var cdsModule = angular.module('cdsModule', []);
var cdsController = (function () {
    function cdsController($scope) {
        this.cds = [];
        $scope.VM = this;
        this.cds = [
            { titre: "Thriller", email: "malorie.laignel@gmail.com", chanteur: "Michael Jackson", chansons: "Wanna Be Startin' Somethin, Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T (Pretty Young Thing), The Lady in My Life" },
            { titre: "Help", email: "malorie.laignel@gmail.com", chanteur: "Beatles", chansons: "Another Girl, You've Got to Hide your Love Away, The Night Before, Dizzy Miss Lizzie, You're Going to Lose That Girl, I've Just Seen a Face, It's Only Love, You Like ME too Much, Tell Me What You See, Act Naturally" },
            { titre: "Catching up with", email: "malorie.laignel@gmail.com", chanteur: "Depeche Mode", chansons: "Dreaming of Me, New Life, Just Can't Get Enough, See You, The Meaning of Love, Love In Itself - 2, Master and Servant, Blasphemous Rumors, Somebody, Shake the Disease, Flexible, It's Called a Heart, Fly on the Windscreen" }
        ];
    }
    cdsController.prototype.delete = function (index) {
        this.cds.splice(index, 1);
    };
    cdsController.prototype.update = function (cd) {
        this.isEditing = true;
        this.newCd = cd;
    };
    cdsController.prototype.add = function () {
        this.cds.push(this.newCd);
        this.newCd = null;
    };
    cdsController.prototype.stopModify = function () {
        this.isEditing = false;
        this.newCd = null;
    };
    return cdsController;
})();
cdsModule.controller('cdsController', cdsController);
