import React, { FC } from "react";
import { AiFillCalendar, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { Pagination } from "antd";

const AllPost: FC<any> = (props) => {
  const list_filter = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 1,
      name: "Ha Giang",
    },
    {
      id: 2,
      name: "Ha Noi",
    },
    {
      id: 3,
      name: "Ha Noi",
    },
    {
      id: 4,
      name: "Ha Noi",
    },
    {
      id: 5,
      name: "Ha Noi",
    },
    {
      id: 6,
      name: "Ha Noi",
    },
  ];

  return (
    <>
      <div className="all_post">
        <div className="pt-[160px] bg-[#292929]"></div>
        <div className="all_post_containe container mt-10">
          <div className="all_post_filter w-[100%] pb-[30px]">
            <div className="all_post_filter_items">
              <span className="mr-[10px]">Filter:</span>
              <ul>
                {list_filter?.map((val, idx) => {
                  return <li key={idx}>{val?.name}</li>;
                })}
              </ul>
            </div>
            <div className="all_post_filter_search">
              <i className="mr-2">
                <AiOutlineSearch />
              </i>
              <input type="text" placeholder="Looking for location..." />
              <button className="btn_search">Search</button>
            </div>
          </div>
          <div className=" max-w-[1250px] m-auto  ">
            <div className=" w-[100%] flex">
              <div className="w-[80%] pr-[8px]">
                <div className="relative cursor-pointer h-[490px]  overflow-hidden rounded-[8px]">
                  <div className="rounded-[8px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="w-[100%] h-[500px] object-cover"
                    />
                  </div>

                  <div className="absolute bottom-[20px] left-[20px]">
                    <div className="post_tag"></div>
                    <div className="post_title !my-[10px]">
                      <h6 className="!text-[26px]">Đay hnasqj iqjndan qjdaj</h6>
                    </div>
                    <div className="post_content_details">
                      <ul>
                        <li>
                          <span>By</span>
                          <p>Anh Anh</p>
                        </li>
                        <li>
                          <i>
                            <AiFillCalendar />
                          </i>
                          <p>232323232</p>
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
              </div>
              <div className="w-[20%] pl-[8px]">
                <div className="all-post-right">
                  <div className="cursor-pointer mb-[20px]">
                    <div className="overflow-hidden pb-[5px]">
                      <img
                        src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                        alt=""
                        className="rounded-[8px]"
                      />
                    </div>
                    <div className="css_text_all_post my-[5px]">
                      <h6 className="text-[16px] leading-[20px] font-semibold">
                        Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm
                        sóc thiếu nhi tốt hơn
                      </h6>
                    </div>
                    <div className="flex items-center ">
                      <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                        Travel
                      </p>
                      <span className="text-[12px]">10:11 PM, Feb 02</span>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <div className="overflow-hidden pb-[5px]">
                      <img
                        src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                        alt=""
                        className="rounded-[8px] "
                      />
                    </div>
                    <div className="css_text_all_post my-[5px]">
                      <h6 className="text-[16px] leading-[20px] font-semibold">
                        Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm
                        sóc thiếu nhi tốt hơn
                      </h6>
                    </div>
                    <div className="flex items-center ">
                      <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                        Travel
                      </p>
                      <span className="text-[12px]">10:11 PM, Feb 02</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="divider"></span>

          <div className=" max-w-[1250px] m-auto flex">
            <div className="w-[80%] pr-[8px]">
              <div className="w-[100%] flex flex-wrap ">
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>{" "}
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>{" "}
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>{" "}
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>{" "}
                <div className="cursor-pointer w-[32%] px-[8px] py-[10px]">
                  <div className="overflow-hidden  pb-[5px]">
                    <img
                      src="https://quanticalabs.com/Pressroom/Template/images/samples/787x524/image_08.jpg"
                      alt=""
                      className="rounded-[8px] "
                    />
                  </div>
                  <div className="css_text_all_post my-[5px]">
                    <h6 className="text-[16px] leading-[20px] font-semibold">
                      Lãnh đạo TPHCM giải quyết những vấn đề "nóng" để chăm sóc
                      thiếu nhi tốt hơn
                    </h6>
                  </div>
                  <div className="flex items-center ">
                    <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                      Travel
                    </p>
                    <span className="text-[12px]">10:11 PM, Feb 02</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[20%] pl-[8px]"></div>
          </div>

          <div className="all_post_pagination my-[50px]">
            <div className="all_post_pagination_items">
              <Pagination defaultCurrent={1} total={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
