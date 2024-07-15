import '/src/pages/search/_search.scss';
import { Header } from '/src/components/header/header.js';
import { getNode, insertLast } from 'kind-tiger';
import pb from '/src/api/pocketbase.js';
import getPbImageURL from '/api/getPbImageURL';
import { handleRecentSearch } from './recentSearch';
import {} from './ranking';

// searchButton.addEventListener('click', handleRecentSearch);
