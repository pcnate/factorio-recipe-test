const BP = require('factorio-blueprint-reader');

const items = require('./node_modules/factorio-blueprint-reader/recipes.json');

const parent = BP.Recipe.getItemTree('logistic-chest-requester', true);

console.log( parent );

const types = [];

const maxItems = 15;
for( let x = 0; x < Object.keys( items ).length; x++ ) {
  const item = items[ Object.keys( items )[ x ] ];
  if ( typeof item.type === 'string' ) {
    if( types.indexOf( item.type ) === -1 ) {
      types.push( item.type );
    }
    if ( item.type.indexOf( 'logistic' ) > -1 ) {
      // console.log( item.name.indexOf( 'logistics' ) );
      // console.log( item );
    }
  }
}

console.log( types );

