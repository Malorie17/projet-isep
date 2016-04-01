class Dvd {
    titre: string
    realisateur: string
    resume: string
    email:string
}

/// <reference path="../typings/angularjs/angular.d.ts"/>
var dvdsModule = angular.module('dvdsModule', []);

class dvdsController {
    dvds: Array<Dvd> = [];
    newDvd: Dvd;
    isEditing: boolean;

    constructor($scope) {
        $scope.VM = this;
        this.dvds = [
            { titre: "Star Wars - Episode VI : Le retour du Jedi", email: "malorie.laignel@gmail.com", realisateur: "George Lucas", resume: "Alors que l'Empire se prepare a aneantir l'Alliance Rebelle grace une nouvelle Etoile Noire, Luke Skywalker (Mark Hamill) sauve Han Solo (Harrison Ford) des griffes de Jabba Le Hutt. Dans la foret d'Endor, les Rebelles tentent de detruire la nouvelle arme de l'Empire avec l'aide des Ewoks. Luke affronte a nouveau son pere Dark Vador dans un duel epique au coeur de l'Etoile Noire. Vador doit alors faire face au plus important des choix... la vie de son fils et la liberte de toute la galaxie sont en jeu." },
            { titre: "Braveheart ", email: "malorie.laignel@gmail.com", realisateur: "Mel Gibson", resume: "William Wallace a du quitter son Ecosse natale lorsqu'il etait enfant apres la mort de son pere et de son frere, suite a l'invasion anglaise ordonnee par le roi d'Angleterre Edward 1er. Une fois adulte, William revient dans son pays afin d'y vivre en paix et epouse son amour d'enfance Murron McClannough. Mais Murron sera capturee et executee par les Anglais apres avoir refuse de se soumettre au droit de cuissage vote par le roi. William massacre alors la garnison anglaise apres avoir monte une armee de combattants. C'est le debut d'une guerre pour l'independance de l'Ecosse. A la tete des clans unifies, William, qui n'a plus rien a perdre..." },
            { titre: "Avatar", email: "malorie.laignel@gmail.com", realisateur: "James Cameron", resume: "Sous sa forme d'Avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration aupres des Na'vi, devenus un obstacle trop consequent a l'exploitation du precieux minerai. Mais tout va changer lorsque Neytiri, une tres belle Na'vi, sauve la vie de Jake. Ce dernier est alors recueilli par son clan, et a travers de nombreuses epreuves et aventures, il va apprendre progressivement a devenir l'un des leurs. Alors que la relation entre Jake et la reticente Neytiri s'approfondit, Jake en vient a respecter le mode de vie des Na'vi et finit par trouver sa place parmi eux." }
        ];
    }

    delete(index): void {
        this.dvds.splice(index, 1);
    }
    update(dvd): void {
        this.isEditing = true;
        this.newDvd = dvd;
    }
    add(): void {
        this.dvds.push(this.newDvd);
        this.newDvd = null;
    }
    stopModify(): void {
        this.isEditing = false;
        this.newDvd = null;
    }
}

dvdsModule.controller('dvdsController', dvdsController);
