import { registerApplication, start } from 'single-spa';

function pathPrefix(prefix) {
    return function(location) {
        return location.pathname.startsWith(prefix);
    }
}

registerApplication(
    'home',
    () => import('../home/home.app.js'),
    (location) => location.pathname === "" ||
        location.pathname === "/" ||
        location.pathname.startsWith('/home')
);

registerApplication(
    'navBar',
    () => import('../navBar/navBar.app.js').then(module => module.navBar),
    () => true
);

registerApplication(
    'angularJS',
    () => import('../angularJS/angularJS.app.js'),
    pathPrefix('/angularJS')
);

registerApplication(
    'angular8',
    () => import('../angular8/angular8.app.js'),
    () => true
);

start();