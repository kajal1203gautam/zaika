
import Link from "next/link"
export default function NewCard(){
    return(
        <>
        <div className="card border-0 p-5 shadow-lg">
            <div className="d-flex">
                    <p>09 JUN 2020</p>
                    <p>STARTUP BUSINESS</p>
            </div>
            <h4>NEW ORGANIZATION ARE ADDED SEAL THERE</h4>
            <p>Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote...</p>
        <Link href={'/'} className="text-color">READ MORE</Link>
        </div>
        </>
    )
}