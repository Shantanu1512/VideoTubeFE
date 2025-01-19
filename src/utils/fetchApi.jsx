import axios from "axios";

const postApi = async (url, userdata) => {
  const res = await axios.post(url, userdata);
  return res.data;
};

export default postApi;
