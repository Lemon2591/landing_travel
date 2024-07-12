import React, { FC, useEffect, useState } from "react";
import { AiFillCalendar, AiOutlineEye, AiOutlineSearch } from "react-icons/ai";
import { Pagination, Skeleton } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import fetchApi from "../../util/helper";
import MetaSeo from "../MetaSeo";

const AllPost: FC<any> = (props) => {
  const router = useRouter();
  const dataSeo = {
    description:
      "Discover the highlights of Vietnam through the country's official tourism website. Plan your trip with advice on Vietnam's best destinations, what to do in Vietnam, visas for Vietnam, where to go in Vietnam, and much more.",
    image: props?.data?.thumbnail,
    title: "Visit Vietnam: The Official Tourism Website of Vietnam",
    domain: "https://culturalvn.com",
    keywords: "vietnam tourism, vietnam travel, vietnam website",
    dataSchema: {
      mainEntityOfPage: `https://culturalvn.com/${router?.pathname.replace(
        "/",
        ""
      )}`,
      idUrl: `https://culturalvn.com/${router?.pathname.replace("/", "")}`,
      articleSection: router?.pathname.replace("/", ""), // Thể loại
    },
  };
  const [search, setSearch] = useState("");
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const list_filter = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 1,
      name: "Ha Giang",
      value: "ha giang",
    },
    {
      id: 2,
      name: "Ha Noi",
      value: "ha noi",
    },
    {
      id: 3,
      name: "TP. Ho Chi Minh",
      value: "ho chi minh",
    },
    {
      id: 4,
      name: "Da Nang",
      value: "da nang",
    },
    {
      id: 5,
      name: "Ha Long",
      value: "ha long",
    },
  ];

  const getData = async (page = 1, limit = 9) => {
    setLoading(true);
    try {
      const data_res: any = await fetchApi(
        `/api/get-list-post?page=${page}&limit=${limit}`
      );
      setData(data_res?.data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const onSearch = () => {
    if (!search) {
      return router.push("/search");
    }
    router.push(`/search?location=${search}`);
  };

  return (
    <>
      <MetaSeo {...dataSeo} />
      <div className="all_post">
        <div className="bg-[#292929] img_post h-[200px] md:h-[400px]"></div>
        <div className="all_post_containe container md:mt-10">
          <div className="all_post_filter w-[100%] pb-[30px] lg:flex">
            <div className="all_post_filter_items flex lg:w-[70%] items-center my-[10px]">
              <span className="mr-[10px]">Filter:</span>
              <ul>
                {list_filter?.map((val, idx) => {
                  return (
                    <li
                      className="my-[5px] lg:my-[0]"
                      key={idx}
                      onClick={() =>
                        router?.push(`/search?location=${val?.value}`)
                      }
                    >
                      {val?.name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="all_post_filter_search lg:w-[30%] my-[10px]">
              <i className="mr-2">
                <AiOutlineSearch />
              </i>
              <input
                type="text"
                placeholder="Looking for location..."
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <button className="btn_search" onClick={onSearch}>
                Search
              </button>
            </div>
          </div>
          <div className=" max-w-[1250px] m-auto  ">
            <div className=" w-[100%] lg:flex ">
              <div className="lg:w-[80%] lg:pr-[8px]">
                <div
                  className="relative cursor-pointer overflow-hidden rounded-[8px]"
                  onClick={() =>
                    router?.push(
                      `/${router?.pathname?.replace("/", "")}/${
                        props?.data[0]?.slug
                      }`
                    )
                  }
                >
                  <div className="rounded-[8px]">
                    <img
                      src={props?.data[0]?.thumbnail}
                      alt={props?.data[0]?.slug}
                      className="w-[100%] xl:h-[500px] object-cover"
                    />
                  </div>

                  <div
                    className="absolute lg:bottom-[20px] bottom-[10px] left-[10px] lg:left-[20px] lg:w-[90%] w-[95%] lg:px-[15px] lg:py-[10px] rounded-[10px]  px-[10px] py-[5px]"
                    style={{ backgroundColor: "rgba(0,0,0, .5)" }}
                  >
                    <div className="post_tag"></div>
                    <div className="post_title lg:!my-[10px] !my-[5px]">
                      <h1 className="lg:!text-[26px] lg:!leading-[36px]  !text-[16px] !leading-[20px] max-h-[40px] lg:max-h-[78px]  overflow-hidden">
                        {props?.data[0]?.title}
                      </h1>
                    </div>
                    <div className="post_content_details">
                      <ul>
                        <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                          <span>By</span>
                          <p className="lg:text-[14px] text-[12px]">
                            Cultural Viet Nam
                          </p>
                        </li>
                        <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                          <i className="lg:mr-[15px] mr-[10px]">
                            <AiFillCalendar />
                          </i>
                          <p className="lg:text-[14px] text-[12px]">
                            {moment(props?.data[0]?.createdAt).format("ll")}
                          </p>
                        </li>
                        <li className="lg:mr-[20px] mr-[8px] lg:pr-[20px] pr-[8px]">
                          <i className="lg:mr-[15px] mr-[10px]">
                            <AiOutlineEye />
                          </i>
                          <p className="lg:text-[14px] text-[12px]">
                            {props?.data[0]?.view}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-[20%] lg:pl-[8px] ">
                <div className="all-post-right lg:block flex lg:mt-[0] mt-5">
                  <div
                    className="cursor-pointer lg:mb-[20px]  lg:w-[100%] w-[50%] pr-[10px] lg:pr-[0]"
                    onClick={() =>
                      router?.push(
                        `/${router?.pathname?.replace("/", "")}/${
                          props?.data[1]?.slug
                        }`
                      )
                    }
                  >
                    <div className="overflow-hidden pb-[5px]">
                      <img
                        src={props?.data[1]?.thumbnail}
                        alt={props?.data[1]?.slug}
                        className="rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"
                      />
                    </div>
                    <div className="css_text_all_post my-[5px]">
                      <h6 className="text-[16px] leading-[20px] font-semibold">
                        {props?.data[1]?.title}
                      </h6>
                    </div>
                    <div className="flex items-center ">
                      <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                        {props?.data[1]?.category?.category_name}
                      </p>
                      <span className="text-[12px]">
                        {props?.data[1]?.createdAt &&
                          moment(props?.data[1]?.createdAt).format("ll")}
                      </span>
                    </div>
                  </div>

                  <div
                    className="cursor-pointer lg:w-[100%] w-[50%] pl-[10px] lg:pl-[0]"
                    onClick={() =>
                      router?.push(
                        `/${router?.pathname?.replace("/", "")}/${
                          props?.data[2]?.slug
                        }`
                      )
                    }
                  >
                    <div className="overflow-hidden pb-[5px]">
                      <img
                        src={props?.data[2]?.thumbnail}
                        alt={props?.data[2]?.slug}
                        className="rounded-[8px] h-[100px] md:h-[200px] object-cover w-[100%] lg:h-[165px]"
                      />
                    </div>
                    <div className="css_text_all_post my-[5px]">
                      <h6 className="text-[16px] leading-[20px] font-semibold">
                        {props?.data[2]?.title}
                      </h6>
                    </div>
                    <div className="flex items-center ">
                      <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                        {props?.data[2]?.category?.category_name}
                      </p>
                      <span className="text-[12px]">
                        {" "}
                        {props?.data[2]?.createdAt &&
                          moment(props?.data[2]?.createdAt).format("ll")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="divider"></span>

          <div className=" max-w-[1250px] m-auto lg:flex block">
            <div className="lg:w-[80%] lg:pr-[8px] w-[100%]">
              <div className="w-[100%] flex flex-wrap justify-start ">
                <Skeleton active loading={loading}>
                  {data?.data?.map((val: any) => {
                    return (
                      <div
                        className="cursor-pointer md:w-[50%] lg:w-[33.33%] px-[8px] py-[10px] w-[100%]"
                        key={val?.id}
                        onClick={() =>
                          router?.push(`/${val?.category?.slug}/${val?.slug}`)
                        }
                      >
                        <div className="overflow-hidden  pb-[5px]">
                          <img
                            src={val?.thumbnail}
                            alt={val?.slug}
                            className="rounded-[8px] lg:h-[180px] object-cover w-[100%] md:h-[350px] h-[220px]"
                            loading="lazy"
                          />
                        </div>
                        <div className="css_text_all_post my-[5px]">
                          <h6 className="text-[16px] leading-[20px] font-semibold">
                            {val?.title}
                          </h6>
                        </div>
                        <div className="flex items-center ">
                          <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                            {val?.category?.category_name}
                          </p>
                          <span className="text-[12px]">
                            {moment(val.createdAt).format("ll")}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </Skeleton>
              </div>
            </div>
            <div className="w-[20%] pl-[8px]"></div>
          </div>

          <div className="all_post_pagination my-[50px]">
            <div className="all_post_pagination_items">
              <Pagination
                defaultCurrent={data?.page}
                total={data?.total}
                onChange={(e) => getData(e, 9)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
