import CommonHero from "../components/CommonHero";
import Link from "next/link";
import NewsUpdates from "../components/NewsUpdates";
import NewCard from "../components/NewCard";
export default function About(){
    return(
        <>
        <CommonHero title={{About}} />
        <div className="container pt-5">
            <div className="row position-relative">
                <div className="col-lg-8">
                        <img src="/images/about1.jpeg" alt="" className="img-fluid" />
                </div>
                <div className="col-lg-4"></div>
            </div>
            <div className="row">
                <div className="col-lg-5 about-card">
                        <div className="card p-5 border-0 shadow-lg" style={{backgroundColor:'#F2F3F5'}}>
                            <h6 className="text-color">ABOUT US</h6>
                            <h2>WE PROVIDE LUXURY & COMFORTABLE DRESSES</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.</p>
                                <Link href='/contact' className="text-color">Contact Us</Link>
                        </div>
                </div>
                <div className="col-lg-7"></div>
            </div>
        </div>
        <NewsUpdates />
        <div className="container pt-5 pb-5">
            <div className="row">
                <div className="col-lg-4">
                        <NewCard />
                </div>
                <div className="col-lg-4">
                        <NewCard />
                </div>
                <div className="col-lg-4">
                        <NewCard />
                </div>
            </div>
        </div>
        </>
    )
}