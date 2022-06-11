const express = require('express');
const app     = express();
const path    = require( 'path' );
const port    = 3000;

const indexRouter = require( './routers/index' );

app.set( 'view engine', 'ejs' );
app.set( 'views', path.resolve( './views' ) );

app.use( express.static( 'public' ) );

app.use( '/', indexRouter );

app.listen( port, () => {

    console.log( `Example app listening on port ${port}` );

});