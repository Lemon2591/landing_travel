import React, { useState, useEffect, FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MetaSeo from "../MetaSeo";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const dataSubmit = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().required("Email is required").email("Wrong email format"),
  phone: Yup.string()
    .required("Phone number name is required")
    .matches(/\d/g, "Is not in correct format")
    .max(12, "Maximum 12 symbols"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Home() {
  

  return (
    <>
      <MetaSeo />

      <main>
        <article>
          <section className="hero" id="home">
            <div className="container">
              <h2 className="h1 hero-title">Journey to explore Viet Nam</h2>

              <p className="hero-text">Let’s live to the fullest in Vietnam!</p>

              <div className="btn-group">
                <button className="btn btn-primary">Explore</button>
              </div>
            </div>
          </section>

          {/* <section className="tour-search">
        <div className="container">

          <form action="" className="tour-search-form">

            <div className="input-wrapper">
              <label htmlFor="destination" className="input-label">Search Destination*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="people" className="input-label">Pax Number*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="checkin" className="input-label">Checkin Date**</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label htmlFor="checkout" className="input-label">Checkout Date*</label>

              <input type="date" name="checkout" id="checkout" required className="input-field"/>
            </div>

            <button type="submit" className="btn btn-secondary">Inquire now</button>

          </form>

        </div>
      </section> */}

          <section className="popular" id="destination">
            <div className="container">
              <p className="section-subtitle">Uncover place</p>

              <h2 className="h2 section-title">Popular destination</h2>

              <p className="section-text">
                Prepare for your trip with these practical articles
              </p>

              <ul className="popular-list">
                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="/assets/img/static/hanoi.jpg"
                        alt="Ha Noi, Viet Nam"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating rating_custom">
                        {[1, 2, 3, 4, 5]?.map(() => {
                          return (
                            <i>
                              <AiFillStar />
                            </i>
                          );
                        })}
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Viet Nam</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Ha Noi</a>
                      </h3>

                      <p className="card-text">
                        From ancient temples to buzzing markets, Hanoi's got it
                        all.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="/assets/img/static/hagiang.jpg"
                        alt="Burj khalifa, dubai"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        {[1, 2, 3, 4, 5]?.map(() => {
                          return (
                            <i>
                              <AiFillStar />
                            </i>
                          );
                        })}
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Viet Nam</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Ha Giang</a>
                      </h3>

                      <p className="card-text">
                        A border province and official Frontier Area, Ha Giang.
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="popular-card">
                    <figure className="card-img">
                      <img
                        src="/assets/img/static/hue.jpg"
                        alt="Kyoto temple, japan"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <div className="card-rating">
                        {[1, 2, 3, 4, 5]?.map(() => {
                          return (
                            <i>
                              <AiFillStar />
                            </i>
                          );
                        })}
                      </div>

                      <p className="card-subtitle">
                        <a href="#">Viet Nam</a>
                      </p>

                      <h3 className="h3 card-title">
                        <a href="#">Hue</a>
                      </h3>

                      <p className="card-text">
                        Hue is a city chock-full of stories.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>

              <button className="btn btn-primary">More destintion</button>
            </div>
          </section>

          <section className="package" id="package">
            <div className="container">
              <p className="section-subtitle">Popular Packeges</p>

              <h2 className="h2 section-title">Checkout Our Packeges</h2>

              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <ul className="package-list">
                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="/assets/img/static/hue.jpg"
                        alt="Experience The Great Holiday On Beach"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Experience The Great Holiday On Beach
                      </h3>

                      <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis
                        explicabo maiores, est aliquet porttitor! Eaque, cras,
                        aspernatur.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="time"></ion-icon>*/}

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="people"></ion-icon>*/}

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="location"></ion-icon>*/}

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(25 reviews)</p>

                        <div className="card-rating">
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                        </div>
                      </div>

                      <p className="price">
                        $750
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="/assets/img/static/hue.jpg"
                        alt="Summer Holiday To The Oxolotan River"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Summer Holiday To The Oxolotan River
                      </h3>

                      <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis
                        explicabo maiores, est aliquet porttitor! Eaque, cras,
                        aspernatur.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="time"></ion-icon>*/}

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="people"></ion-icon>*/}

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="location"></ion-icon>*/}

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(20 reviews)</p>

                        <div className="card-rating">
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                        </div>
                      </div>

                      <p className="price">
                        $520
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="package-card">
                    <figure className="card-banner">
                      <img
                        src="/assets/img/static/hue.jpg"
                        alt="Santorini Island's Weekend Vacation"
                        loading="lazy"
                      />
                    </figure>

                    <div className="card-content">
                      <h3 className="h3 card-title">
                        Santorini Island's Weekend Vacation
                      </h3>

                      <p className="card-text">
                        Laoreet, voluptatum nihil dolor esse quaerat mattis
                        explicabo maiores, est aliquet porttitor! Eaque, cras,
                        aspernatur.
                      </p>

                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="time"></ion-icon>*/}

                            <p className="text">7D/6N</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="people"></ion-icon>*/}

                            <p className="text">pax: 10</p>
                          </div>
                        </li>

                        <li className="card-meta-item">
                          <div className="meta-box">
                            {/* <ion-icon name="location"></ion-icon>*/}

                            <p className="text">Malaysia</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="card-price">
                      <div className="wrapper">
                        <p className="reviews">(40 reviews)</p>

                        <div className="card-rating">
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                          {/* <ion-icon name="star"></ion-icon> */}
                        </div>
                      </div>

                      <p className="price">
                        $660
                        <span>/ per person</span>
                      </p>

                      <button className="btn btn-secondary">Book Now</button>
                    </div>
                  </div>
                </li>
              </ul>

              <button className="btn btn-primary">View All Packages</button>
            </div>
          </section>

          <section className="gallery" id="gallery">
            <div className="container">
              <p className="section-subtitle">Photo Gallery</p>

              <h2 className="h2 section-title">Photo's From Travellers</h2>

              <p className="section-text">
                Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec
                nemo, rutrum. Vestibulum cumque laudantium. Sit ornare mollitia
                tenetur, aptent.
              </p>

              <ul className="gallery-list">
                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/hue.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/hue.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/hue.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/hue.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/hue.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </section>

        </article>
      </main>
    </>
  );
}

export default Home;
