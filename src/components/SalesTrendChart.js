import { Paper, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const SalesTrendChart = ({ data }) => {
  if (!data || data.length === 0) return null;

  const keys = Object.keys(data[0]);
  if (keys.length < 2) return null;

  return (
    <Paper sx={{ mt: 4, p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Sales Trend Analysis (Line Chart)
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey={keys[0]} />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={keys[1]}
            stroke="#2e7d32"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SalesTrendChart;
