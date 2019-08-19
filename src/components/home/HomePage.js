import React, {Component} from 'react';
import ManagerCard from "../card/ManagerCard";
import TestimonialCard from "../card/TestimonialCard";

const homeData = [
    {
        id: 1,
        managerName: "Ashutosh Singh",
        designation: "PROJECT_MANAGER",
        companyName: "Wynk Ltd",
        city: "Gurugram",
        averageRating: 7,
        totalReviews: 10,
        promotedReview: {
            reviewer: "Thushi la",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    },
    {
        id: 2,
        managerName: "Morris Knuth",
        designation: "TECH_LEAD",
        companyName: "Google",
        city: "Gurugram",
        averageRating: 6,
        totalReviews: 1,
        promotedReview: {
            reviewer: "Hians Hegde",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    },
    {
        id: 3,
        managerName: "MVP Arora",
        designation: "PROJECT_MANAGER",
        companyName: "ABP Co. Ltd",
        city: "Bangalore",
        averageRating: 3,
        totalReviews: 20,
        promotedReview: {
            reviewer: "Nayak",
            comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
                " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
        }
    }
];

const testimonialData = [
    {
        id: 1,
        name: "Sandeep Mirakhur",
        designation: "CTO",
        companyName: "Rational Heads",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you understand the material, taking you.."
    },
    {
        id: 1,
        name: "Vijay Mathur",
        designation: "Director",
        companyName: "FaceBook Inc",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you understand the material"
    },
    {
        id: 1,
        name: "Chetan Kabu",
        designation: "Co-Founder",
        companyName: "Truminds Ltd.",
        comments: "100% the best Math teacher I've taken. His lectures are great, and he really cares about his" +
            " students. Mr. Allen really goes out of his way to make sure you"
    },
];

class HomePage extends Component {

    render() {

        return (
            <div className="w-100">
                <img className="w-100 m-0" alt='manager_banner' src="static/clip.jpg"/>
                <div className="linear-blue-bg">
                    <div className="container py-5 text-white">
                        <div className="h4">How It Works</div>
                        <div className="row mt-2">
                            <div className="col-lg-4">
                                <span><b>Step 1</b></span>
                                <div className="h5">Create An Account</div>
                                <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot cake.
                                    Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                    Candy croissant apple pie gummi bears gingerbread.
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <span><b>Step 2</b></span>
                                <div className="h5">Find/Add Your Manager</div>
                                <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot cake.
                                    Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                    Candy croissant apple pie gummi bears gingerbread.
                                </p>
                            </div>
                            <div className="col-lg-4">
                                <span><b>Step 3</b></span>
                                <div className="h5">Rate Your Manager</div>
                                <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot cake.
                                    Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                    Candy croissant apple pie gummi bears gingerbread.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row mt-5 mb-3">
                        <div className="col big-font text-muted">Recently Added</div>
                    </div>
                    <div className='row'>
                        {homeData.map(v => <ManagerCard v={v}/>)}
                    </div>
                    <div className="row mt-5 mb-3">
                        <div className="col big-font text-muted">Testimonials</div>
                    </div>
                    <div className='row mb-4'>
                        {testimonialData.map(v => <TestimonialCard data={v}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
