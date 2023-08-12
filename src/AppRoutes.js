// import { Accueil } from './components/Accueil';
import { PageAccueil } from './pages/PageAccueil';
import { PageFilms } from './pages/PageFilms';
import { PageActeurs } from './pages/PageActeurs';
import { PageRealisateurs } from './pages/PageRealisateurs';
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
        path: '/pageActeurs',
        element: <PageActeurs />
    },
    {
        path: '/pageRealisateurs',
        element: <PageRealisateurs />
    },
    {
        path: '*',
        element: <Erreur404 />
    }
];

export default AppRoutes;
