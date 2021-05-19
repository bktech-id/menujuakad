import AinulAulia from "../AinulAulia/AinulAulia";
import AriAyu from "../AriAyu/AriAyu";
import HomePage from "../HomePage/HomePage";

export const routes = [
    {
        component: HomePage,
        exact: true,
        path: '/'
    },
    {
        component: AinulAulia,
        exact: true,
        path: '/ainulaulia'
    },
    {
        component: AriAyu,
        exact: true,
        path: '/ariayu'
    }
]