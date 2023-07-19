// import { Accueil } from './components/Accueil';
import { PageAccueil } from './pages/PageAccueil';
import { PageFilms } from './pages/PageFilms';
import { Erreur404 } from './pages/Erreur404';

const AppRoutes = [
    {
        index: true,
        element: <PageAccueil />
    },
    {
        path: '/pageFilms',
        element: <PageFilms />
    },
    {
        path: '*',
        element: <Erreur404 />
    }
];

export default AppRoutes;
