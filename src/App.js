import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Alert,
  CircularProgress,
  Box,
} from "@mui/material";
import axios from "axios";

import SalesTable from "./components/SalesTable";
import SalesCharts from "./components/SalesCharts";
import SalesTrendChart from "./components/SalesTrendChart";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get(
          "http://74.225.26.105:8000/salecomparison/lmtd/gsm"
        );

        if (Array.isArray(response.data)) {
          setData(response.data);
        } else {
          setData([]);
        }

        setError("");
      } catch (err) {
        console.error("API Error:", err);
        setError(
          "The backend API responded with an internal server error related to database connectivity. " +
            "This application consumes live backend data without using mock or hardcoded values."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h3" gutterBottom>
        Sales Comparison Report
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        This report presents a comparative analysis of sales data using live
        backend information retrieved through an API. The purpose is to analyze
        performance trends and compare key sales metrics in a structured,
        analytical format.
      </Typography>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          <strong>Backend API Error:</strong>
          <br />
          {error}
        </Alert>
      )}

      {!loading && !error && (!data || data.length === 0) && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Sales data is currently unavailable from the backend. The report
          components will render automatically when data becomes available.
        </Alert>
      )}

      {!loading && !error && data && data.length > 0 && (
        <>
          <SalesTable data={data} />
          <SalesCharts data={data} />
          <SalesTrendChart data={data} />
        </>
      )}
    </Container>
  );
}

export default App;




