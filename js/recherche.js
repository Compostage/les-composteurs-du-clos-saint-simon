// import Liste from './data';

const Liste = [
    {
        titre: "Les déchets animaux",
        image: "./photos/compost-chat.png",
        altText: "dessin silhouette chat",
        paragraph: "Déjections, litière minérale",
        compostable: false,
        nonAffiche: ""
    },
    {
        titre: "Le charbon et la poussière d'aspirateur",
        image: "./photos/compost-cendre.png",
        altText: "photo cendre charbon de bois",
        paragraph: "Les cendres peuvent être répandues directement au sol (pas en trop grande quantité tout de même). Les poussières d'aspirateur sont à jeter car on ne peut pas garantir leur composition",
        compostable: false,
        nonAffiche: ""
    },
    {
        titre: "Les matériaux non-dégradables",
        image: "./photos/compost-sac.png",
        altText: "dessin sac plastique",
        paragraph: "Sac plastique \"recyclable\", sachets de thé contenant du plastique, mégots de cigarette",
        compostable: false,
        nonAffiche: ""
    },
    {
        titre: "Les plantes rampantes",
        image: "./photos/compost-plante.png",
        altText: "photo plante rampante",
        paragraph: "Liseron, chiendent, misère, entre autres. Ces plantes sont capables de résister à des températures élevées et d'envahir les alentours du composteur",
        compostable: false,
        nonAffiche: ""
    },
    {
        titre: "Les résineux",
        image: "./photos/compost-sapin.png",
        altText: "photo sapin",
        paragraph: "Les plantes de la famille des résineux (sapin) contiennent des inhibiteurs de croissance",
        compostable: false,
        nonAffiche: ""
    },
    {
        titre: "Les épluchures, les fruits/légumes pourris",
        image: "./photos/compost-legumes.png",
        altText: "épluchures",
        paragraph: "A découper en petits morceaux",
        compostable: true,
        nonAffiche: "peau, tomate, carotte, poireau, oignon, haricot, patate, pomme de terre, ail, concombre, courgette, poivron, avocat, blette, salade, chou, butternut, potimaron, courge, herbes, persil, coriandre, ciboulette, pomme, banane, fraise, framboise, cassis, poire, kiwi, rhubarbe, kaki, litchi, mangue"
    },
    {
        titre: "Tous les produits laitiers",
        image: "./photos/compost-fromage.png",
        altText: "produits laitiers",
        paragraph: "Yaourts et crèmes périmées, croutes de fromage",
        compostable: true,
        nonAffiche: ""
    },
    {
        titre: "Les coquilles d'oeuf",
        image: "./photos/compost-oeuf.png",
        altText: "coquilles d'oeuf",
        paragraph: "<b>Ecrasées</b> (se décomposent plus facilement) ou <b>empilées</b> (servent de refuge aux insectes bons pour le compost)",
        compostable: true,
        nonAffiche: ""
    },
    {
        titre: "Les noix, noyaux et graines",
        image: "./photos/compost-noix.png",
        altText: "graines",
        paragraph: "Tous les noyaux et graines sont compostables. Certaines graines résistent cependant au processus comme les graines de tomates ou de courges, et pousseront donc dans le bac",
        compostable: true,
        nonAffiche: ""
    },
    {
        titre: "La viande, le poisson",
        image: "./photos/compost-viande.png",
        altText: "dessin de poisson",
        paragraph: "En <b>petits morceaux</b>, ainsi que les os et les arrêtes",
        compostable: true,
        nonAffiche: ""
    },
    {
        titre: "Le pain",
        image: "./photos/compost-pain.png",
        altText: "pain",
        paragraph: "<b>Apport occasionnel, rare et en très petits morceaux</b>: le pain en décomposition tue les bonnes bactéries du compost !",
        compostable: true,
        nonAffiche: "quignon de pain, miettes, pain dur, pain rassis"
    },
    {
        titre: "Le marc de café",
        image: "./photos/compost-cafe.png",
        altText: "marc de café",
        paragraph: "En quantité raisonnable il joue le rôle d'activateur et constitue un bon apport en minéraux",
        compostable: true,
        nonAffiche: ""
    },
    {
        titre: "Le carton brut",
        image: "./photos/compost-carton.png",
        altText: "dessin carton d'emballage",
        paragraph: "Penser à <b>découper avant de jeter</b>: boites d'oeufs, carton marron, sac kraft, rouleaux de PQ",
        compostable: true,
        nonAffiche: "rouleau de sopalin"
    },
    {
        titre: "Les agrumes",
        image: "./photos/agrumes.png",
        altText: "dessins d'agrumes",
        paragraph: "On pense souvent que les agrumes (orange, pamplemousse, citron, clémentine) ne sont pas compostables. Pourtant les agrumes se décomposent très bien, pas d'inquiétude !",
        compostable: true,
        nonAffiche: "pomelo"
    }
]

