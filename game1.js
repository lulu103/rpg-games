const game1 = {
    name: "The Lost Sword",

    start: "start",

    scenes: {

        start: {
            text:
                "You are a young adventurer in a small village. The blacksmith's magical sword has been stolen.",
            choices: [
                {
                    text: "Accept the quest",
                    next: "forest"
                },
                {
                    text: "Refuse",
                    next: "home"
                }
            ]
        },

        home: {
            text:
                "You stay home. Nothing happens. Bad ending.",
            choices: [
                {
                    text: "Try again",
                    next: "start"
                }
            ]
        },

        forest: {
            text:
                "You enter the forest and see two paths.",
            choices: [
                {
                    text: "Left path",
                    next: "wolf"
                },
                {
                    text: "Right path",
                    next: "river"
                }
            ]
        },

        wolf: {
            text:
                "A wolf blocks your way.",
            choices: [
                {
                    text: "Fight",
                    next: "fightWolf"
                },
                {
                    text: "Run",
                    next: "forest"
                }
            ]
        },

        fightWolf: {
            text:
                "You defeat the wolf and find a cave.",
            choices: [
                {
                    text: "Enter cave",
                    next: "cave"
                }
            ]
        },

        river: {
            text:
                "You find a river and a fisherman.",
            choices: [
                {
                    text: "Talk to fisherman",
                    next: "fisherman"
                },
                {
                    text: "Return",
                    next: "forest"
                }
            ]
        },

        fisherman: {
            text:
                "The fisherman tells you the thief hides in a cave.",
            choices: [
                {
                    text: "Go to cave",
                    next: "cave"
                }
            ]
        },

        cave: {
            text:
                "Inside the cave is a goblin carrying the magical sword.",
            choices: [
                {
                    text: "Attack",
                    next: "win"
                },
                {
                    text: "Negotiate",
                    next: "talkGoblin"
                }
            ]
        },

        talkGoblin: {
            text:
                "The goblin only stole the sword because his village was starving.",
            choices: [
                {
                    text: "Share food",
                    next: "trueEnding"
                },
                {
                    text: "Take sword by force",
                    next: "win"
                }
            ]
        },

        win: {
            text:
                "You return the sword and become a village hero.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        },

        trueEnding: {
            text:
                "You help the goblins and return the sword peacefully. The villages become friends. True Ending.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        }
    }
};