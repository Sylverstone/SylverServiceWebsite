//script .js juste pour avoir un meilleur affichage dans le html, sinon c'est très moche

const p = document.querySelector('p');

p.innerHTML = 
`
<b>Propriétaire</b> du site :
PELAGE Maxime Sylvio
21 bis, rue Jean Solvain
43000 Le Puy-en-Velay
<b>Contact</b> : sylvio8.pm@gmail.com

<b>Objet</b> du site :
Ce site a pour but de <b>promouvoir</b> l’application <b>SylverService</b>, développée par PELAGE Maxime Sylvio, JOLIVEL Elvann et CORALI Deecleane.

<b>Données collectées</b> par l'application <b>SylverService</b> :
L’application SylverService collecte les informations suivantes pour la création de comptes utilisateurs nécessaires à <b>certaines fonctionnalités</b> :

        Nom
        Prénom
        Adresse email (optionnelle)
        Âge
        Mot de passe

La création d’un compte est obligatoire <b>uniquement pour publier ou signaler des tutoriels dans l’application</b>.

Ces données sont utilisées uniquement pour fournir ces fonctionnalités spécifiques et ne sont <b>ni revendues ni partagées avec des tiers</b>.

<b>Sécurité des données :</b>
Les données collectées sont protégées et ne sont accessibles qu’au propriétaire de l’application. Le mot de passe est stocké sous une forme sécurisée et chiffrée.


Contact :
Pour toute question relative au site ou à l’application SylverService, veuillez utiliser l’adresse email de contact.
`