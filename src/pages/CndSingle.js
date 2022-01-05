import { useParams } from "react-router"

const CndSingle = () => {

    const {cid} = useParams()

    return (
        <div>
            <h1>Cnd Single</h1>
            {cid}
        </div>
    )
}

export default CndSingle
