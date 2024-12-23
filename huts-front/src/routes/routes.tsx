import About from '../pages/about/About'
import Area from '../pages/area/Area'
import Booking from '../pages/booking/Booking'
import Cancel from '../pages/cancel/Cancel'
import Checkout from '../pages/checkout/Checkout'
import Faq from '../pages/faq/Faq'
import Hut from '../pages/hut/Hut'
import Main from '../pages/main/Main'
import NotFound from '../pages/notFound/NotFound'
import Privacy from '../pages/privacy/Privacy'
import Terms from '../pages/terms/Terms'

const routes = [
    { path: '/', element: <Main />, exact: true },
    { path: '/hut', element: <Hut />, exact: true },
    { path: '/area', element: <Area />, exact: true },
    { path: '/about', element: <About />, exact: true },
    { path: '/faq', element: <Faq />, exact: true },
    { path: '/booking', element: <Booking />, exact: true },
    { path: '/checkout', element: <Checkout />, exact: true },

    { path: '/terms', element: <Terms />, exact: true },
    { path: '/cancellation', element: <Cancel />, exact: true },
    { path: '/privacy', element: <Privacy />, exact: true },

    { path: '*', element: <NotFound />, exact: true },
]

export default routes