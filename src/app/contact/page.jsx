import Form from "../components/form";
import CommonHero from "../components/CommonHero";
export default function Contact() {
    return (
        <>
        <CommonHero />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                                <img src="images/img4.png" alt="" className="img-fluid p-5" />
                    </div>
                    <div className="col-lg-6 mt-5 mb-5">
                        <Form />
                    </div>
                </div>
            </div>

        </>
    )
}