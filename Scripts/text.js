

texts = [
`
<b>SylverService</b> est à l'origine une application qui a été développé pour les <b>trophées NSI de 2024</b>. Celle-ci a d'ailleurs été récompensé au trophée NSI departmental de Guadeloupe.
Alors <b>a quoi sert SylverService ?</b> C'est une application dédiée au élève, voir même des particuliers, pour que ceux-ci puissent <b>s'entre-aider, de s'ameliorer</b> afin d'atteindre leur object.
Nous avons décidez de mener ce projet car nous étions en <b>période d'examen</b> et trouvions cette idée intéréssante car de nombreux élèves comprennent mieux certaines notions quand se sont d'autres étudiants qui leur explique.

C'est donc pourquoi nous avons décidez de développer l'application SylverService, et <b>nous pensons qu'elle vous fera plaisir :)</b>
`,

`
Grâce à l'application SylverService vos élèves seront bien plus solidaire ! Il pourra plus facilement s'entre-aider ainsi que faire part de leur talent/découverte/travaux comme bon leur semble.
Il a beaucoup d'étudier qui aime apprendre des choses aux autres, alors ceux-ci seront ravis et y prendrons facilement goût !
Egalemen concernant vos Enseignant, il pourra partager leur document via SylverService afin que les élèves puissent y accéder de facilement. SylverService accepte les formats Word,Excel,python,image,document texte et d'autre format peuvent être ajouter sur demande :)

Bien sûr, SylverService ne sera pas utile seulement aux école, mais également aux entreprises lambda, grâce a cette application votre entreprise pourra faire parvenir des documents, des formations, ou tout autre choses sur l'application et les utilisateurs pourront y accéder tranquillement :)

`,
`
L'application SylverService comporte déjà pas mal de fonctionnalité que nous avons pu développer et instaurer pour les trophées NSI.

Ici vous trouverez un aperçu de l'application SylverService, je vous laisse en découvrir plus par vous même :)
`

]

AllParagraph = document.querySelectorAll("p[jsText='true']")
console.log(AllParagraph)
const makeText = (elt,idText) =>
{
    console.log("writing")
    elt.innerHTML = texts[idText];

}
for(let i = 0; i < AllParagraph.length; i++)
{
    const elt = AllParagraph[i];
    if(elt instanceof HTMLElement)
    {
        elt.style.whiteSpace = "pre-wrap";
        makeText(AllParagraph[i], i)
    }
    
 
}