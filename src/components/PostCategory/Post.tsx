import React, { useState } from "react";
import MetaSeo from "../MetaSeo";
import {
  AiFillCalendar,
  AiOutlineEye,
  AiOutlineArrowLeft,
  AiFillFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
import moment from "moment";

const Post = (props: any) => {
  const dataSeo = {
    description: props?.data?.des_seo,
    image: props?.data?.thumbnail,
    title: props?.data?.title,
    domain: props?.data?.url,
    keywords: props?.data?.key_seo,
  };
  return (
    <>
      <MetaSeo {...dataSeo} />

      <div className="post_container">
        <section>
          <div
            className="post_slide"
            style={{ backgroundImage: `url(${props?.data?.thumbnail})` }}
          >
            <div className="post_content">
              <div className="post_tag">{/* <span>Ha Giang</span> */}</div>
              <div className="post_title">
                <h6>{props?.data?.title}</h6>
              </div>
              <div className="post_content_details">
                <ul>
                  <li>
                    <span>By</span>
                    <p>{props?.data?.users?.full_name}</p>
                  </li>
                  <li>
                    <i>
                      <AiFillCalendar />
                    </i>
                    <p>{moment(props?.data?.createdAt).format("LL")}</p>
                  </li>
                  <li>
                    <i>
                      <AiOutlineEye />
                    </i>
                    <p>842</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section>
            <div className="post_category">
              <div className="post_category_back">
                <i>
                  <AiOutlineArrowLeft />
                </i>
                <span>Back</span>
              </div>
              <div className="post_category_detail">
                <span>Category: {props?.data?.category?.category_name}</span>
                <div className="category_share">
                  <span>Share:</span>
                  <div className="category_share_ico">
                    <i>
                      <AiFillFacebook />
                    </i>
                    <i>
                      <AiFillTwitterCircle />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section>
          <div className="container">
            <div className="content_post">
              <div className="content_post_left">
                <div
                  className="mce-content-body"
                  dangerouslySetInnerHTML={{ __html: props?.data?.content }}
                />
                <p className="py-10">Author: Viet Nam Travel</p>
              </div>
              <div className="content_post_right"></div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
