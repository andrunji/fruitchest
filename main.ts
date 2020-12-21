namespace SpriteKind {
    export const melamarcia = SpriteKind.create()
    export const gelato = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.melamarcia, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-2)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(-1)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.melamarcia, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.gelato, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.gelato, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Food, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    sprite.destroy()
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(3)
    info.changeLifeBy(1)
})
let mySprite3: Sprite = null
let mela: Sprite = null
let marcia: Sprite = null
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    e f f f f f f f f f f f f f f e 
    e b e e e e e b e e e e e b e e 
    e e b e e e e b e e e e b b e e 
    e e b b e e e b e e e e b e e e 
    e e e b e e e b b e e e b e e e 
    e e e b e e e e b e e e b e e e 
    e e e b b e e e b e e e b e e e 
    e e e e b e e e b e e e b e e e 
    e e e e b e e e b b e e b e e e 
    `, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101`, img`
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
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
game.setDialogFrame(img`
    ...cc......................cc....
    ..c55c..bbbb...bbbbb......c55c...
    .cb55bcbdddbbbbbdddbbbbbbcb55bc..
    b555555bbdddb111bdddb11db555555b.
    bb5555bbdbdb11111bdb1111bb5555bb.
    cb5555bcddd11111ddd11111cb5555bc.
    .c5bb5c1111d111d111d111ddc5bb5c..
    .cbbbbc111111111111111111cbbbbc..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdb1d111111111111111111111111b..
    .bb111d11111111111111111111111b..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdbb1111111111111111111111111b..
    .bbbd1111111111111111111111111b..
    ..bcc111111111111111111111dccdb..
    ..c55c111d111d111d111d1111c55cb..
    .cb55bcdd11111ddd11111dddcb55bc..
    b555555b11111bdb11111bdbb555555b.
    bb5555bbb111bdddb111bdddbb5555bb.
    cb5555bcdbbbbbdddbbbbbddcb5555bc.
    .c5bb5c.bb...bbbbb...bbbbc5bb5c..
    .cbbbbc..................cbbbbc..
    .................................
    `)
game.showLongText("fruitchest usa le freccette per muoverti e prendere le ciambelle", DialogLayout.Center)
game.setDialogFrame(img`
    ...cc......................cc....
    ..c55c..bbbb...bbbbb......c55c...
    .cb55bcbdddbbbbbdddbbbbbbcb55bc..
    b555555bbdddb111bdddb11db555555b.
    bb5555bbdbdb11111bdb1111bb5555bb.
    cb5555bcddd11111ddd11111cb5555bc.
    .c5bb5c1111d111d111d111ddc5bb5c..
    .cbbbbc111111111111111111cbbbbc..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdb1d111111111111111111111111b..
    .bb111d11111111111111111111111b..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdbb1111111111111111111111111b..
    .bbbd1111111111111111111111111b..
    ..bcc111111111111111111111dccdb..
    ..c55c111d111d111d111d1111c55cb..
    .cb55bcdd11111ddd11111dddcb55bc..
    b555555b11111bdb11111bdbb555555b.
    bb5555bbb111bdddb111bdddbb5555bb.
    cb5555bcdbbbbbdddbbbbbddcb5555bc.
    .c5bb5c.bb...bbbbb...bbbbc5bb5c..
    .cbbbbc..................cbbbbc..
    .................................
    `)
game.showLongText("ma stà attento c'è cibo marcio! (evita il cibo verde)", DialogLayout.Center)
scene.setBackgroundColor(5)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
tiles.setTileAt(tiles.getTileLocation(5, 11), myTiles.transparency16)
controller.moveSprite(mySprite, 150, 0)
scene.centerCameraAt(mySprite.x, mySprite.y)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(6)
forever(function () {
    music.playMelody("C5 B C5 A B A F E ", 120)
})
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 3 3 3 a a . . 
        . . . b d d d 4 3 2 3 3 3 a a . 
        . . b d d 3 2 3 3 3 3 4 3 3 a . 
        . b 3 d 2 3 3 3 3 b 3 3 3 3 a b 
        . b 3 3 3 3 3 a a 3 3 2 3 3 a b 
        b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
        b 3 3 2 3 b a 3 3 4 3 3 d a 4 b 
        b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
        a 3 3 4 3 3 3 4 3 3 d a 4 4 4 e 
        a 3 3 3 3 2 3 3 d d a 4 4 4 e . 
        a a 3 3 3 d d d a a 4 4 4 e e . 
        . e a a a a a a 4 4 4 4 e e . . 
        . . e e b b 4 4 4 4 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite2.setPosition(randint(30, 150), 39)
    mySprite2.setVelocity(0, 100)
})
game.onUpdateInterval(randint(3000, 6000), function () {
    marcia = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . 6 6 6 c 7 7 e e . . . . 
        . . c 6 6 6 6 c 7 e 7 7 e e . . 
        . c 6 6 6 6 6 c 6 e e 7 7 7 e . 
        . c 6 6 6 7 6 c c 7 b 9 4 7 e . 
        c 6 6 6 7 7 7 7 7 7 b 9 9 7 7 e 
        c 6 6 7 7 7 7 7 7 7 7 b b 7 7 e 
        c 6 6 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c 6 6 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c 6 6 7 7 7 7 7 7 7 7 7 7 7 7 e 
        c 6 6 7 7 7 7 7 7 7 7 7 7 6 7 e 
        . 6 6 6 7 7 7 7 7 7 7 7 7 6 e . 
        . 7 6 6 7 7 7 7 7 7 7 7 6 7 e . 
        . . 7 6 6 7 7 7 7 7 6 6 7 e . . 
        . . . 7 7 e e 6 6 6 7 e e . . . 
        . . . . . 7 7 e e e e . . . . . 
        `, SpriteKind.melamarcia)
    marcia.setPosition(randint(30, 150), 39)
    marcia.setVelocity(0, 100)
})
game.onUpdateInterval(randint(3000, 6000), function () {
    mela = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.Enemy)
    mela.setPosition(randint(30, 150), 39)
    mela.setVelocity(0, 100)
})
game.onUpdateInterval(randint(3000, 6000), function () {
    mela = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.gelato)
    mela.setPosition(randint(30, 150), 39)
    mela.setVelocity(0, 100)
})
game.onUpdateInterval(randint(1000, 3000), function () {
    mySprite3 = sprites.create(img`
        . . . . . . b b b b a a . . . . 
        . . . . b b d d d 7 7 7 a a . . 
        . . . b d d d 4 7 2 7 7 7 a a . 
        . . b d d 7 2 7 7 7 7 4 7 7 a . 
        . b 7 d 2 7 7 7 7 b 7 7 7 7 a b 
        . b 7 7 7 7 7 a a 7 7 2 7 7 a b 
        b 7 7 7 7 7 a a 7 7 7 7 d a 6 b 
        b 7 7 2 7 b a 7 7 4 7 7 d a 6 b 
        b 7 7 7 7 7 7 7 7 7 7 d a 6 6 e 
        a 7 7 4 7 7 7 4 7 7 d a 6 6 6 e 
        a 7 7 7 7 2 7 7 d d a 6 6 6 e . 
        a a 7 7 7 d d d a a 6 6 6 e e . 
        . e a a a a a a 6 6 6 6 e e . . 
        . . e e b b 6 6 6 6 b e e . . . 
        . . . e e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile)
    mySprite3.setPosition(randint(30, 150), 39)
    mySprite3.setVelocity(0, 100)
})
