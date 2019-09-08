import React, {Component} from 'react';
import ManagerCard from "../card/ManagerCard";
import TestimonialCard from "../card/TestimonialCard";
import Slider from 'react-slick';
import './react-slick-css/slick.css';
import './react-slick-css/slick-theme.css';
import {onCarouselWheel} from "../../util/CommonUtil";
import {HOME_DATA, TESTIMONIAL_DATA} from "../../config/CommonConfig";

export const RESPONSIVE_CAROUSEL_SETTINGS = [
    {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            dots: true,
        }
    },
];

const settings = {
    accessibility: false,
    autoplay: false,
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "0px",
    slidesToScroll: 1,
    responsive: RESPONSIVE_CAROUSEL_SETTINGS,
    speed: 500,
};

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.rcaCarouselRef = React.createRef();
        this.tmCarouselRef = React.createRef();
        this.deviceUtil = props.deviceUtil;
    }


    componentDidMount() {
        if (this.rcaCarouselRef.current) {
            this.rcaCarouselRef.current.addEventListener('wheel', this.onRCWheelEvent, {passive: false});
        }
        if (this.tmCarouselRef.current) {
            this.tmCarouselRef.current.addEventListener('wheel', this.onTmWheelEvent, {passive: false});
        }
    }

    componentWillUnmount() {
        if (this.rcaCarouselRef.current) {
            this.rcaCarouselRef.current.removeEventListener('wheel', this.onRCWheelEvent, {passive: false});
        }
        if (this.tmCarouselRef.current) {
            this.tmCarouselRef.current.removeEventListener('wheel', this.onTmWheelEvent, {passive: false});
        }
    }

    onRCWheelEvent = (e) => {
        onCarouselWheel(e, this.rcSlider);
    };

    onTmWheelEvent = (e) => {
        onCarouselWheel(e, this.tmSlider);
    };

    render() {

        return (
            <div className="w-100">
                <img className="w-100 m-0 h-banner" alt='manager_banner' src="static/clip.jpg"/>
                <div className="linear-blue-bg">
                    <div className="container py-5 text-white">
                        <div className="h4">How It Works</div>
                        <div className="mt-2">
                            <Slider
                                {...settings}
                                autoplay={true}
                                arrows={true}
                            >
                                <div className="px-2">
                                    <span><b>Step 1</b></span>
                                    <div className="h5">Create An Account</div>
                                    <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot
                                        cake.
                                        Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                        Candy croissant apple pie gummi bears gingerbread.
                                    </p>
                                </div>
                                <div className="px-2">
                                    <span><b>Step 2</b></span>
                                    <div className="h5">Find/Add Your Manager</div>
                                    <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot
                                        cake.
                                        Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                        Candy croissant apple pie gummi bears gingerbread.
                                    </p>
                                </div>
                                <div className="px-2">
                                    <span><b>Step 3</b></span>
                                    <div className="h5">Rate Your Manager</div>
                                    <p className="small">Chupa chups chocolate brownie halvah brownie apple pie carrot
                                        cake.
                                        Powder cookie ice cream powder candy canes biscuit cookie sweet powder.
                                        Candy croissant apple pie gummi bears gingerbread.
                                    </p>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="container pb-1">
                    <div className="row mt-4 mt-sm-5 mb-3">
                        <div className="col big-font text-muted">Recently Added</div>
                    </div>
                    <div className="home-data" ref={this.rcaCarouselRef}>
                        <Slider
                            {...settings}
                            ref={(c) => {
                                this.rcSlider = c;
                                return this.rcSlider;
                            }
                            }
                        >
                            {HOME_DATA.map(v => <ManagerCard key={v.id} v={v} slider/>)}
                        </Slider>
                    </div>
                    <div className="row mt-5 mb-3">
                        <div className="col big-font text-muted">Testimonials</div>
                    </div>
                    <div className="mb-5 home-data" ref={this.tmCarouselRef}>
                        <Slider
                            {...settings}
                            ref={(c) => {
                                this.tmSlider = c;
                                return this.tmSlider;
                            }
                            }
                        >
                            {TESTIMONIAL_DATA.map(v => <TestimonialCard key={v.id} data={v}/>)}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
