var Jvideo = (function () {
    function Jvideo() {
    }
    return Jvideo;
})();
/// <reference path="../typings/angularjs/angular.d.ts"/>
var jvideosModule = angular.module('jvideosModule', []);
var jvideosController = (function () {
    function jvideosController($scope) {
        this.jvideos = [];
        $scope.VM = this;
        this.jvideos = [
            { titre: "Halo Master Chief Collection", email: "malorie.laignel@gmail.com", plateforme: "Xbox One", resume: "Halo The Master Chief Collection regroupe les quatre opus de la serie qui ont marque une generation entiere de gamers, remasterises et en exclusivite pour Xbox One. Vous etes le Master Chief, le dernier representant d'une section de super soldats genetiquement modifies. Votre mission : eradiquer une alliance extraterrestre determinee a tout detruire sur son passage." },
            { titre: "Counter Strike", email: "malorie.laignel@gmail.com", plateforme: "Xbox 360", resume: "Traditionnellement, le debut d'un match de Counter-Strike: Global Offensive comprend 5 Terroristes qui apparaissent a un bout du terrain, et 5 Contre-Terroristes qui apparaissent a l'autre bout. Dans le mode de jeu le plus emblematique, les Terroristes doivent deposer une bombe a l'un des deux endroits de la map qui sont faits pour ca, les Contre-Terroristes doivent les en empecher ou, le cas echeant, desamorcer la bombe avant qu'elle n'explose. Vous incarnez un membre de l'un ou l'autre camp muni d'armes letales. Tuer tous les membres de l'equipe adverse fait egalement remporter la victoire. Une fois un round termine, l'equipe gagnante marque un point et on recommence jusqu'a ce qu'une equipe ait atteint le nombre de points necessaire pour gagner le match." },
            { titre: "Call of Duty", email: "malorie.laignel@gmail.com", plateforme: "PlayStation 3", resume: "Call of Duty: Black Ops III deploie les joueurs dans un futur ou la biotechnologie a engendre un nouveau type de soldats Black Ops. Call of Duty: Black Ops III sur PlayStation 3 et Xbox 360 contient uniquement deux modes : le Multijoueur et le mode Zombies, pour offrir aux fans une experience multijoueur complete, et une toute nouvelle aventure Zombie dans une ambiance de film noir. " }
        ];
    }
    jvideosController.prototype.delete = function (index) {
        this.jvideos.splice(index, 1);
    };
    jvideosController.prototype.update = function (jvideo) {
        this.isEditing = true;
        this.newJvideo = jvideo;
    };
    jvideosController.prototype.add = function () {
        this.jvideos.push(this.newJvideo);
        this.newJvideo = null;
    };
    jvideosController.prototype.stopModify = function () {
        this.isEditing = false;
        this.newJvideo = null;
    };
    return jvideosController;
})();
jvideosModule.controller('jvideosController', jvideosController);
