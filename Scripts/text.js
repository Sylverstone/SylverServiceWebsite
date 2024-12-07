
//Ce texte regroupe tout les textes fait avec une mise en forme particulière, si ceux-ci était directement fait en html cela n'aurait pas été esthétique

texts = [
    [
`
<b>SylverService</b> est à l'origine une application qui a été développé pour les <b>trophées NSI de 2024</b>. Celle-ci a d'ailleurs été récompensé au trophée NSI departmental de Guadeloupe.
Alors <b>a quoi sert SylverService ?</b> C'est une application dédiée au élève, voir même des particuliers, pour que ceux-ci puissent <b>s'entre-aider, de s'ameliorer</b> afin d'atteindre leur object.
Nous avons décidez de mener ce projet car nous étions en <b>période d'examen</b> et trouvions cette idée intéréssante car de nombreux élèves comprennent mieux certaines notions quand se sont d'autres étudiants qui leur explique.

C'est donc pourquoi nous avons décidez de développer l'application SylverService, et <b>nous pensons qu'elle vous fera plaisir :)</b>
`,

`
Grâce à l'application <b>SylverService</b> vos élèves seront bien <b>plus solidaire</b> ! Ils pourront plus facilement <b>s'entre-aider</b> ainsi que faire part de leur talent/découverte/travaux comme bon leur semble.
Il y a beaucoup d'étudiants qui aiment apprendre des choses aux autres, alors ceux-ci seront <b>ravis</b> et y prendrons facilement goût !
Egalement concernant vos Enseignant, ils pourront partager leur document <b>via SylverService</b> afin que les élèves puissent y accéder de facilement. SylverService accepte les formats <b>Word,Excel,pdf,python,image,document texte</b> et d'autre format peuvent être ajouter sur demande :)

Bien sûr, SylverService n'est pas utile seulement aux école, <b>mais également aux entreprises</b>, grâce a cette application votre entreprise pourra faire <b>parvenir des documents, des formations</b>, ou tout autre choses sur l'application et les utilisateurs pourront y accéder tranquillement :)

`,
`
L'application <b>SylverService</b> comporte déjà pas mal de <b>fonctionnalité</b> que nous avons pu développer et instaurer pour les trophées NSI.

Ici vous trouverez un aperçu de l'application SylverService, je vous laisse en découvrir plus en téléchargeant l'application ou dans la page Technique :)
`
    ],
    [
`
<b>SylverService</b> a été codé en <b>Python</b>.

L'application tourne autour du module <a href ="https://www.pygame.org/wiki/about" target="_blank"><b>pygame</b></a> ainsi que <a href="https://pypi.org/project/PyMySQL/" target="_blank"><b>pymysql</b></a> qui permet de gérer la base de données depuis le script python.
Cette base de donnée est stocké sur <a href="https://www.alwaysdata.com/" target="_blank"><b>Alwaysdata.com</b></a>, depuis ce site nous pouvons l'administrer. Malheureusement la base de donnée est héberger avec le plan gratuit d'alwaysdata alors elle dispose d'un espace maximum de 100mo.

Maintenant parlons des fonctionnalitées de SylverService :

        <b class="plusGros">Accueil :</b>
            
            <div class="contenuTechnique">
Dans le menu on peut accéder à <b>3 pages, son compte, la page recherche</b>, ainsi que la page regroupant les <b>demandes de tutos</b>.
Dans le haut du menu, là où il y a le nom de l'application, on peut retrouver sur la droite un point d'interrogation, en appuyant sur celui-ci l'utilisateur sera redirigé vers une page avec du contenu <b>au sujet de l'application</b>.
Sur la gauche, si l'utilisateur est connecté a son compte, il retrouvera <b>sa photo de profil ainsi que son pseudonyme</b>.
            </div>
            
        <b class="plusGros">Compte :</b>
            <div class="contenuTechnique">
Le compte utilisateur permet à celui-ci <b>de poster des tutos, signaler des tutos</b> sur SylverService.
Dans la page compte, l'utilisateur retrouvera ses nom et prenom, son pseudonyme ainsi que le nombre de tutos qu'il a posté | demandé sur SylverService.
L'utilisateur peut bien évidemment <b>modifier sa photo de profil.</b>
Dans la page compte il peut également chosir <b>une catégorie de compte</b> en appuyant sur l'icone paramètre. Une catégorie de compte permet a l'utilisateur d'avoir des tutos par défaut dans son espace de recherche. Par exemple si l'utilisateur a une catégorie de compte informatique, alors à l'ouverture du menu recherche, une recherche sera automatiquement lancé sur cette catégorie.
De ce fait, quand l'utilisateur poste un tuto, il doit <b>choisir la catégorie de celui-ci.</b> divers catégorie son disponible actuellement et d'autre peuvent <b>ajouter sur demande</b>.
            </div>
        <b class="plusGros">Menu :</b>
            <div class="contenuTechnique">
Dans la page de recherche l'utilisateur peut <b>rechercher les tutos qu'il souhaite</b>. Il y a 3 types de recherches, par auteur, par nom, et par catégorie.
Les tutos sous forme de documents s'afficheront avec une police noir.
Un tuto peut être <b>signaler</b> et son propriétaire peut le <b>modifier ainsi que le supprimer</b>.
            </div>
        <b class="plusGros">Annonce :</b>

            Dans cette page l'utilisateur retrouveras toutes les demandes de tutos présentent sur l'application. 
            Cette page peut aussi comporter des sondages/questions destinés aux utilisateurs de SylverService

* Toutes les pages de SylverService comporte des fichiers qui permettent <b>d'en apprendre plus sur l'utilisation de ces pages</b>. Généralement pour accéder a ces fichiers il faut clicker sur le point d'intérogation situé en haut a droite.

L'application Sylverservice est disponible sur son <a href = "https://github.com/Sylverstone/Sylver_Service" target="_blank"><b>GitHub</b></a>.
`
    ],
    [
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
    ]

]

const script_ = document.currentScript;
const indiceTexts = script_.getAttribute('indiceText');
console.log(indiceTexts);
AllParagraph = document.querySelectorAll("p[jsText='true']")
console.log(AllParagraph)
const makeText = (elt,idText) =>
{
    console.log("writing")
    elt.innerHTML = texts[indiceTexts][idText];

}
for(let i = 0; i < AllParagraph.length; i++)
{
    const elt = AllParagraph[i];
    if(elt instanceof HTMLElement)
    {
        elt.style.whiteSpace = "pre-wrap";
        makeText(elt, i)
    }
    
}