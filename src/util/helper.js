const fetchApi = async (url) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_NEWS}${url}`,
      {
        headers: {
          "Content-Type": "application/json",
          key_w: `${process.env.NEXT_PUBLIC_API_KEY_WEB}`,
        },
      }
    );

    const obj = await res.json();
    if (!obj || obj.statusCode !== 200) {
      return {
        data: obj?.data,
      };
    }
    return {
      data: obj?.data,
    };
    // will be passed to the page component as props
  } catch (error) {
    return error;
  }
};

export default fetchApi;
