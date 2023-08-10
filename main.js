kaboom({
	background: [74, 48, 82],
})

loadSprite("skelly", "./sprites/Skelly.png")
loadSprite("ghosty", "./sprites/ghosty.png")
loadSprite("grass", "./sprites/Wall.png")
loadSprite("steel", "./sprites/steel.png")
loadSprite("door", "./sprites/Gate3.png")
loadSprite("key", "./sprites/key.png")
loadSprite("man", "./sprites/Witch.png")
loadSprite("box", "./sprites/Box2.png")
loadSprite("spooky", "./sprites/Box2.png")
loadSprite("gif", "./sprites/jumpscare-agatha-dark-deception-d54spbdyxgggqy9c.gif")

scene("intro", () => {
	
	})
scene("main", (levelIdx) => {

	const SPEED = 280;

	// character dialog data
	const characters = {
		"a": {
			sprite: "skelly",
			msg: "Hi Dav! Welcome to your own dungeon, your goal is to find the key to move on in one of the boxes. It will disapear when you touch the right box. The controls are the arrow keys to move, good luck and be careful! ;) ",
		},
		"b": {
			sprite: "ghosty",
			msg: "Who are you? You can see me??",
		},
		"c": {
			sprite: "skelly",
			msg: "You made it! Find the Key again and you win!",
		},
		"d": {
			sprite: "skelly",
			msg: "choose wisely!",
		},
	}

	// level layouts
	const levels = [
		[	
			"                              ",
			"                              ",
			"         ========|======",
			"         =             =",
			"         =   *  *    $ =",
			"         =  *          =",
			"         =         #   =",
			"         =  a @        =",
			"         =    *        =",
			"         =         *   =",
			"         ===============",
		],
		[	
			"                                         ",
			"                                         ",
			"         =====================|==",
			"         =*                * =  =",
			"         =                   =  =",
			"         =  ==================  =",
			"         =                      =",
			"         =                      =",
			"         =  ====  ====  =========",
			"         =  =     =     = $ = # =",
			"         =  =     =     =   =   =",
			"         =  = ===== =====   =   =",
			"         =  = @ =*  =   d   =   =",
			"         = *=c  =               =",
			"         =  =   =               =",
			"         ========================",
		],
		[	
			"                                      ",
			"                                      ",
			"       ======================|========",
			"       =          *                  =",
			"       =                             =",
			"       =    ================         =",
			"       =    =  *                 =   =",
			"       =$    =                @   =  =",
			"       =    =  =   =    ===========  =",
			"       =    =  =   =     =     = *   =",
			"       =    =* =*  =     = *   =     =",
			"       =    ====   =     =     =     =",
			"       =*   =      =    *=     =     =",
			"       =    =  *   =     =     =     =",
			"       =    ========           =     =",
			"       =      *       =         $    =",
			"       =              =              =",
			"       ===============================",
		],
	]

	const level = addLevel(levels[levelIdx], {
		tileWidth: 40,
		tileHeight: 40,
		pos: vec2(0, 30),
		tiles: {
			"=": () => [
				sprite("grass"),
				area(),
				body({ isStatic: true }),
				anchor("center"),
			],
			"-": () => [
				sprite("steel"),
				area(),
				body({ isStatic: true }),
				anchor("center"),
			],
			"$": () => [
				sprite("box"),
				area(),
				anchor("center"),
				"key",
			],
			"@": () => [
				sprite("man"),
				area(),
				body(),
				anchor("center"),
				"player",
			],
			"|": () => [
				sprite("door"),
				area(),
				body({ isStatic: true }),
				anchor("center"),
				"door",
			],
			"*": () => [
				sprite("box"),
				area(),
				body({ isStatic: true }),
				anchor("center"),
			],
			
			"#": () => [
				sprite("spooky"),
				area(),
				body({ isStatic: true }),
				anchor("center"),
				"spooky",
				
				
			],
		},
		// any() is a special function that gets called everytime there's a
		// symbole not defined above and is supposed to return what that symbol
		// means
		wildcardTile(ch) {
			const char = characters[ch]
			if (char) {
				return [
					sprite(char.sprite),
					area(),
					body({ isStatic: true }),
					anchor("center"),
					"character",
					{ msg: char.msg },
				]
			}
		},
	})

	// get the player game obj by tag
	const player = level.get("player")[0]

	function addDialog() {
		const h = 160
		const pad = 16
		const bg = add([
			pos(0, height() - h),
			rect(width(), h),
			color(0, 0, 0),
			z(100),
		])
		const txt = add([
			text("", {
				width: width(),
			}),
			pos(0 + pad, height() - h + pad),
			z(100),
		])
		bg.hidden = true
		txt.hidden = true
		return {
			say(t) {
				txt.text = t
				bg.hidden = false
				txt.hidden = false
			},
			dismiss() {
				if (!this.active()) {
					return
				}
				txt.text = ""
				bg.hidden = true
				txt.hidden = true
			},
			active() {
				return !bg.hidden
			},
			destroy() {
				bg.destroy()
				txt.destroy()
			},
		}
	}
	
	let hasKey = false
	const dialog = addDialog()
	

	player.onCollide("key", (key) => {
		destroy(key)
		hasKey = true
	})

	player.onCollide("door", () => {
		if (hasKey) {
			if (levelIdx + 1 < levels.length) {
				go("main", levelIdx + 1)
			} else {
				go("win")
			}
		} else {
			dialog.say("Wheres your keys?!")
		}
	})
	
	
    player.onCollide("spooky", () => {
		// const audio = new Audio('');
  //      const audio2 = new Audio('');
  //      audio.play();

  //      setTimeout(() => {
  //        document.getElementById('').style.display = 'none';
  //        audio.pause();
  //        document.getElementById('').style.display = 'inline-block';
  //        audio2.play();
  //        setTimeout(() => {
  //          document.getElementById('').style.display = 'none';
  //          document.getElementById('').style.display = 'inline-block';
  //          setTimeout(() => {
  //            window.location.href = "";
  //          }, 8900);
  //          //static for a few seconds then game over screen then reset to main menu
  //        }, 2700);

  //        //static for a few seconds then game over screen then reset to main menu
  //      }, 900);
	})
	let jumpscareTriggered = false;
	
	player.onCollide("spooky", () => {
        if (!jumpscareTriggered) {
            jumpscareTriggered = true;
            const jumpscareEntity = add([
                sprite("gif"), // Replace with your actual jumpscare GIF sprite name
                pos(player.pos), // Display the jumpscare at the player's position
                anchor("center"),
                scale(1.5), // Adjust scale as needed
            ]);
        }
    });
	

	// talk on touch
	player.onCollide("character", (ch) => {
		dialog.say(ch.msg)
	})

	const dirs = {
		"left": LEFT,
		"right": RIGHT,
		"up": UP,
		"down": DOWN,
	}

	for (const dir in dirs) {
		onKeyPress(dir, () => {
			dialog.dismiss()
		})
		onKeyDown(dir, () => {
			player.move(dirs[dir].scale(SPEED))
		})
	}

})

scene("win", () => {
	add([
		text("You Survived!"),
		pos(width() / 2, height() / 2),
		anchor("center"),
	])
})

go("main", 0)
