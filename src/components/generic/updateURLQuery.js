
//--------------------------------------------------
// Use the queue to create a string version and 
// update the query string.
//--------------------------------------------------

const updateURLQuery = ( q ) => {

  // if no entries, an update isn't needed
  if ( q.length === 0 ) return;
  
  return(`\\?q=${JSON.stringify(q)}`);
}

export default updateURLQuery;