function Content()
{
    let content = document.getElementById("search-result");
    content.innerHTML = "";
    const inputSearch = document.getElementById("search");
    const itemSearch = inputSearch.value.toLocaleLowerCase();
    console.log(itemSearch);

    for (let i = 0; i < Liste.length; i++)
    {
        const item = Liste[i];
        const titreCompare = item.titre.toLocaleLowerCase();
        const parCompare = item.paragraph.toLocaleLowerCase();
        const cacheCompare = item.nonAffiche.toLocaleLowerCase();
        if (itemSearch !== ""
            && titreCompare.includes(itemSearch)
            || parCompare.includes(itemSearch)
            || cacheCompare.includes(itemSearch))
        {
            let div = document.createElement("div");
            div.classList.add("item");
            content.appendChild(div);

            let cercle = document.createElement("div");
            cercle.classList.add("itemContent");
            div.appendChild(cercle);

            let image = document.createElement("img");
            image.src = item.image;
            image.altTxt = item.altText;
            image.classList.add("image-ok");
            cercle.appendChild(image);

            let titre = document.createElement("h3");
            titre.innerHTML = item.titre;
            cercle.appendChild(titre);

            let paragraphe = document.createElement("p");
            paragraphe.classList.add("pContent");
            paragraphe.innerHTML = item.paragraph;
            div.appendChild(paragraphe);

            let indication = document.createElement("div");
            indication.classList.add("indication");
            content.appendChild(indication);

            let msgIndic = document.createElement("p");
            msgIndic.innerHTML = `Je ${item.compostable?"peux":"ne dois pas"} composter`;
            indication.appendChild(msgIndic);

            let imgIndic = document.createElement("img");
            imgIndic.src = `./photos/${item.compostable?"coche":"croix"}.png`;
            indication.appendChild(imgIndic);
        }
    }
}

// 		} else {
//             let content = document.getElementById("filterResultContainer");

//             let erreur = document.createElement("p");
//             erreur.classList.add("msg-error");
//             erreur.innerHTML = "Nous n'avons malheureusement pas trouvé ce que vous recherchez...";
//             content.appendChild(erreur);

//             let lien = document.createElement("a");
//             lien.classList.add("lien-mail");
//             lien.href = "mailto:compostage.clos.saint.simon@gmail.com";
//             lien.innerHTML = "Vous avez une question ? Contactez-nous !";
//             content.appendChild(lien);
//         }
// 	}
// }

const bouton = document.getElementById("button-search");
bouton.addEventListener('click', Content);

//Affichage navigateur version mobile

let button = document.getElementById('bouton');
let affiche = document.getElementById('display');
let nav = document.getElementById('menu');

button.addEventListener("click", () =>
{
    if (getComputedStyle(nav).display != "block")
    {
        nav.style.display = "block";
    } else
    {
        nav.style.display = "none";
    }
})

let quizz = document.querySelector('.derouleQuizz');
let info = document.querySelector('.derouleInfos');

let sousQuizz = document.querySelector('.sousQuizz');
let sousInfos = document.querySelector('.sousInfos');

let flecheQuizz = document.querySelector('.flecheQuizz');
let flecheInfos = document.querySelector('.flecheInfos');


quizz.addEventListener("click", () =>
{
    if (getComputedStyle(sousQuizz).display != "block")
    {
        sousQuizz.style.display = "block";
        flecheQuizz.style.rotate = "90deg";
    } else
    {
        sousQuizz.style.display = "none";
        flecheQuizz.style.rotate = "0deg";
    }
})

info.addEventListener("click", () =>
{
    if (getComputedStyle(sousInfos).display != "block")
    {
        sousInfos.style.display = "block";
        flecheInfos.style.rotate = "90deg";
    } else
    {
        sousInfos.style.display = "none";
        flecheInfos.style.rotate = "0deg";
    }
})