import { Paper, Typography } from "@mui/material";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const SalesCharts = ({ data }) => {
  if (!data || data.length === 0) return null;

  const keys = Object.keys(data[0]);
  if (keys.length < 2) return null;

  return (
    <Paper sx={{ mt: 4, p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Sales Comparison (Bar Chart)
      </Typography>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey={keys[0]} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={keys[1]} fill="#1976d2" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default SalesCharts;


