import { URL_ROUTES } from "../helpers/urlRoutes"
import { useFetch } from "../helpers/useFetch"

export const HomePage = () => {
  const { data, loading, error } = useFetch(URL_ROUTES.getAllPost)
  console.log({data,loading, error})
  return (
    <div>HomePage</div>
  )
}
