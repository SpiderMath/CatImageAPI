require( "dotenv" ).config( );

const express = require( "express" );
const { readdirSync } = require( "fs" );
const { join } = require( "path" );

const assets = readdirSync( join( __dirname, "./Assets/" ) )
	.map( ( fName ) =>  join( __dirname, "./Assets/", fName ) );

const app = express( );

app.listen( process.env.PORT, ( ) => {
	console.log( `Listening for API Calls on Port ${process.env.PORT}` );
} );

app.get( "/", ( req, res ) => {
	res.send( "Hello world" );
} );

app.get( "/random", ( req, res ) => {
	res.sendFile(
		assets[ assets.length - 1 ],
	);
} );