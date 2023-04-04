import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

const TestimonialCarousel = () => {
    return (

        <Swiper
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                834: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            }}
        >

            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative p-8 md:p-10 rounded-xl bg-greenVariant">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-greenVariant">

                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />

                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/4762744/pexels-photo-4762744.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">Sharon </h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>

                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>

                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative p-8 md:p-10 rounded-xl bg-darkBlue">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-darkBlue">
                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />
                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/6217815/pexels-photo-6217815.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">Adeayo</h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>
                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative  p-8 md:p-10 rounded-xl bg-greenVariant">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-greenVariant">
                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />
                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/6978005/pexels-photo-6978005.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">Jamal</h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>
                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative p-8 md:p-10 rounded-xl bg-darkBlue">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-darkBlue">
                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />
                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/9653757/pexels-photo-9653757.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">Bola</h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>
                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative p-8 md:p-10 rounded-xl bg-greenVariant">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-greenVariant">
                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />
                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/6217803/pexels-photo-6217803.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">Chioma</h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>
                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"testimonial-card relative w-full"}>
                    <div className="relative p-8  md:p-10 rounded-xl bg-darkBlue">
                        <div className="w-100 p-2 md:p-12 rounded-xl bg-darkBlue">
                            <img
                                src="images/bg-pattern-quotation.svg"
                                alt=""
                                className="absolute top-3 right-8 scale-125 md:top-7 md:right-24 md:scale-150"
                            />
                            <div className="flex space-x-4 text-white">
                                <img
                                    src="https://images.pexels.com/photos/8791117/pexels-photo-8791117.jpeg?auto=compress&cs=tinysrgb&w=600"
                                    alt=""
                                    className="w-12 h-12 rounded-full ring-3 ring-purple-300 hover:scale-110"
                                />
                                <div className="text-sm">
                                    <h4 className="opacity-90">David</h4>
                                    <p className="opacity-50">Verified Graduate</p>
                                </div>
                            </div>
                            <p className="relative mt-6 text-sm md:text-xl text-white">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis necessitatibus in facilis
                                placeat. Modi, ipsa!
                            </p>
                            <p className="mt-5 opacity-50 text-sm md:text-xl line-clamp-6 text-white">
                                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum atque explicabo maxime nostrum.
                                Excepturi facere sapiente iste, sed porro praesentium, laudantium dolor aperiam veritatis optio
                                quaerat impedit. Perferendis, maxime omnis."
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};



export default TestimonialCarousel;