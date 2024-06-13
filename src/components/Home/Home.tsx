import React, { useState, useEffect, FC } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MetaSeo from "../MetaSeo";
import { AiFillStar } from "react-icons/ai";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
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
                <button
                  className="btn btn-primary"
                  onClick={() => router.push("/post")}
                >
                  Explore
                </button>
              </div>
            </div>
          </section>

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

              <button
                className="btn btn-primary"
                onClick={() => router.push("/post")}
              >
                More destintion
              </button>
            </div>
          </section>

          <section className="gallery !pt-[0]" id="gallery">
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
                      src="/assets/img/static/image_a.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/image_b.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/image_d.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/image_c.jpg"
                      alt="Gallery image"
                    />
                  </figure>
                </li>

                <li className="gallery-item">
                  <figure className="gallery-image">
                    <img
                      src="/assets/img/static/image_e.jpg"
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
