> Système de vote 
> Système de connexion simple

 Site de vote simple
•	Description : Permettre aux utilisateurs de voter pour différentes options.
•	Fonctionnalités :
o	Créer des sondages avec des choix.
o	Enregistrer les votes des utilisateurs.
o	Afficher les résultats en temps réel.
o	Gestion des utilisateurs (connexion et inscription).
•	Base de données :
o	Tables : "polls", "choices", "votes".


 Système de connexion et d'inscription
•	Description : Créer un système pour gérer l'authentification des utilisateurs.
•	Fonctionnalités :

•	Objectif pédagogique :
o	Comprendre la gestion des sessions en PHP et la sécurité des mots de passe (hashing avec password_hash).








    <main class="container" id="poll-container">
        <p>Sondage : <strong>votre manga préféré ?</strong></p>
        <br>
        <section id="vote-options">
            <form >
                <div class="card">
                    <div class="image">
                        <img src="./assets/images/TSSDK.jpg" alt="image1" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>TENSEI SHITTARA SLIME DATTA KEN</strong></p> <br>
                        <p>That Time I Got Reincarnated as a Slime (転生したらスライムだった件, Tensei Shitara Suraimu Datta Ken) est une série de light novel japonais écrite par Fuse et illustrée par Mitz Vah. Elle est publiée par Micro Magazine depuis mai 2014 et compte actuellement dix-sept volumes.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('TSSDK')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/DBZ.jpg" alt="image2" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>DRAGON BALL</strong></p><br>
                        <p>Dragon Ball (ドラゴンボール, Doragon Bōru, litt. Dragon Ball) est un manga de type shōnen écrit par Akira Toriyama, qui compte 42 volumes. Il raconte l'histoire d'un jeune enfant appelé Son Goku, doté d'une force extraordinaire, qui au cours de son histoire vit de nombreuses aventures.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('DBZ')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/foodwar.jpg" alt="image3" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>SHOKUGEKI NO SOMA</strong></p> <br>
                        <p>Food Wars! est un manga culinaire écrit par Yūto Tsukuda et dessiné par Shun Saeki, avec la participation de Yuki Morisaki pour les plats. Il est prépublié entre novembre 2012 et juin 2019 dans le magazine Weekly Shōnen Jump de l'éditeur Shūeisha et est compilé en un total de 36 tomes</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('FOODWARS')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/jjk.jpg" alt="image4" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>JUJUTSU KAISEN</strong></p> <br>
                        <p>Jujutsu Kaisen est un shōnen manga de Gege Akutami, prépublié dans le magazine Weekly Shōnen Jump entre mars 2018 et septembre 2024 et publié par l'éditeur Shūeisha en volumes reliés. La version française est éditée par Ki-oon.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('JJK')">Voter</button>
                    </div>
                </div>
            </form>
        </section>
    </main>

    <main class="container" id="poll-container">
        <p>Sondage : <strong>Le personnage le plus intelligent ?</strong></p>
        <br>
        <section id="vote-options">
            <form >
                <div class="card">
                    <div class="image">
                        <img src="./assets/images/lelouch.jpg" alt="image1" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>LELOUCH LAMPEROUGE</strong></p> <br>
                        <p>Lelouch Lamperouge, de son vrai nom Lelouch vi Britannia, est le personnage principal de la série Code Geass. Il est le fils de l'empereur Charles zi Britannia et de la consorte Marianne vi Britannia, et le frère de Nunnally vi Britannia."</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('LELOUCH')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/light.jpg" alt="image2" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>LIGHT YAGAMI</strong></p><br>
                        <p>Light Yagami est un jeune lycéen surdoué qui découvre un étrange carnet : le Death Note. Il s'agit d'un objet aux pouvoirs surnaturels qui permet de tuer n'importe qui juste en connaissant son nom et son visage</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('LIGHT')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/Itachi.jpg" alt="image3" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>ITACHI UCHIHA</strong></p> <br>
                        <p>Itachi Uchiha est un personnage du manga Naruto créé par Masashi Kishimoto. Il est membre du clan Uchiha, un des clans les plus puissants de Konoha. Il est le frère aîné de Sasuke Uchiha et le fils de Fugaku et Mikoto Uchiha.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('ITACHI')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/senku.jpg" alt="image4" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>SENKU ISHIGAMI</strong></p> <br>
                        <p>Senku Ishigami est un personnage de fiction et le protagoniste principal de la série de manga Dr. Stone, écrite par Riichiro Inagaki et illustrée par Boichi. Il est un lycéen de 18 ans qui est réveillé après 3700 ans de pétrification et qui cherche à reconstruire la civilisation avec la science./p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('SENKU')">Voter</button>
                    </div>
                </div>
            </form>
        </section>
    </main>



    <main class="container" id="poll-container">
        <p>Sondage : <strong>Le personnage le plus fort ?</strong></p>
        <br>
        <section id="vote-options">
            <form >
                <div class="card">
                    <div class="image">
                        <img src="./assets/images/saitama1.jpg" alt="image1" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>SAITAMA</strong></p> <br>
                        <p>Saitama est un personnage fictif qui est le protagoniste titulaire de la série manga et anime japonaise One punch man"</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('SAITAMA1')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/goku.jpg" alt="image2" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>SON GOKU</strong></p><br>
                        <p>Son Goku est un personnage de fiction et le protagoniste de la franchise Dragon Ball créée par Akira Toriyama. Il apparaît pour la première fois le 20 novembre 1984 dans le Weekly Shōnen Jump.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('GOKU')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/escanor.jpg" alt="image3" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>ESCANOR</strong></p> <br>
                        <p>Escanor est un personnage du manga Seven Deadly Sins. Il est le péché de l'orgueil et est le plus fort des Seven Deadly Sins à midi.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('ESCANOR')">Voter</button>
                    </div>
                </div>

                <div class="card">
                    <div class="image">
                        <img src="./assets/images/meliodas.jpg" alt="image4" class="vote-image">
                    </div>
                    <div class="text">
                        <p><strong>MELIODAS</strong></p> <br>
                        <p>Meliodas est le chef des Seven Deadly Sins et le Dragon de la Colère. Il est le frère de Zeldris et le fils du roi des démons.</p>
                    </div>
                    <div class="btn">
                        <button type="button" class="button" onclick="vote('SENKU')">Voter</button>
                    </div>
                </div>
            </form>
        </section>
    </main>
