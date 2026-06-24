const RPG = {

    games: {
        1: game1,
        2: game2,
        3: game3
    },

    currentGame: null,
    currentScene: null,

    launch() {
        this.showMenu();
    },

    showMenu() {
        const app = document.getElementById("app");

        let html = `
            <h1>Text RPG Collection</h1>
        `;

        for (const id in this.games) {
            html += `
                <button onclick="RPG.start(${id})">
                    ${this.games[id].name}
                </button>
            `;
        }

        html += `
            <button onclick="RPG.continueGame()">
                Continue
            </button>
        `;

        app.innerHTML = html;
    },

    start(id) {
        this.currentGame = this.games[id];
        this.currentScene = this.currentGame.start;
        this.render();
    },

    render() {
        const scene =
            this.currentGame.scenes[this.currentScene];

        const app =
            document.getElementById("app");

        let html = `
            <h2>${this.currentGame.name}</h2>
            <div id="text">
                ${scene.text}
            </div>
        `;

        scene.choices.forEach(choice => {
            html += `
                <button
                    onclick="RPG.choose('${choice.next}')">
                    ${choice.text}
                </button>
            `;
        });

        html += `
            <hr>
            <button onclick="RPG.showMenu()">
                Main Menu
            </button>
        `;

        app.innerHTML = html;

        this.save();
    },

    choose(nextScene) {
        this.currentScene = nextScene;
        this.render();
    },

    save() {
        const gameId =
            Number(
                Object.keys(this.games)
                    .find(
                        k =>
                            this.games[k] ===
                            this.currentGame
                    )
            );

        localStorage.setItem(
            "rpg-save",
            JSON.stringify({
                game: gameId,
                scene: this.currentScene
            })
        );
    },

    continueGame() {
        const save =
            JSON.parse(
                localStorage.getItem(
                    "rpg-save"
                )
            );

        if (!save) {
            alert("No save found.");
            return;
        }

        this.currentGame =
            this.games[save.game];

        this.currentScene =
            save.scene;

        this.render();
    }
};