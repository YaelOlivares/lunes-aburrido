controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Scooby.vy == 0) {
        Scooby.vy = -80
    }
})
let Scooby: Sprite = null
scene.setBackgroundImage(assets.image`FONDO`)
Scooby = sprites.create(assets.image`Scooby`, SpriteKind.Player)
info.setScore(0)
info.setLife(3)
controller.moveSprite(Scooby)
tiles.setCurrentTilemap(tilemap`piso`)
scene.cameraFollowSprite(Scooby)
game.onUpdate(function () {
    Scooby.ay = 100
})
