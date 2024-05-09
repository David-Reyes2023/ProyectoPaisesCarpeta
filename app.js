const express = require('express'); 

const app  = express();

const DUMMY_PLACES = [
    {
        id: 'p1',
        pais: 'Ecuador',
        ciudad1: 'Guayaquil',
        ciudad2: 'Quito',
        ciudad3: 'Cuenca',
        Ciudad4: 'Ambato',
        Ciudad5: 'Olon',
        Ciudad6: 'Machala',
        Ciudad7: 'Puerto Lopez'
    },
    {
        id: 'p2',
        pais: 'USA',
        ciudad1: 'New York',
        ciudad2: 'Miami',
        ciudad3: 'Los Angeles',
        Ciudad4: 'Dallas',
        Ciudad5: 'Kansas',
        Ciudad6: 'New Orleans',
        Ciudad7: 'Washington'
    },
    {
        id: 'p3',
        pais: 'Alemania',
        ciudad1: 'Hamburgo',
        ciudad2: 'Berlin',
        ciudad3: 'Munich',
        Ciudad4: 'Dusseldorf',
        Ciudad5: 'Frankfurt',
        Ciudad6: 'Colonia',
        Ciudad7: 'Dortmund'
    }
];

app.get('/api/places',(req,res,next)=>{
    const places = DUMMY_PLACES;
    res.send(places);
    next();
});

app.get('/api/places/:pid',(req,res,next)=>{
    const places = DUMMY_PLACES.find(p =>{
        return p.id == req.params.pid;
    });
    res.send(places);
    next();
});

app.listen(3000);