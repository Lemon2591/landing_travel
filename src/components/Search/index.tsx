import React, { FC, useEffect, useState } from "react";
import MetaSeo from "../MetaSeo";
import { useRouter } from "next/router";
import { AiOutlineSearch } from "react-icons/ai";
import { Pagination, Empty } from "antd";
import moment from "moment";

const Search: FC<any> = ({ data }) => {
  const [search, setSearch] = useState<any>("");
  const router = useRouter();
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

  const dataSeo = {
    description:
      "Find inspiration for your next holiday in Vietnam, with insider guides to the country's best destinations, must-try tours and favourite local dishes, from Vietnam Tourism Board.",
    image: data?.data.thumbnail,
    title: "Explore Vietnam: Many things in Viet Nam",
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

  const onChangePage = (page: number, limit: number) => {
    let path = "";
    if (router?.query?.location) {
      path = `/search?location=${router?.query?.location}&page=${page}&limit=${limit}`;
    } else {
      path = `/search?page=${page}&limit=${limit}`;
    }
    router.push(path);
  };

  const onSearch = () => {
    if (!search) {
      return router.push("/search");
    }
    router.push(`/search?location=${search}`);
  };

  useEffect(() => {
    if (router?.query?.location) {
      setSearch(router.query.location);
    }
  }, []);

  return (
    <>
      <MetaSeo {...dataSeo} />
      <div>
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
                        router?.push(
                          `/${router?.pathname?.replace("/", "")}?location=${
                            val?.value
                          }`
                        )
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
                value={search}
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
        </div>

        <div className="max-w-[1250px] m-auto md:flex block">
          {data?.data?.length > 0 ? (
            <div className="w-[100%] py-[25px] px-[25px] md:px[0]">
              {data?.data?.map((val: any, idx: number) => {
                return (
                  <div
                    className="block md:flex cursor-pointer mb-[20px] items-center"
                    key={idx}
                    onClick={() => {
                      router?.push(`/${val?.category?.slug}/${val?.slug}`);
                    }}
                  >
                    <div className="md:w-[30%] w-[100%]">
                      <img
                        src={val?.thumbnail}
                        alt={val?.slug}
                        className="w-[100%] h-[200px] object-cover rounded-[5px]"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-[70%] w-[100%] md:pl-[15px] pl-[0] py-[10px]">
                      <div className="css_text_all_post my-[5px]">
                        <h6 className="text-[18px] leading-[20px] font-semibold">
                          {val?.title}
                        </h6>
                      </div>
                      <div className="my-[10px]">
                        <p className="text-[16px] leading-[20px] css_search_text ">
                          {val?.des_seo}
                        </p>
                      </div>
                      <div className="flex items-center ">
                        <p className="text-[14px] font-semibold text-[#e53935] mr-5">
                          Travel
                        </p>
                        <span className="text-[12px]">
                          {moment(val.createdAt).format("ll")}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex justify-center w-[100%] items-center py-[100px]">
              <Empty />
            </div>
          )}
        </div>

        <div className="all_post_pagination my-[50px]">
          <div className="all_post_pagination_items">
            <Pagination
              current={data?.page}
              total={data?.total}
              onChange={(e) => onChangePage(e, 10)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
