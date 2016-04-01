class Cd {
    titre: string
    chanteur: string
    chansons: string
    email:string
}

/// <reference path="../typings/angularjs/angular.d.ts"/>
var cdsModule = angular.module('cdsModule', []);

class cdsController {
    cds: Array<Cd> = [];
    newCd: Cd;
    isEditing: boolean;

    constructor($scope) {
        $scope.VM = this;
        this.cds = [
            { titre: "Thriller", email:"malorie.laignel@gmail.com", chanteur: "Michael Jackson", chansons: "Wanna Be Startin' Somethin, Baby Be Mine, The Girl Is Mine, Thriller, Beat It, Billie Jean, Human Nature, P.Y.T (Pretty Young Thing), The Lady in My Life" },
            { titre: "Help", email:"malorie.laignel@gmail.com", chanteur: "Beatles", chansons: "Another Girl, You've Got to Hide your Love Away, The Night Before, Dizzy Miss Lizzie, You're Going to Lose That Girl, I've Just Seen a Face, It's Only Love, You Like ME too Much, Tell Me What You See, Act Naturally" },
            { titre: "Catching up with", email:"malorie.laignel@gmail.com", chanteur: "Depeche Mode", chansons: "Dreaming of Me, New Life, Just Can't Get Enough, See You, The Meaning of Love, Love In Itself - 2, Master and Servant, Blasphemous Rumors, Somebody, Shake the Disease, Flexible, It's Called a Heart, Fly on the Windscreen" }
        ];
    }

    delete(index): void {
        this.cds.splice(index, 1);
    }
    update(cd): void {
        this.isEditing = true;
        this.newCd = cd;
    }
    add(): void {
        this.cds.push(this.newCd);
        this.newCd = null;
    }
    stopModify(): void {
        this.isEditing = false;
        this.newCd = null;
    }
}

cdsModule.controller('cdsController', cdsController);
