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
  const router = useRouter();
  const dataSeo = {
    description: props?.data?.post?.des_seo,
    image: props?.data?.post?.thumbnail,
    title: props?.data?.post?.title,
    domain: props?.data?.post?.url,
    url: props?.data?.post?.url,
    keywords: props?.data?.post?.key_seo,
    dataSchema: {
      mainEntityOfPage: props?.data?.post?.url,
      idUrl: props?.data?.post?.url,
      articleSection: props?.data?.post?.category?.category_name, // Thể loại
    },
  };

  return (
    <>
      <MetaSeo {...dataSeo} />

      <div className="post_container">
        <section>
          <div
            className="post_slide min-h-[200px] lg:min-h-[500px]"
            style={{ backgroundImage: `url(${props?.data?.post?.thumbnail})` }}
          >
            <div className="post_content lg:pt-[280px] lg:px-[20px] pt-[120px] px-[20px] pb-[20px]">
              <div className="post_tag">{/* <span>Ha Giang</span> */}</div>
              <div className="post_title lg:my-[20px] my-[10px]">
                <h6 className="lg:!text-[32px] lg:!leading-[40px]  !text-[16px] !leading-[20px] max-h-[40px] lg:max-h-[80px]  overflow-hidden">
                  {props?.data?.post?.title}
                </h6>
              </div>
              <div className="post_content_details">
                <ul>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <span>By</span>
                    <p className="lg:text-[14px] text-[12px]">
                      {props?.data?.post?.users?.full_name}
                    </p>
                  </li>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <i className="lg:mr-[15px] mr-[10px]">
                      <AiFillCalendar />
                    </i>
                    <p className="lg:text-[14px] text-[12px]">
                      {moment(props?.data?.post?.createdAt).format("ll")}
                    </p>
                  </li>
                  <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                    <i className="lg:mr-[15px] mr-[10px]">
                      <AiOutlineEye />
                    </i>
                    <p className="lg:text-[14px] text-[12px]">
                      {props?.data?.post?.view}
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
                onClick={() =>
                  router.push(`/${router?.pathname?.split("/")[1]}`)
                }
              >
                <i>
                  <AiOutlineArrowLeft />
                </i>
                <span>Back</span>
              </div>
              <div className="post_category_detail">
                <span>
                  Category: {props?.data?.post?.category?.category_name}
                </span>
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
              <div className="content_post_left lg:w-[80%] w-[100%] lg:pr-[50px]">
                <div
                  className="mce-content-body"
                  dangerouslySetInnerHTML={{
                    __html: props?.data?.post?.content,
                  }}
                />
                <p className="py-10">Author: Viet Nam Travel</p>
              </div>
              <div className="content_post_right lg:w-[20%] w-[100%] md:flex lg:block flex-wrap mb-[50px] lg:mb-[0px]">
                {props?.data?.suggest?.map((val: any, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className="cursor-pointer lg:mb-[20px]  lg:w-[100%] w-[100%] pr-[10px] lg:pr-[0] md:w-[50%] mb-[10px] lg:100%"
                      onClick={() =>
                        router?.push(`/${val?.category?.slug}/${val.slug}`)
                      }
                    >
                      <div className="overflow-hidden pb-[5px]">
                        <img
                          src={val.thumbnail}
                          alt={val.slug}
                          className="rounded-[8px] h-[200px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"
                        />
                      </div>
                      <div className="css_text_all_post my-[5px]">
                        <h6 className="text-[16px] leading-[20px] font-semibold">
                          {val.title}
                        </h6>
                      </div>
                      <div className="flex items-center ">
                        <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                          {val.category?.category_name}
                        </p>
                        <span className="text-[12px]">
                          {val.createdAt && moment(val.createdAt).format("ll")}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Post;
