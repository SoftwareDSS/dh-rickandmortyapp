const personajes = require( '../json/personajes' );

const controller = {

    home: async function( req, res ) {

        const indexData = {
    
            titulo: "Rick and Morty APP",
            personajes: personajes.results
    
        };
    
        res.render( 'home', indexData );
    
    }

};

module.exports = controller;