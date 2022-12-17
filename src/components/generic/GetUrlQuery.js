import { useSearchParams } from 'react-router-dom';
import testJSON from '../../utils/testJSON';

//--------------------------------------------------
// Returns the object represented in the query from 
// the Url minus the '#' char.
//--------------------------------------------------

const GetUrlQuery = () => {
  const [searchParams] = useSearchParams();

  let q = searchParams.get('q');
  q = decodeURI(q);

  // const i = ;
  const qJson = q.slice(q.indexOf('['));
  if (q === 'undefined') {
    return([]);                                         // no query string 
  }


  if ( testJSON({ testString: qJson }) ) {              // check if valid JSON string
    return(JSON.parse(qJson));
  } else {
    return([]);
  }

}

export default GetUrlQuery;