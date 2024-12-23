import { useRoutes } from "react-router-dom"
import routes from "../routes/routes"
import { Suspense } from "react"

const AppRouter = () => {
    const routesElems = useRoutes(routes)
    return (
        <Suspense>{routesElems}</Suspense>
    )
}

export default AppRouter
