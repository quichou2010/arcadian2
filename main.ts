controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.say("YAH", 500)
    mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . 3 3 3 3 3 3 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Projectile)
    mySprite2.vx += 100
    mySprite2.setPosition(mySprite.x, mySprite.y)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . f f e e e e f 2 f . . . . . . . . . . . . . 
. f f e e e e f 2 2 2 f . . . . . . . . . . . . 
. f e e e f f e e e e f . . . c c . . . . . . . 
. f f f f e e 2 2 2 2 e f . c d c . . . . . . . 
. f e 2 2 2 f f f f e 2 f c d d c . . . . . . . 
f f f f f f f e e e f f c d d c . . . . . . . . 
f f e 4 4 e b f 4 4 e c d d c . . . . . . . . . 
f e e 4 d 4 1 f d d e c d c . . . . . . . . . . 
. f e e e 4 d d d e d c c c . . . . . . . . . . 
. . f f e e 4 4 e 4 d d e . . . . . . . . . . . 
. . . f 2 2 2 2 4 4 e e . . . . . . . . . . . . 
. . . f 2 2 2 2 e 2 f . . . . . . . . . . . . . 
. . . f 4 4 4 4 5 5 f . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . . . . . . . . . 
. . . . . f f f . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    pause(100)
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . f f f . . . . . . . . . . . . . . 
. . . . f f f f f 2 f . . . . . . . . . . . . . 
. . f f e e e e e 2 2 f f . . . . . . . . . . . 
. f f e e e e e e 2 2 2 f f . . . . . . . . . . 
. f e e e e f f f e e e e f . . . . . . . . . . 
. f f f f f e e e 2 2 2 2 e f . . . . . . . . . 
f f f e 2 2 2 f f f f f e 2 f . . . . . . . . . 
f f f f f f f f f e e e f f f . . . . . c c . . 
f e f e 4 4 e b b f 4 4 e e f . . . c c d c . . 
. f e e 4 d 4 b b f d d e f . . c c d d c c . . 
. . f e e e 4 d d d d d f e e c d d d c . . . . 
. . . f 2 2 2 2 2 2 2 e e d d c d c c . . . . . 
. . . f 4 4 4 4 4 5 e 4 4 d d c c c . . . . . . 
. . . f f f f f f f f e e e e . . . . . . . . . 
. . . f f f . . . f f . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    pause(100)
    mySprite.setImage(img`
. . . . . . . f f . . . . . . . . . . . . . . . 
. . . . f f f f 2 f f . . . . . . . . . . . . . 
. . f f e e e e f 2 f f . . . . . . . . . . . . 
. f f e e e e e f 2 2 f f . . . . . . . . . . . 
. f e e e e f f e e e e f . . . . . . . . . . . 
. f f f f f e e 2 2 2 2 e f . . . . . . . . . . 
f f f e 2 2 2 f f f f e 2 f . . . . . . . . . . 
f f f f f f f f e e e f f f . . . . . . . . . . 
f e f e 4 4 e b f 4 4 e e f . . . . . . . . . . 
. f e e 4 d 4 b f d d e f . . . . . . . . . . . 
. . f e e e 4 d d d e e . c . . . . . . . . . . 
. . . f 2 2 2 2 e e d d e c c c c c c c . . . . 
. . . f 4 4 4 e 4 4 d d e c d d d d d . . . . . 
. . . f f f f f e e e e . c c c c c . . . . . . 
. . f f f f f f f f . . . c . . . . . . . . . . 
. . f f f . . f f . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`)
    pause(100)
    mySprite.setImage(img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`)
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player_2.y += -5
    pause(60)
    player_2.y += -5
    pause(60)
    player_2.y += -8
    pause(60)
    player_2.y += -5
    pause(150)
    player_2.y += 8
    pause(60)
    player_2.y += 5
    pause(60)
    player_2.y += 5
    pause(60)
    player_2.y += 5
    player_2.y += 5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.y += -5
    pause(60)
    mySprite.y += -5
    pause(60)
    mySprite.y += -8
    pause(60)
    mySprite.y += -5
    pause(150)
    mySprite.y += 8
    pause(60)
    mySprite.y += 5
    pause(60)
    mySprite.y += 5
    pause(60)
    mySprite.y += 5
})
let position_player_2_Y = 0
let position_player_2_X = 0
let mySprite2: Sprite = null
let player_2: Sprite = null
let mySprite: Sprite = null
info.setLife(5)
info.player2.setLife(5)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, SpriteKind.Player)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setPosition(10, 50)
controller.moveSprite(mySprite, 100, 0)
player_2 = sprites.create(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`, SpriteKind.Player)
controller.player2.moveSprite(player_2, 100, 0)
player_2.setPosition(140, 50)
player_2.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    if (controller.right.isPressed()) {
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e 4 d d d d f . . . 
. . . . f f e e 4 4 4 e f . . . 
. . . . . 4 d d e 2 2 2 f . . . 
. . . . . e d d e 2 2 2 f . . . 
. . . . . f e e f 4 5 5 f . . . 
. . . . . . f f f f f f . . . . 
. . . . . . . f f f . . . . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f f f . . . . 
. . . . f f e e e e f 2 f . . . 
. . . f f e e e e f 2 2 2 f . . 
. . . f e e e f f e e e e f . . 
. . . f f f f e e 2 2 2 2 e f . 
. . . f e 2 2 2 f f f f e 2 f . 
. . f f f f f f f e e e f f f . 
. . f f e 4 4 e b f 4 4 e e f . 
. . f e e 4 d 4 1 f d d e f . . 
. . . f e e e e e d d d f . . . 
. . . . . f 4 d d e 4 e f . . . 
. . . . . f e d d e 2 2 f . . . 
. . . . f f f e e f 5 5 f f . . 
. . . . f f f f f f f f f f . . 
. . . . . f f . . . f f f . . . 
`)
        pause(100)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d e e e e e f . . . 
. . . f e 4 e d d 4 f . . . . . 
. . . f 2 2 e d d e f . . . . . 
. . f f 5 5 f e e f f f . . . . 
. . f f f f f f f f f f . . . . 
. . . f f f . . . f f . . . . . 
`)
        pause(100)
        mySprite.setImage(img`
. . . . f f f f f f . . . . . . 
. . . f 2 f e e e e f f . . . . 
. . f 2 2 2 f e e e e f f . . . 
. . f e e e e f f e e e f . . . 
. f e 2 2 2 2 e e f f f f . . . 
. f 2 e f f f f 2 2 2 e f . . . 
. f f f e e e f f f f f f f . . 
. f e e 4 4 f b e 4 4 e f f . . 
. . f e d d f 1 4 d 4 e e f . . 
. . . f d d d d 4 e e e f . . . 
. . . f e 4 4 4 e e f f . . . . 
. . . f 2 2 2 e d d 4 . . . . . 
. . . f 2 2 2 e d d e . . . . . 
. . . f 5 5 4 f e e f . . . . . 
. . . . f f f f f f . . . . . . 
. . . . . . f f f . . . . . . . 
`)
        pause(100)
    }
})
forever(function () {
    position_player_2_X = mySprite.x
    position_player_2_Y = mySprite.y
})
forever(function () {
    if (mySprite.x == player_2.x) {
        info.player2.changeLifeBy(-1)
    }
})
