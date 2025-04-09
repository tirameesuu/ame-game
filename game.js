// Game data
const gameData = {
    "start": {
        "text": "You awaken, dazed and surrounded by the dense, humming wilderness of the Amazon rainforest. Every direction is a tangle of green. You have no map, no memory of how you got here. Only the desire to choose a path and move forward. Which way will you go?",
        "choices": [
        { "text": "Follow the sound of rushing waters", "next": "river" },
        { "text": "Venture deeper into the lush greenery", "next": "jungle" }
        ],
		},

		"jungle": {
        "text": "You move through vines and shadow, ears twitching. The jungle stirs with calls, strange scents, and shifting leaves. Sunlight breaks through the canopy in scattered beams.",
        "choices": [
        { "text": "This is overwhelming. I need to find somewhere to rest now!", "next": "tree-shelter" },
        { "text": "Keep moving, it doesn't feel safe here.", "next": "move-bushes" }
        ],
    },

    "move-bushes": {
        "text": "You press forward, legs tired but steady. Ahead, something beyond the bushes roar. Just out of sight. There it is again!",
        "choices": [
        { "text": "Investigate! It might be my lunch.", "next": "hit-car" },
        { "text": "I should mind my own business...", "next": "find-lake" }
        ],
    },
    "find-lake": {
        "text": "You keep walking, your steps growing slower. The trees open up, and before you lies a vast lake, its waters still and shimmering in the fading light. It feels like a sanctuary.",
        "choices": [
        { "text": "I'll a quick drink first.", "next": "lake-algae" },
        { "text": "This water looks strange. There'll be more ahead.", "next": "soy-farm" }
        ],
    },
    "soy-farm": {
        "text": "You continue on. In the distance, you spot a vast soy farm and rows of crops stretching endlessly under the sun.",
        "choices": [
        { "text": "I should stay away. There's definitely humans there.", "next": "no-soy" },
        { "text": "There's no other food for miles, I need it now!", "next": "soy-capture" }
        ],
    },
    "soy-capture": {
        "text": "As you step over the fence, a human spots you and quickly grabs you. Before you can react, his grip tightens, and you're caught.",
        "choices": [
        { "text": "Be aggressive! They'll let me go!", "next": "aggressive" },
        { "text": "Stay calm, I can outsmart them.", "next": "retreat-pet" }
        ],
    },
    "retreat-pet": {
        "text": "You're thrown into a cage, joining others who look like you. Days pass in the cramped darkness without food or water.",
        "choices": [
        { "text": "I'm going insane. I need to eat!", "next": "eat-roommate" },
        { "text": "Just be calm. This will be over soon.", "next": "eaten-roommate" }
        ],
    },
    "eat-roommate": {
        "text": "Desperation takes over. You turn on your roommate, devouring him in a frantic, desperate frenzy. The others watch in terror. Days later, you're in a kid's room.",
        "choices": [
        { "text": "This cage is so tiny, let me out now!", "next": "release-pet" },
        { "text": "Collect yourself! There's no point fighting", "next": "calm-pet" }
        ],
    },
    "release-pet": {
        "text": "You growl and show your teeth, frustration bubbling over. The owner, startled and afraid, bags you up and throws you into the drain, free but alone.",
        "choices": [
        { "text": "I can't see in the water, I'll swim upstream so it's clearer", "next": "eaten-local" },
        { "text": "I smell something familiar, I need to follow it.", "next": "colonise" }
        ],
    },
    "eaten-local": {
        "text": "You run through the drain, hoping for freedom, but suddenly, a stray cat emerges from the shadows, growling. Hungry and territorial, it pounces on you. You died by cat bite.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "release-pet": {
        "text": "The pheromones have drawn to another of your kind. Soon, your colony grows, outcompeting native species, becoming invasive and overwhelming the ecosystem. You survived the Amazon, but at what cost?",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-29" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "calm-pet": {
        "text": "You remain calm, eating the stale food with quiet gratitude. Despite neglect, you find comfort in small moments: sunlight through the window, the occasional pat from your owner. You survived the Amazon?",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-28" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "eaten-roommate": {
        "text": "Fear makes you shrink into the corner. The others, hungry and desperate, turn on you, their sharp teeth sinks in. You died by cannibalism. ",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "aggressive": {
        "text": "You lash out, hissing and thrashing in their grip. The human recoils, surprised by your aggression, and quickly lets go.",
        "choices": [
        { "text": "Run to the flooded forest in the west. I need clean water", "next": "meet-arapaima" },
        { "text": "Hide in jungle, they can't follow me all the way.", "next": "meet-anaconda" }
        ],
    },
    "meet-anaconda": {
        "text": "As you pass through the forest, you spot a  wounded anaconda coiled lazily on a rock. She offers to help you if you share your next catch.",
        "choices": [
        { "text": "Alright, only if you don't eat me", "next": "help-anaconda" },
        { "text": "No way! Who would wanna work with an apex predator?", "next": "no-anaconda" }
        ],
    },
    "help-anaconda": {
        "text": "You catch a bush dog and bring it to her. With a slow, deliberate hiss, it spreads the message to the jungle: you're not to be eaten. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-27" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-anaconda": {
        "text": "She slithers away in anger, and her husband soon arrives. He coils around you, squeezing tighter until your vision fades. You died by Anaconda.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-arapaima": {
        "text": "In the flooded forest, you meet an arapima with a hook stuck in its cheek. It speaks, offering to help you catch dinner if you remove the hook.",
        "choices": [
        { "text": "Of course I'll help!", "next": "help-arapaima" },
        { "text": "He might be dangerous... he's 10x my size", "next": "ignore-arapaima" }
        ],
    },
    "ignore-arapaima": {
        "text": "You keep swimming deeper into the river alone. The current grows stronger. Suddenly, you find yourself trapped behind a dam. A net snares you. You died by fishing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-arapaima": {
        "text": "Grateful for your help, the arapima offers you small fish. 'Stay close,' he says. 'We can warn each other about fishermen.' Survival is easier together. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-26" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-soy": {
        "text": "You avoid the soy farm, but the land around it has been cleared for farming. There's no food left in the wild. Days pass, your strength fades. You died from starvation.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "lake-algae": {
        "text": "The lake’s water, tainted by eutrophication, had a toxic algae bloom. You drank, unaware of the poison. The toxins spread quickly, causing paralysis. You died by toxic algae.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "hit-car": {
        "text": "You spot a road ahead, your path to freedom. You sprint toward it, but before you can reach the other side, a car swerves, striking you. You died by car crash.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "tree-shelter": {
        "text": "You climb a sturdy tree, looking for shelter among the branches. As you settle in, your eyes catch movement. An ocelot sits below, silent and watching. It does not blink.",
        "choices": [
        { "text": "Camouflage and hide!", "next": "hide-ocelot" },
        { "text": "Run away!", "next": "run-ocelot" }
        ],
    },
    "run-ocelot": {
        "text": "You run through the undergrowth, heart racing as the ocelot disappears behind you. The danger is gone, but hunger remains.",
        "choices": [
        { "text": "This moss seems edible. I'll snack on this first", "next": "eat-moss" },
        { "text": "I'd rather wait for some real meat", "next": "meet-coral" }
        ],
    },
    "meet-coral": {
        "text": "You crouch low, waiting for something to hunt. The air is still. Then you see it. Bright bands of red, yellow, and black slide through the grass.",
        "choices": [
        { "text": "Pounce and eat!", "next": "eat-coral" },
        { "text": "Hmm... it might be poisonous.", "next": "no-coral" }
        ],
    },
    "eat-coral": {
        "text": "After your small lunch, you search for shelter. The bite from earlier still burns. The venom clouds your vision. A creature comes out of nowhere and offers you a fruit.",
        "choices": [
        { "text": "Give it to me now! I can't take it anymore", "next": "meet-owl" },
        { "text": "You're just trying to poison me! Go away!", "next": "stomp-human" }
        ],
    },
    "meet-owl": {
        "text": "You bite into the Heartroot. It’s bitter, thick like sap. Warmth spreads through your chest. The dizziness fades slowly. He offers you some more food for your journey ahead.",
        "choices": [
        { "text": "Climb the mountain in the west", "next": "go-mountain" },
        { "text": "It's too late. I should rest nearby", "next": "bullet-ants" }
        ],
    },
    "go-mountain": {
        "text": "You push yourself toward the distant mountain, each step heavier than the last. The air is dry, the ground cracks beneath your weight. Your throat aches. You see a small pond in front.",
        "choices": [
        { "text": "Rest by the pond first! I'm parched...", "next": "die-mosquito" },
        { "text": "I need to keep going. Something's pulling me.", "next": "mountain-spirit" }
        ],
    },
    "mountain-spirit": {
        "text": "You reach the mountain peak, breath ragged. The wind stills. A warm light surrounds you. The mountain spirit watches, then blesses you with strength. You are no longer alone. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-25" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "die-mosquito": {
        "text": "As you rest by the pond, a cloud of mosquitoes rises around you. Days later, fever grips you. You never wake again. You died by mosquito bites.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        "questionNumber": 2
    },
    "bullet-ants": {
        "text": "You climb a tree for rest, settling into a hollow branch. It seems safe. Then you feel them. Crawling, biting, burning. You died by bullet ant bites.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "stomp-human": {
        "text": "Colors pulse, sounds stretch into music as you try to navigate the forest. Voices emerge in strange accents. A group of humans in beige crush you under their boots. They didn't see. You died by crushing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-moss": {
        "text": "You nibble at the moss covering the forest floor. It is damp and bitter, enough to quiet the pain for a moment, but not enough.",
        "choices": [
        { "text": "I've eaten enough, I need to find safe shelter.", "next": "thunderstorm" },
        { "text": "Nuts would be the perfect dessert right now!", "next": "meet-macaw" }
        ],
    },
    "meet-macaw": {
        "text": "You search the forest floor for fallen nuts, ears alert for movement. A flash of red and blue catches your eye. A macaw perches above, watching you with curious eyes.",
        "choices": [
        { "text": "Can I follow you? I'm new here!", "next": "follow-macaw" },
        { "text": "Hmm.. I should leave him alone", "next": "no-macaw" }
        ],
    },
    "no-macaw": {
        "text": "You search the forest floor, nose to the ground, but find nothing. The nuts are gone, taken before you arrived. Ahead, you spot a group of humans moving through the trees.",
        "choices": [
        { "text": "Hey! Do you have some food? I'm starving", "next": "approach-scientist" },
        { "text": "What scary creatures! Stay away!", "next": "away-scientist" }
        ],
    },
    "away-scientist": {
        "text": "You slip through the underbrush, away from the humans. You take one wrong step. A snap echoes through the trees. Steel clamps your leg. You died by bear trap.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "approach-scientist": {
        "text": "The scientists kneel gently, offering delicious nuts. You eat, wary but starving. They tag your ear and release you. Years pass and you see humans again.",
        "choices": [
        { "text": "Run away! They might not be as kind.", "next": "escape-scientist" },
        { "text": "I trust them!", "next": "yes-scientist" }
        ],
    },
    "yes-scientist": {
        "text": "It's the same scientists! The data from your tag helped them find a mate, the first you’ve seen in seasons. Together, you save your species from extinction. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-24" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "escape-scientist": {
        "text": "The scientists searched, but you stayed hidden, moving deeper into the forest. Seasons passed, and the signal faded. Without the data, they could not act in time. You were the lasr of your kind. You went extinct.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-macaw": {
        "text": "The macaw tilts its head, then drops a nut to you. He asks if you'd like to join their nut hunt.",
        "choices": [
        { "text": "I'd love to be part of your team!", "next": "join-macaw" },
        { "text": "Thanks for the nuts, but I'm a lone wolf", "next": "reject-macaw" }
        ],
    },
    "reject-macaw": {
        "text": "You turn away and walk into the jungle, alone by choice, steady and calm. The paths diverge.",
        "choices": [
        { "text": "Climb up the waterfall", "next": "go-waterfall" },
        { "text": "Descend towards the dark caves", "next": "cave-home" }
        ],
    },
    "cave-home": {
        "text": "You descend down the hills, finding a glowing cave lit with moss and crystals. It’s warm, quiet, and hidden. You curl up inside. This place is home now.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-23" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "go-waterfall": {
        "text": "You've reached the peak and the view is breathtaking. You wade into the water to cool off. The current is stronger than it looks. You’re dragged toward the falls, over. You died by drowning.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "join-macaw": {
        "text": "You follow the macaw through the canopy. More birds appear, vibrant and loud. They welcome you, no questions asked. You fly with them now. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-22" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "thunderstorm": {
        "text": "Rain begins to fall, slow and cold. Thunder rumbles across the canopy. As the storm nears, a small creature appears near a tree hollow. It looks at you, then waves silently, inviting you into its burrow.",
        "choices": [
        { "text": "No way! It's obviously a trap.", "next": "flash-flood" },
        { "text": "Yes please! I'm coming!", "next": "meet-tapir" }
        ],
    },
    "meet-tapir": {
        "text": "You stumble into a quiet glade, shivering and tired. A tapir looks up from a patch of roots and leaves. Without a word, he nudges some toward you. He offers you her children's old burrow for shelter. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-21" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "flash-flood": {
        "text": "You ignore the creature and keep searching, hoping for better shelter. The rain grows heavy. Suddenly, a wall of water rushes through the trees. You died by drowning.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "hide-ocelot": {
        "text": "The ocelot circles below, sniffing the air. It prowls for a while, then disappears into the undergrowth. You're safe in the branches now, but your stomach aches from hunger.",
        "choices": [
        { "text": "I should hunt now for the nocturnal prey", "next": "panther-stalk" },
        { "text": "I've had enough thrill today, I'll hunt tomorrow", "next": "logger-death" }
        ],
    },
    "panther-stalk": {
        "text": "Through the thick leaves, you spot it. Not an ocelot this time. A panther. Larger, darker, silent. It watches from the shadows, and your fur stands on end.",
        "choices": [
        { "text": "Attack him first!", "next": "attack-panther" },
        { "text": "Run away. This is a panther, not just an ocelot!", "next": "run-armadillo" }
        ],
    },
    "run-armadillo": {
        "text": "You break into a clearing, breath heavy. An armadillo freezes, then speaks with a calm voice. If you don't eat me, I’ll show you where the water runs clean.",
        "choices": [
        { "text": "Eat her now. Who knows when my next meal will come?", "next": "eat-armadillo" },
        { "text": "Alright, lead the way...", "next": "friend-armadillo" }
        ],
    },
    "friend-armadillo": {
        "text": "You spare the armadillo. True to his word, he leads you through tangled roots and stone paths to a hidden spring. For a time, you thrive. But the rains never return and prey dies off. Your friend says the migratory birds will come in a few days and you should wait to feast.",
        "choices": [
        { "text": "I'll wait for the birds. Can't wait for the feast", "next": "stay-savanna" },
        { "text": "We still need water... let's walk to the horizon. Maybe there's something more.", "next": "find-ravine" }
        ],
    },
    "find-ravine": {
        "text": "You walk toward the horizon, weak but still moving. Just as the sun begins to fall, the ground dips. Below, a lush ravine bursts with green, water, and life. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-20" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "stay-savanna": {
        "text": "You wait in the open savanna, watching the sky. The migratory birds never come. Their songs are silent this season, scared off by machines and smoke near the area. You died from hunger.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    
    "eat-armadillo": {
        "text": "Hunger wins. You eat the armadillo, warm and quiet. Days pass, the thirst grows worse. You search for water, but the riverbeds are dry. The drought has taken everything. You died of thirst.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "attack-panther": {
        "text": "The panther strikes fast, claws raking your side. You scramble away, bleeding and disoriented. With fading strength, you climb a nearby tree, searching for safety. You see two paths.",
        "choices": [
        { "text": "Dash towards the rushing river!", "next": "help-catfish" },
        { "text": "Follow the glowing lights", "next": "human-scared" }
        ],
    },
    "human-scared": {
        "text": "You burst from the trees toward the lights, desperate and stumbling. The entire human camp screams as you emerge. A shot cracks through the air. You fall. You died by gunshot.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-catfish": {
        "text": "You limp to the water's edge, blood trailing behind you. The catfish emerges, slow and smooth, its eyes clouded with age. It guides you to a submerged hollow beneath the riverbank, hidden by reeds and roots. The current masks your scent, the mud cools your wound. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-7" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "logger-death": {
        "text": "You oversleep, curled in the branches. The roar of chainsaws jolts you awake. The tree cracks beneath you. You fall with it, swallowed by noise and dust. You died on impact",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "river": {
        "text": "The tranquil river sparkles with life. Shoals of vibrant fish dart beneath the surface, weaving through roots and reeds.",
        "choices": [
        { "text": "I'll relax here for a bit before my journey ahead...", "next": "chill-at-river" },
        { "text": "I need to fuel up on food now!", "next": "fish-food" }
        ],
    },
    "chill-at-river": {
        "text": "You kneel by the riverbank, where the water glistens like glass. Scattered along the shore, pastel-colored shells shimmer under the sun. For a moment, the jungle feels gentle.",
        "choices": [
        { "text": "The water looks cooling, lets go for a dip!", "next": "downstream" },
        { "text": "I wonder if there are any yummy things to snack on here", "next": "shells" }
        ],    },
    "shells": {
        "text": "Tempted by their shine, you nibble on a few of the river shells. Then a wave of nausea suddenly hits. Oh no! The water here is contaminated with heavy metals from the mining upstream...",
        "choices": [
        { "text": "There might be humans nearby. I should stay here for safety", "next": "eel-piranha" },
        { "text": "I need clean water. Time to find some", "next": "mangrove-manatee" }
        ],    },
    "mangrove-manatee": {
        "text": "You push through twisted roots and emerge into a flooded mangrove forest. A gentle manatee floats nearby, munching on water plants. It turns to you with wise eyes. 'You look lost. I know a safe route through the mangroves... but it’s longer. There’s a faster path too, but something dark lingers there.'",
        "choices": [
        { "text": "Take the longer path with the Manatee", "next": "follow-manatee" },
        { "text": "Take the shorter path alone", "next": "alone-manatee" }
        ],    },
    "alone-manatee": {
        "text": "You pass under a steep muddy bank—then hear a crack. Logging nearby destabilized the slope. You died by suffocation",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "follow-manatee": {
        "text": "The manatee leads you slowly through winding waters. The journey is peaceful—but ahead, a barrier of tangled roots blocks the way. Theres a hidden underwater passage, he says. But its tight and dark.",
        "choices": [
        { "text": "Dive through the tunnel but risk getting stuck", "next": "tunnel-manatee" },
        { "text": "Try to break through the roots and go over", "next": "roots-manatee" }
        ],    },
    "roots-manatee": {
        "text": "You struggle and snap a branch, triggering a swarm of wasps nesting above. Died by wasp stings.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "tunnel-manatee": {
        "text": "You hold your breath and follow the dim light. At the other end—fresh, clear water and blooming lilies.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-8" },
        { "text": "Play again", "next": "start" }
        ],    },
    "eel-piranha": {
        "text": "Under the water, you see a glowing-eyed electric eel. He says he will lead you to a spring. A piranha from across the water shouts 'he's lying! follow me and you'll be safe!'",
        "choices": [
        { "text": "Follow Mr. Electric Eel, why would he lie?", "next": "trust-eel" },
        { "text": "Ms. Piranha seems more genuine", "next": "trust-piranha" }
        ],    },
    "trust-eel": {
        "text": "He glides silently through a submerged cave system. Sparks flicker around him as he says, 'The pure spring is deeper inside. But there are territorial river rays nearby.'",
        "choices": [
        { "text": "Stay close to Mr.Eel even though he might shock you", "next": "close-eel" },
        { "text": "Led him guide you from far ahead", "next": "far-eel" }
        ],
    },
    "far-eel": {
        "text": "It's too dark! You lost Mr. Eel in a school of small fish. You stay quiet to listen for cues.",
        "choices": [
        { "text": "Follow the sound of water dripping", "next": "water-drip" },
        { "text": "Follow the school of small fish", "next": "follow-school" }
        ],    },
    "water-drip": {
        "text": "You find a crystal-clear spring filtered by limestone rock. You survived!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-7" },
        { "text": "Play again", "next": "start" }
        ],    },
    "follow-school": {
        "text": "You trail the shimmering school deeper into the channel—but suddenly the water grows still and unnaturally warm. A faint hum echoes below. You surface… and see it too late: an illegal fishing boat’s electrified grid, rigged to stun fish en masse. Died by illegal fishing",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "close-eel": {
        "text": "Sudden surge! You're shocked a little but unharmed. The rays back off. You find a split path. Mr.Eel is incoherent after the shock, it took up so much energy. You need to lead the way now. It's too late to turn back.",
        "choices": [
        { "text": "Go through the glowing tunnel", "next": "tunnel-eel" },
        { "text": "Go through the driftwood tunnel", "next": "driftwood-eel" }
        ],    },
    "driftwood-eel": {
        "text": "You emerge outside the cave, back in the open area. An osprey scoops you up. Died by osprey.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],    },
    "tunnel-eel": {
        "text": "You reach a hidden cenote with clean, mineral-rich water and glowing fish.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-6" },
        { "text": "Play again", "next": "start" }
        ],    },
    "trust-piranha": {
        "text": "Ms Piranha leads you into a murky tributary with flickers of gold in the silt. You can either dive down now to find the spring or wait until it's night when there's less predators. Good luck! She leaves.",
        "choices": [
        { "text": "I'll die of thirst if I wait! Dive right now!", "next": "dive-now" },
        { "text": "Hmm.. I can wait a bit longer", "next": "wait-dive" }
        ],    },
    "wait-dive": {
        "text": "The river glows under moonlight, but you're blinded by the blackwater. Shadows move. A group of sharp-toothed Tambaqui approach.",
        "choices": [
        { "text": "Hide between some rocks.", "next": "hide-tambaqui" },
        { "text": "Ask them for help.", "next": "help-tambaqui" }
        ],    },
     "help-tambaqui": {
        "text": "They're friendly! The leader warns you that Ms. Piranha is known for luring animals to her family for dinner! He offers you to join their group swim upstream together.",
        "choices": [
        { "text": "Swim upstream with the Tambaqui", "next": "swim-tambaqui" },
        { "text": "No thank you, I'll find my own way.", "next": "refuse-tambaqui" }
        ],    },
    "refuse-tambaqui": {
        "text": "Alright. You can also take a shortcut through the mini river behind those trees. But be careful, lotsa fishermen like to camp there!",
        "choices": [
        { "text": "Swim there now, the fishermen won't be fishing at night", "next": "shortcut-now" },
        { "text": "Sleep first, at least I can see in the morning.", "next": "shortcut-morning" }
        ],
    },
    "shortcut-now": {
        "text": "Swim towards the flooded forest now. Suddenly, you get stuck in some kind of box? Oh no! They left the trap overnight. There's a bunch of fish. Died by fishing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "shortcut-morning": {
        "text": "Take a long sleep. The river drifts you in an unknown direction during the night. You wake up in at the coastal area! You drifted into saltwater. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-5" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "swim-tambaqui": {
        "text": "You swim for hours and reach a beautiful oxbow lake! You survived the amazon.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-4" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "hide-tambaqui": {
        "text": "The Tambaqui leave without noticing you. Phew! You quietly wade through the blackwater, vision blurred by tannins. Every direction looks the same. Hours pass. You circle back unknowingly, again and again. Died from exhaustion",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "dive-now": {
        "text": "You descend into shimmering water. Suddenly, a water scorpion glides near.",
        "choices": [
        { "text": "Wait for it to pass", "next": "wait-scorpion" },
        { "text": "Hide in a crevice! He's gonna sting me!", "next": "hide-scorpion" }
        ],
    },
    "wait-scorpion": {
        "text": "The scorpion ignores you and disappears. You discover a hidden spring...but it's full of piranhas. You're their dinner. Died by piranhas.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "downstream": {
        "text": "You drift gently downstream, cradled by the current. You pass through quiet village. An aromatic smell curls from the huts as children's laughter echos softly across the water.",
        "choices": [
        { "text": "Swim ashore and beg for scraps", "next": "beg-scraps" },
        { "text": "Watch from afar. They might be dangerous!", "next": "watch-village" }
        ],
    },
    "fish-food": {
        "text": "The fish are small, barely worth the effort. You stare upstream, wondering if larger prey waits beyond—or if hunger will punish your gamble.",
        "choices": [
        { "text": "Go upstream to find better food", "next": "upstream" },
        { "text": "They might be small but there are many. I'm staying right here.", "next": "stay-caiman" }
        ],
    },
    "stay-caiman": {
        "text": "As you crouch by the river, spearfishing in silence, a ripple breaks the surface. Yellow eyes rise. A caiman, still as stone, watching you from the shallows.",
        "choices": [
        { "text": "Ignore the fish! Run away!", "next": "run-caiman" },
        { "text": "I came here first! Stand my ground.", "next": "fight-caiman" }
        ],
    },
    "fight-caiman": {
        "text": "You charge the caiman, heart pounding. It snaps its jaws once, twice. Then drags you under. The water stills. You died by Caiman attack.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "run-caiman": {
        "text": "You sprint from the river, lungs burning. The air shifts—cooler, denser. Mist curls around twisted trees. You’ve entered a cloud forest, where every shadow whispers and nothing feels alone.",
        "choices": [
        { "text": "Find shelter or I'll freeze!", "next": "cloudforest-burrow" },
        { "text": "I'm starving. I need food!", "next": "clearing-cattle" }
        ],
    },
    "clearing-cattle": {
        "text": "You push through thick underbrush—and suddenly, the trees break. A wide clearing stretches before you, dotted with grazing cattle and a worn-down farmhouse. You've found a cattle farm. Their meat smells heavenly.",
        "choices": [
        { "text": "Jump the fence. I need food now!", "next": "guard-dog" },
        { "text": "Seems dangerous, I'll sneak in by the gate", "next": "caught-farmer" }
        ],
    },
    "caught-farmer": {
        "text": "You make it halfway around the fence when a sharp voice yells behind you. The farmer stands with a rifle raised.",
        "choices": [
        { "text": "Attack him before he shoots!", "next": "attack-farmer" },
        { "text": "Seems dangerous, I'll sneak in by the gate", "next": "lunch-farmer" }
        ],
    },
    "lunch-farmer": {
        "text": "You back away, hands raised. The farmer lowers his rifle, eyes narrowing. After a pause, he sighs and hands you half a sandwich.",
        "choices": [
        { "text": "Eat the sandwich!", "next": "tuberculosis-end" },
        { "text": "Run away! He's gonna poison me!", "next": "farmer-death" }
        ],
    },
    "farmer-death": {
        "text": "The jungle stretches endlessly. No fruit, no game, no water. Your stomach aches, your steps falter. You should’ve taken the sandwich.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        "questionNumber": 3
    },
    "tuberculosis-end": {
        "text": "The cough won’t stop. Your chest aches from contracted tuberculosis. Hunting is impossible now.Every few days, you limp back to the farm. The farmer waits, silent, offering bread and water.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-17" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "attack-farmer": {
        "text": "As you attack the farmer, his dogs run to his rescue. You escape into the jungle, shaking, burning with fever. You contracted canine distemper. You can't hunt anymore. You died of starvation.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "guard-dog": {
        "text": "As you step into the clearing, a low growl stops you cold. A guard dog bursts from the farmhouse, teeth bared. You run, but not fast enough. He sinks his teeth deep.",
        "choices": [
        { "text": "I can't beat them. I need to run away.", "next": "meet-firefly" },
        { "text": "Keep fighting! There's no more food for miles!", "next": "fight-dog" }
        ],
    },
    "meet-firefly": {
        "text": "You stumble back into the cloud forest, badly wounded. Mist curls around you and then, a soft glow ahead. A single flicker… floating.",
        "choices": [
        { "text": "Ask the little firefly for help!", "next": "help-firefly" },
        { "text": "That's no firefly... it's the eyes of something evil", "next": "ignore-firefly" }
        ],
    },
    "ignore-firefly": {
        "text": "You stumble through the mist, clutching your wound. The light fades behind you. No help comes. Your legs give out. You died by blood loss. ",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "help-firefly": {
        "text": "You whisper for help. The firefly drifts through the mist. You follow,limping, bleeding, until lights appear. A research center. Scientists rush out. You’re safe now.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-15" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "fight-dog": {
        "text": "You kick and claw, refusing to go down. The dog snarls, and suddenly—more join. A pack surrounds you. Teeth flash. You died by dog attack.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "cloudforest-burrow": {
        "text": "You spot a burrow beneath twisted roots—dry, hidden, perfect. But the leaves are flattened, the soil still warm. Something else sleeps here… or will return soon.",
        "choices": [
        { "text": "Sleep inside anyway... It's too cold out here", "next": "meet-spectacledbear" },
        { "text": "Someone might come, I'll dig my own burrow", "next": "dig-ownburrow" }
        ],
    },
    "dig-ownburrow": {
        "text": "You decide to dig your own shelter beneath a slope. The soil is loose, the rocks unstable. A rumble. Then collapse. You died by rocks crushing.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-spectacledbear": {
        "text": "As you settle in, a low huff echoes behind you. A spectacled bear, large and watchful, emerges from the mist—her cub nearby. She snorts, eyes firm: leave.",
        "choices": [
        { "text": "No! I was here first.", "next": "no-spectacledbear" },
        { "text": "I'm sorry, I'll leave...", "next": "yes-spectacledbear" }
        ],
    },
    "yes-spectacledbear": {
        "text": "The bear snorts softly, then speaks—not in words, but in feeling. Do you have a home? Her eyes soften. She takes you in as part of her family.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-12" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "no-spectacledbear": {
        "text": " The mother bear growls—louder this time. Then she charges. You don’t have time to run. Died by spectacled bear.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "upstream": {
        "text": "You swim upstream in search of real meat… but the waters ahead ripple with strange shapes.",
        "choices": [
        { "text": "Approach the figures. Maybe I can eat them", "next": "approach-capybara" },
        { "text": "Who knows what they are? Better stay away.", "next": "ignore-capybara" }
        ],
    },
    "ignore-capybara": {
        "text": "Hunger gnaws at me as I scan the dense jungle—twisting vines, distant calls, and shadows shifting with life. It's time to search for something, anything, that will keep me going.",
        "choices": [
        { "text": "Scour under rocks for bugs", "next": "meet-centipede" },
        { "text": "Take my chances and look for something more filling.", "next": "hunt-meat" }
        ],
    },
    "hunt-meat": {
        "text": "Your stomach growls. The jungle offers two trails—one lined with scattered chicken-like tracks, likely junglefowl; the other shows clawed drag marks and droppings, pointing toward a large iguana basking deeper in the brush.",
        "choices": [
        { "text": "Follow junglefowl, they're easier to catch", "next": "go-junglefowl" },
        { "text": "Follow the iguanas, the meat will be so filling.", "next": "go-iguana" }
        ],
    },
    "go-iguana": {
        "text": "You pounce on the iguanas and they all scatter, but one doesn't move. Just stares... it's jungle spirit. Before you can react, it vanishes, and you collapse, lifeless, under its curse.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "go-junglefowl": {
        "text": "You silently creep forward, but as you lunge, the fowl darts away with surprising speed, letting out a sharp squawk. You chase after it, but the terrain is difficult.",
        "choices": [
        { "text": "Keep chasing them!", "next": "chase-junglefowl" },
        { "text": "Give up and find something else to eat", "next": "giveup-junglefowl" }
        ],
    },
    "giveup-junglefowl": {
        "text": "You duck behind a thick tree and hold your breath. The poacher approaches, scanning the area. He eventually leaves, frustrated. The fowl has disappeared into the distance. You're starving, but there's a carcass nearby.",
        "choices": [
        { "text": "Eat the carcass now.", "next": "eat-carcass" },
        { "text": "Find something fresh", "next": "giveup-carcass" }
        ],
    },
    "eat-carcass": {
        "text": "You eat the tainted meat, feeling sluggish. The sickness lingers, leaving you constantly nauseous and weak, surviving but chronically ill from the contaminated food.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-12" },
        { "text": "Play again", "next": "start" }
        ],  
    },
    "giveup-carcass": {
        "text": "You decide not to risk it. The carcass is old, and you continue to move through the jungle in search of something fresher. Hours pass, your hunger growing more intense, and you feel your strength draining. You died from starvation",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "chase-junglefowl": {
        "text": "You lunge again, but in the heat of the moment, you bump into a hidden poacher's snare. The trap pulls tight around your leg, leaving you vulnerable. The poacher approaches, raising a net. You died by poaching",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "meet-centipede": {
        "text": "As I lift a damp, moss-covered rock, movement catches my eye—a massive centipede, its armored body glistening, coils in the shadows, watching me with eerie stillness.",
        "choices": [
        { "text": "You look delicious! Nom nom nom.", "next": "eat-centipede" },
        { "text": "Hey little guy! Wanna be friends?", "next": "friend-centipede" }
        ],
    },
    "friend-centipede": {
        "text": "He bites you! Your vision spins, but you remember stories of jungle medicine. Nearby, you find two plants—one with twisting red roots, the other with glossy purple berries.",
        "choices": [
        { "text": "Chew the roots", "next": "roots-centipede" },
        { "text": "Chomp on the berries", "next": "berries-centipede" }
        ],
    },
    "roots-centipede": {
        "text": "You chew the root. It burns your tongue, but the fire in your veins starts to fade. Your heart steadies. You’ve beaten the venom. You're too afraid to go anywhere else. You hide inside the tree forever.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-11" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "berries-centipede": {
        "text": "Sweet at first—then numbness. Your breath catches. Your body convulses. These berries weren’t medicine. You died by venom.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-centipede": {
        "text": "a strange warmth floods my veins. The jungle shifts, colors bloom unnaturally... and suddenly, I’m floating through the trees.",
        "choices": [
        { "text": "Let the high take over", "next": "lara-mapinguari" },
        { "text": "Fight the venom!", "next": "fight-venom" }
        ],
    },
    "lara-mapinguari": {
        "text": "The air grows heavy as night falls over the Amazon. Beneath the deep hum of insects and distant bird calls, two figures emerge from the foliage—both pulsing with power beyond this world.",
        "choices": [
        { "text": "Follow the glowing woman", "next": "follow-lara" },
        { "text": "Follow the scary beast", "next": "follow-mapin" }
        ],
    },
    "follow-mapin": {
        "text": "You step back and bow slightly, showing respect. “What are you?” you ask. The Mapinguari’s chest rumbles. It opens its mouth, which on on its belly, revealing not teeth—but a swarm of roots and spores. You inhale by accident. You died",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-lara": {
        "text": "You step into the cool, ankle-deep river. The world quiets as mist surrounds you. The Iara sings—a haunting melody that seems to slow time. Soon, you're floating, weightless, in a current of memory and song. You see flashes of ancient Amazonian tribes, the spirits of drowned wanderers, and a glimpse of yourself in another life.",
        "choices": [
        { "text": "Let the river carry you", "next": "follow-trance" },
        { "text": "No! I must fight!", "next": "fight-trance" }
        ],
    },
    "fight-trance": {
        "text": "You thrash against the current, struggling to escape. The Iara’s eyes narrow. The water turns cold—unforgiving. Your breath runs out. Silence. The river keeps what it claims. Died by Iara.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "follow-trance": {
        "text": "You fight the venom’s grip, forcing your mind to stay sharp—but your body fails. Darkness creeps in, and your heartbeat fades into silence. You died, but wait... not really.",
        "choices": [
            { "text": "Find out what animal you are", "next": "result-10" },
            { "text": "Play again", "next": "start" }
        ],
    },
    "fight-venom": {
        "text": "You grit your teeth, resisting the venom’s pull—but your limbs betray you. The jungle spins, your heart races… then stops. The last thing you see is sky. Died by centipede venom",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "approach-capybara": {
        "text": "You surface beside a group of capybaras lounging peacefully. One nudges a pile of jungle fruits toward you with a gentle snort. They seem friendly… but something feels off.",
        "choices": [
        { "text": "No thanks, I'd rather eat YOU!", "next": "eat-capybara" },
        { "text": "Yes please? This fruit seems delicious!", "next": "fruit-capybara" }
        ],
    },
    "fruit-capybara": {
        "text": "It’s juicy, sweet, and cool—like rain in your mouth. The capybaras chirp with delight, nuzzling your side. For now, you belong here.",
        "choices": [
        { "text": "Stay with my new friends forever!", "next": "stay-capybara" },
        { "text": "Thank you for the fruit but I want to explore!", "next": "cartel-death" }
        ],
    },
    "cartel-death": {
        "text": "You stumble upon a hidden grove—lush and oddly pristine. You’ve entered cartel-controlled coca fields. You trip a motion sensor and are taken out by a trap meant for authorities. You died by cartel.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "stay-capybara": {
        "text": "You choose to stay. Days pass in gentle peace—basking in the sun, swimming in clear streams, sharing fruit with your capybara companions until the day you die, surrounded by your dear friends. Peace at last. ",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-9" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "eat-capybara": {
        "text": "Driven by hunger, you catch a smaller capybara—its fur slick, its eyes wide. The meat is tender, gamey, and faintly sweet from the jungle fruits it had eaten.",
        "choices": [
        { "text": "Stay near the river for the next group to come and drink", "next": "factory-explosion" },
        { "text": "Venture away from the river. I'll find more food faster", "next": "grasslands-anteater" }
        ],
    },
    "grasslands-anteater": {
        "text": "You reach the open grasslands. An anteater looks up mid-snack, sniffs, then waddles ahead. Without a word, it leads you deeper, toward something only it seems to know.",
        "choices": [
        { "text": "There's my dinner!", "next": "eat-anteater" },
        { "text": "Hmm, he seems suspicious. I won't follow him.", "next": "sepsis-death" }
        ],
    },
    "eat-anteater": {
        "text": "You strike. The anteater thrashes, but it’s no match. You feast, muscles charged with new strength. From now on, even the shadows step aside. You are no longer prey.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-9" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "sepsis-death": {
        "text": "You ignore the anteater and wander thirsty through the tall grass. Blades slice your skin, small wounds you barely notice—until fever sets in days later. You Died by Sepsis",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "factory-explosion": {
        "text": "While waiting at the river, you notice a humming from a strange, rusted structure. It gets louder. Suddenly a ball of light bursts, igniting leaking gas, killing every animal and human in the area. You died by explosion",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    
    "fire": {
        "text": "You manage to build a fire. The rising smoke might attract help—or unwanted attention.",
        "choices": [
        { "text": "Keep the fire burning", "next": "rescue" },
        { "text": "Extinguish the fire to remain hidden", "next": "night" }
        ],
    },
    "rapids": {
        "text": "Your raft is battered by the rapids. You barely make it to shore, injured and exhausted.",
        "choices": [
        { "text": "Stumble toward the village", "next": "village" },
        { "text": "Seek shelter in the dense jungle", "next": "jungle" }
        ],
    },
    "shore": {
        "text": "After a strenuous swim, you reach the riverbank. Now you must choose: look for civilization or risk venturing into the jungle.",
        "choices": [
        { "text": "Search for signs of civilization", "next": "village" },
        { "text": "Head deeper into the jungle", "next": "jungle" }
        ],
    },
    "beg-scraps": {
        "text": "An indigenous child approaches shyly. She throws you a piece of roasted chicken. Warm, fragrant, wrapped in a banana leaf. You devour it.",
        "choices": [
        { "text": "These humans are so nice! What else can I do here?", "next": "explore-village" },
        { "text": "Head deeper into the jungle", "next": "enter-jungle-1" }
        ],
    },
    "enter-jungle-1": {
        "text": "As you step off the worn trail and into thicker jungle, the air grows still. Vines brush your shoulders, and a prickling sensation crawls up your spine. Someone’s watching you.",
        "choices": [
        { "text": "Run as fast as your legs can carry you! Don't look back!", "next": "run-puma" },
        { "text": "I'll camouflage in some bushes", "next": "hide-spider" }
        ],
    },
    "run-puma": {
        "text": "You sprint through the forest and find a small cavern. There's a fruit bat in here! He offers you a space in the cave in exchange for you collecting some fruits behind some small crevices for him. Upon looking, there are two different fruits.",
        "choices": [
        { "text": "Take the blue fruits.", "next": "blue-fruit" },
        { "text": "Take the red fruits", "next": "red-fruit" }
        ],
        
    },
    "hide-spider": {
        "text": "The looks around and runs in the other direction. Phew! You catch your breath...only to feel dozens of eyes lock onto you. From the underbrush emerges a massive wolf spider. He says he knows where to get some fresh water. ",
        "choices": [
        { "text": "Another second without water and I'll die! I need some water.", "next": "spider-death" },
        { "text": "No thanks! I'll find the water myself.", "next": "meadow-end" }
        ],
    
    },
    "meadow-end": {
            "text": "Ignoring the spider’s unblinking stare, you slip free and push ahead, only to emerge into a breathtaking meadow, glowing with wildflowers and golden light.",
            "choices": [
            { "text": "Find out what animal you are", "next": "result-4" },
            { "text": "Play again", "next": "start" }
            ],
  

    },
    "spider-death": {
        "text": "You follow him into the bushes. The sticky silk wraps around your limbs. The last thing you see is the wolf spider crawling closer. Darkness follows. You died by spider wolf venom.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
        
    },
    "blue-fruit": {
        "text": "'Ah, acai is our favourite! We welcome you to our home, stranger. Feel free to come share our bounty and shelter whenever you can' You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are.", "next": "result-3" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "red-fruit": {
        "text": "'Wild Nightshade?! You monster. Are you trying to poison us all so you can take our cave?!' The bats attack you to death",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "explore-village": {
        "text": "There's a cassava farm in this village! You spot holes in the leaves. There are sneaky pests at work. It’s the cassava hornworm, fat and green, chewing through the crops under the farmer’s worried gaze.",
        "choices": [
        { "text": "Feast on the pesky bugs. So juicy and filling!", "next": "eat-pest" },
        { "text": "Discreetly nibble on the cassava leaves. Tasty and refreshing!", "next": "eat-cassava" }
        ],
    },
    "eat-cassava": {
        "text": "You sneak a bite of bitter cassava. Too late, the farmer sees. That night, the village gathers. Over the fire, they laugh. You’re the main course.",
        "choices": [
            { "text": "Play again", "next": "start" }
        ],
    },
    "eat-pest": {
        "text": "The farmer was grateful for your help! He decides to name you. Everytime you're hungry, you can come to the village to feast on the bugs!",
        "choices": [
        { "text": "Stay nearby the village, help the farmer in exchange for food", "next": "result-1" },
        { "text": "I'd rather explore the forest...", "next": "leave-village" }
        ],
    },
    "leave-village": {
        "text": "You leave the safety of the village, drawn by curiosity. But the jungle turns unforgiving. Smoke rises fast and thick. A wildfire crackles behind you. Run to safety!",
        "choices": [
        { "text": "Find a swamp. The fire won't burn there!", "next": "smoke-death" },
        { "text": "Run as fast as you can away from the heat", "next": "escape-grasslands" }
        ],
    },
    "smoke-death": {
        "text": "You stumble through the choking haze, eyes stinging, lungs burning. You search desperately for the swamp’s cool refuge, but it’s gone, or maybe never there. Darkness closes in.",
        "choices": [
            { "text": "Play again", "next": "start" }
        ],
    },
    "escape-grasslands": {
        "text": "You sprint toward the open grasslands, heart pounding. The smoke thins. Here, fire-tough trees stand firm, their bark scarred but strong. The flames weaken. You've made it alive.",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-2" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "watch-village": {
        "text": "You crouch in the undergrowth, watching the village from afar. Smoke rises, voices echo—humans. They seem loud… unpredictable. You stay hidden. There's a rustling behind you. Something else has found you first.",
        "choices": [
        { "text": "Might be a group of prey. I need to eat.", "next": "chase-poacher" },
        { "text": "Stay hidden. I'll wait until it's night to find food around the village", "next": "hide-night" }
        ],
    },
    "hide-night": {
        "text": "As you hide, the rain creeps in and the temperature drops. Soaked, shivering, your body slowly shuts down in your sleep. You died from hypothermia.",
        "choices": [
        { "text": "Play again", "next": "start" }
        ],
    },
    "chase-poacher": {
        "text": "You hear voices... too close. You run. Gunshots crack behind you. Branches tear your skin as you sprint through the dark.",
        "choices": [
        { "text": "Run towards the river and hide underwater.", "next": "river-poacher" },
        { "text": "Sprint to the village", "next": "locals-poacher" }
        ],
    },
    "river-poacher": {
        "text": "You slip into the river, holding your breath beneath a curtain of reeds. The poachers pass, unaware. You surface, heart pounding. Alive… but cold, soaked, and still starving.",
        "choices": [
        { "text": "Eat the colorful mushrooms", "next": "mushroom-end" },
        { "text": "Snack on the beautiful flowers", "next": "poisonflower-death" }
        ],
    },
    "poisonflower-death": {
        "text": "You chew the soft, fragrant petals of the trumpet-shaped flower. At first, nothing. Then—your thoughts blur, the trees melt into color. Your heart races, then falters. You died by Angel's Trumpet",
        "choices": [
        { "text": "Eat the colorful mushrooms", "next": "mushroom-end" },
        { "text": "Snack on the beautiful flowers", "next": "poisonflower-death" }
        ],
    },
    "mushroom-end": {
        "text": "You nibble on the strange, blue-streaked mushroom. Warmth spreads through your body. The leaves shimmer. The birds sing your name. Everything feels perfect. You fall asleep in the canopy. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-14" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "locals-poacher": {
        "text": "You sprint toward the village, shouts behind you. As you break through the treeline, villagers see your fear—and act. Spears rise. The poachers vanish into the jungle. They heal you and release you in the morning. You survived the Amazon!",
        "choices": [
        { "text": "Find out what animal you are", "next": "result-13" },
        { "text": "Play again", "next": "start" }
        ],
    },
    "death": {
        "text": "Tragically, you have met your end in the unforgiving jungle. Game Over.",
        "choices": [
        { "text": "Play Again", "next": "start" }
        ],
    }
};

    // Initialize the game when the page loads
    let currentNode = "start";

    // Function to save game state to local storage
    function saveGame() {
        localStorage.setItem("adventureGameState", currentNode);
    }

    // Function to load game state from local storage
    function loadGame() {
        const savedState = localStorage.getItem("adventureGameState");
        if (savedState && gameData[savedState]) {
            currentNode = savedState;
        }
    }

    // Function to update the game display
    function updateGame() {
			const node = gameData[currentNode];
	
			// If the current node is a result node (IDs starting with "result-")
			if (currentNode.startsWith("result-")) {
					// Hide the game container and show the results container
					document.getElementById("game-container").style.display = "none";
					document.getElementById("results-page").style.display = "block";
					
					// Get the result animal (if not defined, default to "Unknown")
					let resultAnimal = node.resultAnimal || "Unknown";
					// Display the result message along with the animal/persona text
					document.getElementById("results-text").innerHTML =
							`<strong>You are a ${resultAnimal}!</strong><br><br>${node.text}`;
					return; // Exit updateGame without rendering choices
			}
	
			// For regular game nodes, ensure the game container is visible and the results page is hidden
			document.getElementById("game-container").style.display = "block";
			document.getElementById("results-page").style.display = "none";
	
			// Update the main story text
			document.getElementById("story-text").textContent = node.text;
	
			// Clear any existing choices
			const choicesDiv = document.getElementById("choices");
			choicesDiv.innerHTML = "";
	
			// Set up the reset button event (if needed)
			const resetButton = document.getElementById("reset");
			resetButton.addEventListener("click", () => {
					currentNode = "start";
					updateGame();
					saveGame();
			});
	
			// Create and add new choice buttons with a fade-out transition on click
			node.choices.forEach(choice => {
					const button = document.createElement("button");
					button.className = "choice-btn";
					button.textContent = choice.text;
					button.addEventListener("click", () => {
							fadeOutAndUpdate(() => {
									currentNode = choice.next;
									updateGame();
									saveGame();
							});
					});
					choicesDiv.appendChild(button);
			});
	  }
	
    

    function startGame() {
			// Hide start and results pages; show the game
			document.getElementById("start-page").style.display = "none";
			document.getElementById("results-page").style.display = "none";
			document.getElementById("game-container").style.display = "block";
			// Reset the state and update
			currentNode = "start";
			updateGame();
			saveGame();
    }

    function fadeOutAndUpdate(callback) {
			const container = document.getElementById("game-container");
			container.classList.add("fade-out");
			setTimeout(() => {
				callback();
				container.classList.remove("fade-out");
			}, 500); // match this to your CSS transition time
    }
      

    document.getElementById("play-again-button").addEventListener("click", () => {
        // Go back to the start page
        document.getElementById("results-page").style.display = "none";
        document.getElementById("start-page").style.display = "block";
        // Reset currentNode and clear saved state
        currentNode = "start";
        saveGame();
    });
    
      

    // When the page loads
    document.addEventListener("DOMContentLoaded", () => {
        // Ensure only the start page is visible on load
        document.getElementById("start-page").style.display = "block";
        document.getElementById("game-container").style.display = "none";
        document.getElementById("results-page").style.display = "none";
    
        // Attach the Play button listener
        document.getElementById("play-button").addEventListener("click", startGame);
    });
    

    document.getElementById("play-button").addEventListener("click", startGame);
