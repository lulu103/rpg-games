const game2 = {
    name: "The Cursed Kingdom",

    start: "start",

    scenes: {

        start: {
            text: "You are a young traveler arriving at the Kingdom of Eldoria. The streets are empty and everyone whispers about a curse upon the king.",
            choices: [
                {
                    text: "Visit the tavern",
                    next: "tavern"
                },
                {
                    text: "Go to the castle",
                    next: "castleGate"
                }
            ]
        },

        tavern: {
            text: "The tavern keeper says the king became cursed after opening an ancient tomb.",
            choices: [
                {
                    text: "Ask about the tomb",
                    next: "tombInfo"
                },
                {
                    text: "Go to the castle",
                    next: "castleGate"
                }
            ]
        },

        tombInfo: {
            text: "The tomb lies in the northern mountains. They say a magical crystal inside can break the curse.",
            choices: [
                {
                    text: "Travel north",
                    next: "forest"
                },
                {
                    text: "Visit the castle first",
                    next: "castleGate"
                }
            ]
        },

        castleGate: {
            text: "The guards stop you. They are desperate and ask for your help.",
            choices: [
                {
                    text: "Accept the mission",
                    next: "throneRoom"
                },
                {
                    text: "Refuse",
                    next: "badEnding1"
                }
            ]
        },

        throneRoom: {
            text: "The king sits on his throne, covered in dark marks. He begs you to find the crystal.",
            choices: [
                {
                    text: "Leave for the mountains",
                    next: "forest"
                }
            ]
        },

        forest: {
            text: "You enter a dark forest. You hear wolves and see an old path.",
            choices: [
                {
                    text: "Follow the path",
                    next: "merchant"
                },
                {
                    text: "Explore the woods",
                    next: "wolves"
                }
            ]
        },

        merchant: {
            text: "A merchant offers you supplies and warns that the crystal is guarded.",
            choices: [
                {
                    text: "Continue",
                    next: "bridge"
                }
            ]
        },

        wolves: {
            text: "A pack of wolves surrounds you.",
            choices: [
                {
                    text: "Fight through",
                    next: "bridge"
                },
                {
                    text: "Run away",
                    next: "forest"
                }
            ]
        },

        bridge: {
            text: "A broken bridge crosses a deep canyon.",
            choices: [
                {
                    text: "Carefully cross",
                    next: "mountain"
                },
                {
                    text: "Look for another way",
                    next: "cave"
                }
            ]
        },

        cave: {
            text: "You discover a cave beneath the bridge.",
            choices: [
                {
                    text: "Enter",
                    next: "hermit"
                },
                {
                    text: "Return",
                    next: "bridge"
                }
            ]
        },

        hermit: {
            text: "A hermit tells you the curse is not what it seems. The crystal can either save or destroy the kingdom.",
            choices: [
                {
                    text: "Ask how",
                    next: "truth"
                }
            ]
        },

        truth: {
            text: "The king used the crystal to gain power and accidentally released an ancient spirit.",
            choices: [
                {
                    text: "Continue to the tomb",
                    next: "mountain"
                }
            ]
        },

        mountain: {
            text: "After a long climb, you reach the ancient tomb.",
            choices: [
                {
                    text: "Enter the tomb",
                    next: "tomb"
                }
            ]
        },

        tomb: {
            text: "Inside lies the glowing crystal and a shadow spirit.",
            choices: [
                {
                    text: "Take the crystal",
                    next: "spirit"
                },
                {
                    text: "Speak to the spirit",
                    next: "spiritTalk"
                }
            ]
        },

        spirit: {
            text: "The spirit attacks as you grab the crystal.",
            choices: [
                {
                    text: "Fight",
                    next: "crystalTaken"
                }
            ]
        },

        spiritTalk: {
            text: "The spirit says the king imprisoned it long ago and the curse is revenge.",
            choices: [
                {
                    text: "Help the king",
                    next: "crystalTaken"
                },
                {
                    text: "Help the spirit",
                    next: "spiritEnding"
                }
            ]
        },

        crystalTaken: {
            text: "You escape with the crystal and return to the castle.",
            choices: [
                {
                    text: "Use the crystal on the king",
                    next: "goodEnding"
                },
                {
                    text: "Destroy the crystal",
                    next: "trueEnding"
                }
            ]
        },

        goodEnding: {
            text: "The curse is lifted. The grateful king names you Royal Champion. Good Ending.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        },

        trueEnding: {
            text: "You destroy the crystal, ending its corrupting power forever. The kingdom enters a difficult but peaceful new era. True Ending.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        },

        spiritEnding: {
            text: "You free the ancient spirit. The old kingdom falls, but a new civilization rises from its ruins. Secret Ending.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        },

        badEnding1: {
            text: "You refuse the mission and leave the kingdom. Months later, the curse consumes the land. Bad Ending.",
            choices: [
                {
                    text: "Play again",
                    next: "start"
                }
            ]
        }
    }
};