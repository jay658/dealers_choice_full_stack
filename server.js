const express = require('express');
const app = express();
const path = require('path');
const { db, Game } = require('./db');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.json())

app.delete('/api/games/:id', async(req, res, next)=>{
    try{
        const toDestroy = await Game.findByPk(req.params.id)
        await toDestroy.destroy()
        res.sendStatus(204)
    }catch(err){
        next(err)
    }
})

app.get('/api/games/:id', async(req, res, next)=>{
    try{
        const game = await Game.findByPk(req.params.id)
        res.send(game)
    }catch(ex){
        next(ex)
    }
})

app.get('/api/games', async(req, res, next)=>{
    try{
        res.send(await Game.findAll())
    }catch(err){
        next(err)
    }
})

const setUp = async() => {
    try{
        await db.sync({force:true})
        await Game.create({name:'diablo', genre: "rpg"})
        await Game.create({name:'world of warcraft', genre: "rpg"})
        await Game.create({name:'command & conquer', genre: "rts"})
        await Game.create({name:'starcraft', genre: "rts"})
        await Game.create({name:'league of legends', genre: "moba"})
        await Game.create({name:'valorant', genre: "fps"})
        await Game.create({name:'dota', genre: "moba"})
        await Game.create({name:'call of duty', genre: "fps"})
        await Game.create({name:'counter strike', genre: "fps"})
        const port = process.env.PORT || 3000;
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    }catch(err){
        console.log("there was an error on db/server", err)
    }
}

setUp()