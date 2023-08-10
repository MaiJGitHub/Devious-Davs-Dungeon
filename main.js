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
// loadSprite("gif", "./sprites/Box2.png")

loadSprite("frame1", "./bonnie/ezgif-frame-001.jpg")
loadSprite("frame2", "./bonnie/ezgif-frame-002.jpg")
loadSprite("frame3", "./bonnie/ezgif-frame-003.jpg")
loadSprite("frame4", "./bonnie/ezgif-frame-004.jpg")
loadSprite("frame5", "./bonnie/ezgif-frame-005.jpg")
loadSprite("frame6", "./bonnie/ezgif-frame-006.jpg")
loadSprite("frame7", "./bonnie/ezgif-frame-007.jpg")
loadSprite("frame8", "./bonnie/ezgif-frame-008.jpg")
loadSprite("frame9", "./bonnie/ezgif-frame-009.jpg")
loadSprite("frame10", "./bonnie/ezgif-frame-010.jpg")
loadSprite("frame11", "./bonnie/ezgif-frame-011.jpg")
loadSprite("frame12", "./bonnie/ezgif-frame-012.jpg")
loadSprite("frame13", "./bonnie/ezgif-frame-013.jpg")
loadSprite("frame14", "./bonnie/ezgif-frame-014.jpg")
loadSprite("frame15", "./bonnie/ezgif-frame-015.jpg")
loadSprite("frame16", "./bonnie/ezgif-frame-016.jpg")

// loadSprite('jumpscare', {
//     anims: {
//         myAnimation: ['frame1', 'frame2', 'frame3','frame4', 'frame5', 'frame6','frame7', 'frame8', 'frame9', 'frame10', 'frame11', 'frame12', 'frame13', 'frame14', 'frame15', 'frame16']
//     }
// })

loadSprite("jumpscare", [
    "./bonnie/ezgif-frame-001.jpg",
    "./bonnie/ezgif-frame-002.jpg",
   "./bonnie/ezgif-frame-003.jpg",
    "./bonnie/ezgif-frame-004.jpg",
   "./bonnie/ezgif-frame-005.jpg",
    "./bonnie/ezgif-frame-006.jpg",
     "./bonnie/ezgif-frame-007.jpg",
      "./bonnie/ezgif-frame-008.jpg",
       "./bonnie/ezgif-frame-009.jpg",
        "./bonnie/ezgif-frame-010.jpg",
         "./bonnie/ezgif-frame-011.jpg",
          "./bonnie/ezgif-frame-012.jpg",
           "./bonnie/ezgif-frame-013.jpg",
            "./bonnie/ezgif-frame-014.jpg",
             "./bonnie/ezgif-frame-015.jpg",
              "./bonnie/ezgif-frame-016.jpg",
], {
    anims: {
        run: { from: 1, to: 15 },
    },
});


scene("intro", () => {
	
	})
scene("main", (levelIdx) => {

	const SPEED = 320

	// character dialog data
	const characters = {
		"a": {
			sprite: "skelly",
			msg: "Hi Dav! Welcome to your own dungeon, your goal is to find the key. The controls are w a s d to move, good luck and be careful! ;) ",
		},
		"b": {
			sprite: "ghosty",
			msg: "Who are you? You can see me??",
		},
	}

	// level layouts
	const levels = [
		[	
			"                      ",
			"                      ",
			"       ========|======",
			"       =             =",
			"       =   *  *    $ =",
			"       =  *          =",
			"       =         #   =",
			"       =  a @        =",
			"       =    *        =",
			"       =         *   =",
			"       ===============",
		],
		[	
			"                              ",
			"      =====================|==",
			"      =*                * =  =",
			"      =                   =  =",
			"      =  ==================  =",
			"      =                      =",
			"      =                      =",
			"      =  ====  ====  =========",
			"      =  =     =     = $ = # =",
			"      =  =     =     =   =   =",
			"      =  = ===== =====   =   =",
			"      =  = @ =*  =   a   =   =",
			"      = *=   =               =",
			"      =  =a  =               =",
			"      ========================",
		],
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		[	
			"                              ",
			"      ===========|============",
			"      =#        =        *   =",
			"      =         =            =",
			"      =  ==================  =",
			"      =         =     =      =",
			"      =         =     =      =",
			"      =======  ===== =====   =",
			"      =        =      $    # =",
			"      =        =         =   =",
			"      =  = ===== =====   =   =",
			"      =  = @ =*  =   a   =   =",
			"      = *=   =      =        =",
			"      =  =   = a    =        =",
			"      ========================",
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
	
	
	// add([
	//     sprite('mySprite'),
	//     pos(80, 40),
	//     area(),
	//     play('myAnimation')
	// ])
	
	const jumpscare = add([
	    sprite("jumpscare"),
	    pos(80, 80),
	]);
	
    player.onCollide("spooky", () => {
    	alert("jumpscare")
    // 	 // get the sprite object
    // const mySprite = level.get('jumpscare')[0];
    // play the animation
    jumpscare.play('run');
		// document.querySelectorAll('audio, video').forEach((element) => {
  //        element.muted = true;
  //      });

        // document.getElementById('jumpsacred').style.display = 'inline-block';

   
		// const audio = new Audio('XSCREAM.wav');
  //      // const audio2 = new Audio('');
  //      go("jumpsacred");

  //      audio.play();

        // setTimeout(() => {
        //   //document.getElementById('jumpsacred').style.display = 'none';
        //   //audio.pause();
        //   //static for a few seconds then game over screen then reset to main menu
          
          
        // }, 900);
	})
	// let jumpscareTriggered = false;
	
	// player.onCollide("spooky", () => {
 //       if (!jumpscareTriggered) {
 //           jumpscareTriggered = true;
 //           const jumpscareEntity = add([
 //               sprite("gif"), // Replace with your actual jumpscare GIF sprite name
 //               pos(player.pos), // Display the jumpscare at the player's position
 //               anchor("center"),
 //               scale(1.5), // Adjust scale as needed
 //           ]);
 //       }
 //   });
    
 //   function playVideo() {
	//     const videoElement = document.getElementById("jumpsacred");
	//     videoElement.play();
	// }
    
 //   scene("jumpsacred", () => {
	// 	const audio = new Audio('XSCREAM.wav');
 //       // const audio2 = new Audio('');
 //       audio.play();
 //        playVideo();
  
	// 	  const backgroundImage = add([
	// 	    sprite("gif"),
	// 	    ]);
		    
	// 	  //setTimeout(() => {
	// 	  //	go("instructions");
 //   //         audio.pause();
 //   //       //static for a few seconds then game over screen then reset to main menu
 //   //       }, 900);
		    
	// });

	

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
