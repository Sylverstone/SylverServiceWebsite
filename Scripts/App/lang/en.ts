export interface text_t_value_t
{
    "texte_i" : string[] | undefined;
    "header_title" : string;
    "page_title" : string;
}

export interface text_t 
{
    "/:lang" : text_t_value_t;
    "/:lang/pages/Techniques.html" : text_t_value_t;
    "/:lang/pages/form.html" : text_t_value_t;
    "/:lang/pages/mentionLegal.html" : text_t_value_t;
}

let texts = {
    "/:lang" : {
        "texte_i" : [
`
<strong>SylverService</strong> est à l'origine une application qui a été développé pour les <strong>trophées NSI de 2024</strong>. Celle-ci a d'ailleurs été récompensé au trophée NSI departmental de Guadeloupe.
Alors <strong>a quoi sert SylverService ?</strong> C'est une application dédiée au élève, voir même des particuliers, pour que ceux-ci puissent <strong>s'entre-aider, de s'ameliorer</strong> afin d'atteindre leur object.
Nous avons décidez de mener ce projet car nous étions en <strong>période d'examen</strong> et trouvions cette idée intéréssante car de nombreux élèves comprennent mieux certaines notions quand se sont d'autres étudiants qui leur explique.

C'est donc pourquoi nous avons décidez de développer l'application SylverService, et <strong>nous pensons qu'elle vous fera plaisir :)</strong>
`,

`
Grâce à l'application <strong>SylverService</strong> vos élèves seront bien <strong>plus solidaire</strong> ! Ils pourront plus facilement <strong>s'entre-aider</strong> ainsi que faire part de leur talent/découverte/travaux comme bon leur semble.
Il y a beaucoup d'étudiants qui aiment apprendre des choses aux autres, alors ceux-ci seront <strong>ravis</strong> et y prendrons facilement goût !
Egalement concernant vos Enseignant, ils pourront partager leur document <strong>via SylverService</strong> afin que les élèves puissent y accéder de facilement. SylverService accepte les formats <strong>Word,Excel,pdf,python,image,document texte</strong> et d'autre format peuvent être ajouter sur demande :)

Bien sûr, SylverService n'est pas utile seulement aux école, <strong>mais également aux entreprises</strong>, grâce a cette application votre entreprise pourra faire <strong>parvenir des documents, des formations</strong>, ou tout autre choses sur l'application et les utilisateurs pourront y accéder tranquillement :)

`,
`
L'application <strong>SylverService</strong> comporte déjà pas mal de <strong>fonctionnalité</strong> que nous avons pu développer et instaurer pour les trophées NSI.

Ici vous trouverez un aperçu de l'application SylverService, je vous laisse en découvrir plus en téléchargeant l'application ou dans la page Technique :)
`
                    ],

    "header_title" : "Sylver Service: Your students will never be so close-knit",
    "page_title" : "Sylver Service"
    },

    "/:lang/pages/Techniques.html" :{
        "texte_i" : 
    [
`
<p>
<strong>SylverService</strong> a été codé en <strong>Python</strong>.

L'application tourne autour du module <a href ="https://www.pygame.org/wiki/about" target="_blank"><strong>pygame</strong></a> ainsi que <a href="https://pypi.org/project/PyMySQL/" target="_blank"><strong>pymysql</strong></a> qui permet de gérer la base de données depuis le script python.
Cette base de donnée est stocké sur <a href="https://www.alwaysdata.com/" target="_blank"><strong>Alwaysdata.com</strong></a>, depuis ce site nous pouvons l'administrer. Malheureusement la base de donnée est héberger avec le plan gratuit d'alwaysdata alors elle dispose d'un espace maximum de 100mo.

Maintenant parlons des fonctionnalitées de SylverService :
</p>
        <h3>Accueil :</h3>
            
<div class="contenuTechnique"><p>Dans le menu on peut accéder à <strong>3 pages, son compte, la page recherche</strong>, ainsi que la page regroupant les <strong>demandes de tutos</strong>.
Dans le haut du menu, là où il y a le nom de l'application, on peut retrouver sur la droite un point d'interrogation, en appuyant sur celui-ci l'utilisateur sera redirigé vers une page avec du contenu <strong>au sujet de l'application</strong>.
Sur la gauche, si l'utilisateur est connecté a son compte, il retrouvera <strong>sa photo de profil ainsi que son pseudonyme</strong>.</p></div>
            
        <h3>Compte :</h3>
<div class="contenuTechnique"><p>Le compte utilisateur permet à celui-ci <strong>de poster des tutos, signaler des tutos</strong> sur SylverService.
Dans la page compte, l'utilisateur retrouvera ses nom et prenom, son pseudonyme ainsi que le nombre de tutos qu'il a posté | demandé sur SylverService.
L'utilisateur peut bien évidemment <strong>modifier sa photo de profil.</strong>
Dans la page compte il peut également chosir <strong>une catégorie de compte</strong> en appuyant sur l'icone paramètre. Une catégorie de compte permet a l'utilisateur d'avoir des tutos par défaut dans son espace de recherche. Par exemple si l'utilisateur a une catégorie de compte informatique, alors à l'ouverture du menu recherche, une recherche sera automatiquement lancé sur cette catégorie.
De ce fait, quand l'utilisateur poste un tuto, il doit <strong>choisir la catégorie de celui-ci.</strong> divers catégorie son disponible actuellement et d'autre peuvent <strong>ajouter sur demande</strong>.</p></div>

        <h3>Menu :</h3>
<div class="contenuTechnique"><p>Dans la page de recherche l'utilisateur peut <strong>rechercher les tutos qu'il souhaite</strong>. Il y a 3 types de recherches, par auteur, par nom, et par catégorie.
Les tutos sous forme de documents s'afficheront avec une police noir.
Un tuto peut être <strong>signaler</strong> et son propriétaire peut le <strong>modifier ainsi que le supprimer</strong>.</p></div>

        <h3>Annonce :</h3>
<div class="contenuTechnique"><p>Dans cette page l'utilisateur retrouveras toutes les demandes de tutos présentent sur l'application. 
Cette page peut aussi comporter des sondages/questions destinés aux utilisateurs de SylverService</p></div>

<p>* Toutes les pages de SylverService comporte des fichiers qui permettent <strong>d'en apprendre plus sur l'utilisation de ces pages</strong>. Généralement pour accéder a ces fichiers il faut clicker sur le point d'intérogation situé en haut a droite.

L'application Sylverservice est disponible sur son <a href = "https://github.com/Sylverstone/Sylver_Service" target="_blank"><strong>GitHub</strong></a>.</p>
`
    ],
        "header_title" : "How Sylver Service was coded ?",
        "page_title" : "Technical aspects of Sylver Service"
    },
    "/:lang/pages/mentionLegal.html" : {
        "texte_i" :
    [
`
<strong>Propriétaire</strong> du site :
PELAGE Maxime Sylvio
<strong>Contact</strong> : sylvio8.pm@gmail.com

<strong>Objet</strong> du site :
Ce site a pour but de <strong>promouvoir</strong> l’application <strong>SylverService</strong>, développée par PELAGE Maxime Sylvio, JOLIVEL Elvann et CORALI Deecleane.

<strong>Données collectées</strong> par l'application <strong>SylverService</strong> :
L’application SylverService collecte les informations suivantes pour la création de comptes utilisateurs nécessaires à <strong>certaines fonctionnalités</strong> :

        Nom
        Prénom
        Adresse email (optionnelle)
        Âge
        Mot de passe

La création d’un compte est obligatoire <strong>uniquement pour publier ou signaler des tutoriels dans l’application</strong>.

Ces données sont utilisées uniquement pour fournir ces fonctionnalités spécifiques et ne sont <strong>ni revendues ni partagées avec des tiers</strong>.

<strong>Sécurité des données :</strong>
Les données collectées sont protégées et ne sont accessibles qu’au propriétaire de l’application. Le mot de passe est stocké sous une forme sécurisée et chiffrée.


Contact :
Pour toute question relative au site ou à l’application SylverService, veuillez utiliser l’adresse email de contact.
`
    ],
    "header_title" : "Legal Mention",
    "page_title" : "legal mention"
    },
    "/:lang/pages/form.html":
    {
        "texte_i" : [""],
        "header_title" : "Let's work together",
        "page_title" : "Contact form"
    }
};

export default texts;