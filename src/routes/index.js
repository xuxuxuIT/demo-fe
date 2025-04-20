import Home from '../pages/Home'
import Login from '../pages/Login'
import Subscribe from '../pages/Subscribe'
import Nature from '../pages/Nature'
import Animal from '../pages/Animal'
import Travel from '../pages/Travel'
import Health from '../pages/Health'
import Science from '../pages/Science'
import Environment from '../pages/Environment'
import HistoryCulture from '../pages/History&Culture'


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/nature', component: Nature },
    { path: '/animal', component: Animal },
    { path: '/travel', component: Travel },
    { path: '/health', component: Health },
    { path: '/science', component: Science },
    { path: '/environment', component: Environment },
    { path: '/history-culture', component: HistoryCulture },
    { path: '/login', component: Login, layout: null },
    { path: '/subscribe', component: Subscribe, layout: null },

]
const privateRoutes = [

]


export {
    publicRoutes,
    privateRoutes

}