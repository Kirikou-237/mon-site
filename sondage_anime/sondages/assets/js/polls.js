const polls = [

    {
        id: 1,
        title: "Votre personnage d'anime préféré",
        image1: "./assets/images/luffy.jpg",
        image2: "./assets/images/Narutojpg.jpg",
        image3: "./assets/images/saitama.jpg",
        image4: "./assets/images/bob.jpg",
        title1: "LUFFY",
        title2: "NARUTO",
        title3: "SAITAMA",
        title4: "BOB L'EPONGE",
        content1: "c'est un pirate qui a pour but de devenir le roi des pirates en trouvant le trésor One Piece.Il a mangé le fruit du Gum-Gum un fruit du démon qui l'a rendu élastique",
        content2: "Dans l'univers de la série, Naruto est un jeune ninja du village de Konoha. Hôte du démon renard à neuf queues, une créature qui a attaqué le village par le passé, il est rejeté par  les autres villageois. Son ambition est de devenir Hokage, le chef du village, afin de gagner le respect des habitants.",
        content3: "Saitama est un personnage fictif qui est le protagoniste titulaire de la série manga et anime japonaise One-Punch Man créée par One. Saitama, un super-héros indépendant qui rêve de devenir célèbre, est originaire de Z-City et accomplit des actes héroïques comme passe-temps",
        content4: "Bob l'éponge est une petite éponge de mer naïve et maladroite mais positive employée en tant que cuisinier au Crabe Croustillant, sous la responsabilité du capitaine Krabs. Depuis sa création, le personnage gagne grandement en popularité auprès des enfants et des adultes.",
    },
    {
        id: 2,
        title: "Votre manga préféré",
        image1: "./assets/images/TSSDK.jpg",
        image2: "./assets/images/DBZ.jpg",
        image3: "./assets/images/foodwar.jpg",
        image4: "./assets/images/jjk.jpg",
        title1: "TENSEI SHITTARA SLIME DATTA KEN",
        title2: "DRAGON BALL",
        title3: "SHOKUGEKI NO SOMA",
        title4: "JUJUTSU KAISEN",
        content1: "That Time I Got Reincarnated as a Slime (転生したらスライムだった件, Tensei Shitara Suraimu Datta Ken) est une série de light novel japonais écrite par Fuse et illustrée par Mitz Vah. Elle est publiée par Micro Magazine depuis mai 2014 et compte actuellement dix-sept volumes.",
        content2: "Dragon Ball (ドラゴンボール, Doragon Bōru, litt. Dragon Ball) est un manga de type shōnen écrit par Akira Toriyama, qui compte 42 volumes. Il raconte l'histoire d'un jeune enfant appelé Son Goku, doté d'une force extraordinaire, qui au cours de son histoire vit de nombreuses aventures.",
        content3: "Food Wars! est un manga culinaire écrit par Yūto Tsukuda et dessiné par Shun Saeki, avec la participation de Yuki Morisaki pour les plats. Il est prépublié entre novembre 2012 et juin 2019 dans le magazine Weekly Shōnen Jump de l'éditeur Shūeisha et est compilé en un total de 36 tomes",
        content4: "Jujutsu Kaisen est un shōnen manga de Gege Akutami, prépublié dans le magazine Weekly Shōnen Jump entre mars 2018 et septembre 2024 et publié par l'éditeur Shūeisha en volumes reliés. La version française est éditée par Ki-oon.",
    },
    {
      id: 3,
      title: "le personnage le plus intelligent" ,
      image1: "./assets/images/lelouch.jpg",
      image2: "./assets/images/light.jpg",
      image3: "./assets/images/Itachi.jpg",
      image4: "./assets/images/senku.jpg",
      title1: "LELOUCH LAMPEROUGE",
      title2: "LIGHT YAGAMI",
      title3: "ITACHI UCHIHA",
      title4: "SENKU ISHIGAMI",
    content1: "Lelouch Lamperouge, de son vrai nom Lelouch vi Britannia, est le personnage principal de la série Code Geass. Il est le fils de l'empereur Charles zi Britannia et de la consorte Marianne vi Britannia, et le frère de Nunnally vi Britannia.",
    content2: "Light Yagami est un jeune lycéen surdoué qui découvre un étrange carnet : le Death Note. Il s'agit d'un objet aux pouvoirs surnaturels qui permet de tuer n'importe qui juste en connaissant son nom et son visage",
    content3: "Itachi Uchiha est un personnage du manga Naruto créé par Masashi Kishimoto. Il est membre du clan Uchiha, un des clans les plus puissants de Konoha. Il est le frère aîné de Sasuke Uchiha et le fils de Fugaku et Mikoto Uchiha.",
    content4: "Senku Ishigami est un personnage de fiction et le protagoniste principal de la série de manga Dr. Stone, écrite par Riichiro Inagaki et illustrée par Boichi. Il est un lycéen de 18 ans qui est réveillé après 3700 ans de pétrification et qui cherche à reconstruire la civilisation avec la science.",
    },
    {
        id: 4,
        title: "le personnage le plus fort",
        image1: "./assets/images/saitama1.jpg",
        image2: "./assets/images/goku.jpg",
        image3: "./assets/images/escanor.jpg",
        image4: "./assets/images/meliodas.jpg",
        title1: "SAITAMA",
        title2: "SON GOKU",
        title3: "ESCANOR",
        title4: "MELIODAS",
        content1: "Saitama est un personnage fictif qui est le protagoniste titulaire de la série manga et anime japonaise One punch man",
        content2: "Son Goku est un personnage de fiction et le protagoniste de la franchise Dragon Ball créée par Akira Toriyama. Il apparaît pour la première fois le 20 novembre 1984 dans le Weekly Shōnen Jump.",
        content3: "Escanor est un personnage du manga Seven Deadly Sins. Il est le péché de l'orgueil et est le plus fort des Seven Deadly Sins à midi.",
        content4: "Meliodas est le chef des Seven Deadly Sins et le Dragon de la Colère. Il est le frère de Zeldris et le fils du roi des démons.",
    }, 
    {},
]

// Fonction pour obtenir l'ID du vote depuis l'URL
function getPollId() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id'));
}

//affichage du vote

function displayPoll() {
    const pollId = getPollId();
    let poll = polls.find(a => a.id === pollId)
    if (!poll) {
        //au cas ou le vote n'est pas trouvé retour à l'acceuil
        alert('le sondage est inexistant ou deja terminé!');
        window.location.href = 'index.html';
        return;
    }

    const container = document.getElementById('poll-container');
    container.innerHTML = `
      <p>Sondage : <strong>${poll.title}</strong></p>
        <br>
        <section id="vote-options">
            <form >
                <div class="card">
                    <div class="image">
                        <img src="${poll.image1}" alt="image1" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>${poll.title1}</strong></p> <br>
                        <p>${poll.content1}</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('Luffy')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="${poll.image2}" alt="image2" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>${poll.title2}</strong></p><br>
                        <p>${poll.content2}</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('Naruto')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="${poll.image3}" alt="image3" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>${poll.title3}</strong></p> <br>
                        <p>${poll.content3}</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('Saitama')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="${poll.image4}" alt="image4" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>${poll.title4}</strong></p> <br>
                        <p>${poll.content4}</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('Bob')">Voter</button>
                    </div>
                </div>
            </form>
        </section>
    `;
}

//affichage apres chargement du DOM
document.addEventListener('DOMContentLoaded', displayPoll);