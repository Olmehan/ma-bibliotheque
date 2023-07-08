import { Accueil } from './components/Accueil';
import { PageAccueil } from './pages/PageAccueil';
import { Erreur404 } from './pages/Erreur404';

const AppRoutes = [
    {
        index: true,
        element: <PageAccueil />
    },
    // {
    //     path: '/pageAccueil',
    //     element: <PageAccueil />
    // }
    {
        path: '*',
        element: <Erreur404 />
    }
];

export default AppRoutes;
