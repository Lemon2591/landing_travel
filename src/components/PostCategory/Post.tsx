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
import { useRouter } from "next/router";

const Post = (props: any) => {
  const dataSeo = {
    description: props?.data?.des_seo,
    image: props?.data?.thumbnail,
    title: props?.data?.title,
    domain: props?.data?.url,
    keywords: props?.data?.key_seo,
  };

  const router = useRouter();
  return (
    <>
      <MetaSeo {...dataSeo} />

      <div className="post_container">
        <section>
          <div
            className="post_slide min-h-[200px] lg:min-h-[500px]"
            style={{ backgroundImage: `url(${props?.data?.thumbnail})` }}
          >
            <div className="post_content lg:pt-[280px] lg:px-[20px] pt-[120px] px-[20px] pb-[20px]">
              <div className="post_tag">{/* <span>Ha Giang</span> */}</div>
              <div className="post_title lg:my-[20px] my-[10px]">
                <h6 className="lg:!text-[32px] lg:!leading-[40px]  !text-[16px] !leading-[20px] max-h-[40px] lg:max-h-[80px]  overflow-hidden">
                  {props?.data?.title}
                </h6>
              </div>
              <div className="post_content_details">
                <ul>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <span>By</span>
                    <p className="lg:text-[14px] text-[12px]">
                      {props?.data?.users?.full_name}
                    </p>
                  </li>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <i className="lg:mr-[15px] mr-[10px]">
                      <AiFillCalendar />
                    </i>
                    <p className="lg:text-[14px] text-[12px]">
                      {moment(props?.data?.createdAt).format("ll")}
                    </p>
                  </li>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <i className="lg:mr-[15px] mr-[10px]">
                      <AiOutlineEye />
                    </i>
                    <p className="lg:text-[14px] text-[12px]">
                      {props?.data?.view}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <div className="container">
          <section>
            <div className="post_category">
              <div
                className="post_category_back lg:mb-[20px] mb-[10px]"
                onClick={() => router.push("/post")}
              >
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
            <div className="content_post lg:flex">
              <div className="content_post_left lg:w-[80%] w-[100%]">
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
