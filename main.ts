let Scooby = sprites.create(assets.image`Scooby`, SpriteKind.Player)
animation.runImageAnimation(
Scooby,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . e e e . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . e e e . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . 3 . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . . . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . . . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . 3 . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . e e e . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . 3 . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . . . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e . . . . . . . . . e . e . . . 
    e e . . . . . . . . e e e . . . 
    . e e . . . . . . . 1 e 1 . . . 
    . . e e e e e e e 6 e f e . . . 
    . . . e e e e e e 6 e e e . . . 
    . . . e e e e e e 6 . . . . . . 
    . . . e . . . . . e . . . . . . 
    . . . f . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
300,
true
)