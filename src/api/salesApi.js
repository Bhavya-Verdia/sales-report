import axios from "axios";

export const fetchSalesData = async () => {
  const response = await axios.get("/salecomparison/lmtd/gsm");
  return response.data;
};
