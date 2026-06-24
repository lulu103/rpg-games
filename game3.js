window.game3 = {
    name: "The Laughing Crown of Village 9¾",
    start: "start",
    scenes: {
        start: {
            text: "You wake up in a cabbage cart rolling into a village you have never seen. A sign says: 'Welcome to Village 9¾ - Please do not trust the ducks.'",
            choices: [
                { text: "Get out of the cart", next: "village_square" },
                { text: "Stay hidden and observe", next: "tavern_intro" },
                { text: "Eat a suspicious cabbage", next: "bad_ending" }
            ]
        },

        village_square: {
            text: "The village square is chaotic. Ducks argue with merchants. A statue of a king is laughing uncontrollably. The mayor waves at you nervously.",
            choices: [
                { text: "Talk to the mayor", next: "mayor_quest" },
                { text: "Go to the forest", next: "forest_entrance" },
                { text: "Enter the tavern", next: "tavern_intro" }
            ]
        },

        mayor_quest: {
            text: "The mayor whispers: 'The Laughing Crown has been stolen. Without it, the statue will never stop laughing... or worse, start explaining jokes.'",
            choices: [
                { text: "Accept the quest", next: "accept_quest" },
                { text: "Refuse politely", next: "refuse_quest" },
                { text: "Ask for a hint", next: "mayor_hint" }
            ]
        },

        forest_entrance: {
            text: "The forest entrance sign reads: 'No refunds beyond this point.' Strange giggles echo between the trees.",
            choices: [
                { text: "Go deeper", next: "deep_forest" },
                { text: "Inspect a weird tree", next: "weird_tree" },
                { text: "Return to village", next: "village_square" }
            ]
        },

        tavern_intro: {
            text: "The tavern is filled with singing goblins and one extremely tired dragon acting as a chandelier.",
            choices: [
                { text: "Drink something glowing", next: "tavern_drink" },
                { text: "Talk to the bard", next: "bard_rumor" },
                { text: "Check the basement door", next: "hidden_basement" }
            ]
        },

        accept_quest: {
            text: "You are now officially employed as 'Crown Retrieval Specialist (Probably)'. You are given a map drawn on a napkin.",
            choices: [
                { text: "Head to the forest", next: "deep_forest" },
                { text: "Go to tavern for info", next: "tavern_intro" },
                { text: "Study the map carefully", next: "map_clue" }
            ]
        },

        refuse_quest: {
            text: "The mayor accepts your refusal but quietly marks you as 'emotionally suspicious'. The ducks also judge you.",
            choices: [
                { text: "Leave town", next: "crossroads" },
                { text: "Change your mind", next: "mayor_quest" }
            ]
        },

        mayor_hint: {
            text: "The mayor sighs: 'The crown was last seen near something that refuses to make sense... like a talking tree or a tax collector.'",
            choices: [
                { text: "Accept quest now", next: "accept_quest" },
                { text: "Go to forest", next: "forest_entrance" }
            ]
        },

        deep_forest: {
            text: "Deeper in the forest, the trees whisper your search history. One tree is laughing at you specifically.",
            choices: [
                { text: "Approach weird tree", next: "weird_tree" },
                { text: "Follow goblin noises", next: "goblin_trick" },
                { text: "Retreat", next: "crossroads" }
            ]
        },

        weird_tree: {
            text: "The tree offers you a reflection that doesn't match your movements. It smells like lost memories and cheap soup.",
            choices: [
                { text: "Touch the reflection", next: "secret_mirror" },
                { text: "Step back", next: "deep_forest" }
            ]
        },

        goblin_trick: {
            text: "A goblin offers you a '100% real map to success'. It is clearly drawn in ketchup.",
            choices: [
                { text: "Chase goblin", next: "trap_room" },
                { text: "Negotiate", next: "tavern_drink" }
            ]
        },

        tavern_drink: {
            text: "You drink glowing liquid. You now understand dolphin language and regret most of your decisions.",
            choices: [
                { text: "Listen to bard", next: "bard_rumor" },
                { text: "Go to basement", next: "hidden_basement" }
            ]
        },

        bard_rumor: {
            text: "The bard sings: 'The crown is where nonsense sleeps, guarded by the idea of a boss fight.'",
            choices: [
                { text: "Follow clue", next: "map_clue" },
                { text: "Drink more", next: "bad_ending" }
            ]
        },

        hidden_basement: {
            text: "The basement is surprisingly clean. A staircase leads downward with a sign: 'No plot relevance beyond this point'.",
            choices: [
                { text: "Go down", next: "cave_entrance" },
                { text: "Leave", next: "tavern_intro" }
            ]
        },

        map_clue: {
            text: "The napkin map rearranges itself when you blink. It now points to 'somewhere dramatic'.",
            choices: [
                { text: "Follow it", next: "crossroads" },
                { text: "Ignore it", next: "cave_entrance" }
            ]
        },

        crossroads: {
            text: "You reach a crossroads. One path smells like adventure, one like danger, and one like questionable soup.",
            choices: [
                { text: "Enter cave path", next: "cave_entrance" },
                { text: "Visit cursed shop", next: "cursed_shop" },
                { text: "Go back to village", next: "village_square" }
            ]
        },

        cursed_shop: {
            text: "A shop appears that wasn't here before. The sign reads: 'Definitely Not Cursed (Lying)'.",
            choices: [
                { text: "Buy talking sword", next: "talking_sword" },
                { text: "Leave immediately", next: "crossroads" }
            ]
        },

        talking_sword: {
            text: "The sword immediately starts insulting your fashion sense and destiny.",
            choices: [
                { text: "Listen carefully", next: "secret_mirror" },
                { text: "Throw it away", next: "bad_ending" }
            ]
        },

        cave_entrance: {
            text: "A giant cave yawns open. It whispers: 'I contain at least one plot twist and several bad decisions.'",
            choices: [
                { text: "Enter cave", next: "cave_guard" },
                { text: "Turn back", next: "crossroads" }
            ]
        },

        cave_guard: {
            text: "A guard made of rock and bureaucracy blocks your path. He asks for three forms of emotional identification.",
            choices: [
                { text: "Fight him", next: "trap_room" },
                { text: "Talk politely", next: "puzzle_room" }
            ]
        },

        trap_room: {
            text: "You fall into a trap room filled with extremely confident floor tiles.",
            choices: [
                { text: "Solve escape puzzle", next: "puzzle_room" },
                { text: "Give up", next: "bad_ending" }
            ]
        },

        puzzle_room: {
            text: "A glowing puzzle asks: 'What is funnier than destiny?' The room waits expectantly.",
            choices: [
                { text: "Continue forward", next: "monster_comedy" },
                { text: "Overthink it", next: "time_loop" }
            ]
        },

        monster_comedy: {
            text: "A monster appears but slips on its own dramatic entrance. It seems embarrassed.",
            choices: [
                { text: "Spare it", next: "fake_boss" },
                { text: "Attack it", next: "fake_boss" }
            ]
        },

        fake_boss: {
            text: "The monster reveals it was just a performance artist hired to test heroes' patience.",
            choices: [
                { text: "Accept truth", next: "good_ending" },
                { text: "Run away", next: "bad_ending" }
            ]
        },

        secret_mirror: {
            text: "The mirror shows you wearing a crown made of jokes. It invites you inside.",
            choices: [
                { text: "Enter mirror", next: "time_loop" },
                { text: "Ignore it", next: "weird_tree" }
            ]
        },

        time_loop: {
            text: "You are stuck in a loop where every decision leads to slightly worse hats.",
            choices: [
                { text: "Break loop", next: "dev_room" },
                { text: "Accept fate", next: "bad_ending" }
            ]
        },

        dev_room: {
            text: "You enter a strange room filled with floating code and an exhausted developer eating instant noodles.",
            choices: [
                { text: "Debug reality", next: "secret_ending" },
                { text: "Exit quietly", next: "good_ending" }
            ]
        },

        good_ending: {
            text: "You recover the Laughing Crown. The statue finally stops laughing and thanks you politely. The village declares you 'Reasonably Helpful Hero'.",
            choices: []
        },

        bad_ending: {
            text: "Everything goes wrong in a deeply avoidable way. The ducks are now in charge of the village.",
            choices: []
        },

        secret_ending: {
            text: "You discover the world is a tutorial simulation for training professional adventurers in comedic resilience. You are promoted.",
            choices: []
        }
    }
};