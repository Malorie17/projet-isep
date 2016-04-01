class Livre {
    titre: string
    auteur: string
    resume: string
    email:string
}

/// <reference path="../typings/angularjs/angular.d.ts"/>
var livresModule = angular.module('livresModule', []);

class livresController {
    livres: Array<Livre> = [];
    newLivre: Livre;
    isEditing: boolean;

    constructor($scope) {
        $scope.VM = this;
        this.livres = [
            { titre: "La Tour Sombre, Tome 1 : Le Pistolero", email:"florence.choquet@gmail.com", auteur: "Stephen King", resume: "L\'homme en noir fuyait a travers le desert, et le Pistolero le suivait... Ce Pistolero, c'est Roland de Gilead, dernier justicier et aventurier d'un monde qui a change et dont il cherche a inverser la destruction programmee. Pour ce faire, il doit arracher au sorcier vetu de noir les secrets qui le meneront vers la Tour Sombre, a la croisee de tous les temps et de tous les lieux. Roland surmontera-t-il les pieges diaboliques de cette creature? A-t-il conscience que son destin est inscrit dans trois cartes d'un jeu de tarot bien particulier ? Le Pistolero devra faire le pari de le decouvrir, et d'affronter la folie et la mort. Car il sait depuis le commencement que les voies de la Tour Sombre sont impenetrables..." },
            { titre: "Andromaque", email:"malorie.laignel@gmail.com", auteur: "Racine", resume: "Andromaque est une tragedie en cinq actes et en vers ecrite en 1667 et representee pour la premiere fois au chateau du Louvre le 17 novembre 1667 devant la reine par la troupe de l'Hotel de Bourgogne. Le role titre etait tenu par Mademoiselle Du Parc. La cour pleura, emue par le lyrisme nouveau de cette tragedie. La piece connait un grand succes aupres de la cour, mais critiquee par ses rivaux. Elle reste l'une des pieces les plus jouees a la Comedie-Francaise. L'action se situe apres la legendaire guerre de Troie, remportee par les Grecs." },
            { titre: "Antigonebis", email:"malorie.laignel@gmail.com", auteur: "Anouilh", resume: "L'Antigone d'Anouilh est inspiree du mythe antique, en rupture avec la tradition de la tragedie grecque. La tragedie connait un enorme succes mais donne naissance a une polemique. Antigone appartient aux legendes attachees a la ville de Thebes. C'est l'une des enfants issus de l'union incestueuse du roi de Thebes OEdipe et de sa propre mere, Jocaste. Antigone est la soeur d'Ismene, d'Eteocle et de Polynice. Elle montre un devouement et une grandeur d'ame sans pareils dans la mythologie. Lorsque ses freres chassent le roi OEdipe de Thebes, il s'est creve les yeux et doit mendier pour se nourrir, sa fille Antigone lui sert de guide. Elle veille sur son pere jusqu'a sa mort." }
        ];
    }

    delete(index): void {
        this.livres.splice(index, 1);
    }
    update(livre): void {
        this.isEditing = true;
        this.newLivre = livre;
    }
    add(): void {
        this.livres.push(this.newLivre);
        this.newLivre = null;
    }
    stopModify(): void {
        this.isEditing = false;
        this.newLivre = null;
    }
}

livresModule.controller('livresController', livresController);
