class RPGEngine {
    constructor(gameData) {
        this.game = gameData;
        this.scene = gameData.start;
    }

    start() {
        this.showScene(this.scene);
    }

    showScene(id) {
        this.scene = id;

        const scene = this.game.scenes[id];

        document.getElementById("text").innerHTML =
            scene.text;

        const choices =
            document.getElementById("choices");

        choices.innerHTML = "";

        scene.choices.forEach(choice => {
            const button =
                document.createElement("button");

            button.innerText = choice.text;

            button.onclick = () => {
                this.showScene(choice.next);
            };

            choices.appendChild(button);
        });

        localStorage.setItem(
            "save",
            JSON.stringify({
                game: this.game.name,
                scene: this.scene
            })
        );
    }
}