import { useParams} from "react-router-dom"

export default function Pokemon() {
    const params = useParams()
    console.log(params)

    return (
        <h1>{params.pokemon}</h1>
    )
}