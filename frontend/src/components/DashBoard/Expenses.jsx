import { useEffect, useRef, useState } from "react";
import { Chart } from "chart.js";
import transact from "../../resources/transactions.json";
import { registerables } from "chart.js";
Chart.register(...registerables);

const Expenses = () => {
  const chartRefs = useRef({});
  const chartInstances = useRef({});
  const transactions = transact.transactions;

  const [timespan, setTimespan] = useState("weekly"); // Default timespan

  const filterTransactionsByTimespan = (timespan) => {
    const now = new Date();
    let startDate;

    if (timespan === "weekly") {
      startDate = new Date(now);
      startDate.setDate(now.getDate() - 7);
    } else if (timespan === "monthly") {
      startDate = new Date(now);
      startDate.setMonth(now.getMonth() - 1);
    } else if (timespan === "yearly") {
      startDate = new Date(now);
      startDate.setFullYear(now.getFullYear() - 1);
    }

    return transactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      return transactionDate >= startDate && transactionDate <= now;
    });
  };

  const getCategoryData = (filteredTransactions) => {
    const categoryMap = {};

    filteredTransactions.forEach((transaction) => {
      const amount = parseFloat(transaction.amount);
      if (amount < 0) {
        const category = transaction.category;
        categoryMap[category] = (categoryMap[category] || 0) + Math.abs(amount);
      }
    });

    const labels = Object.keys(categoryMap);
    const data = Object.values(categoryMap);

    const totalExpense = data.reduce((sum, val) => sum + val, 0);

    return { labels, data, totalExpense };
  };

  useEffect(() => {
    const filteredTransactions = filterTransactionsByTimespan(timespan);
    const { labels, data, totalExpense } = getCategoryData(filteredTransactions);

    if (chartInstances.current[timespan]) {
      console.log(`Destroying existing chart instance for ${timespan}...`);
      chartInstances.current[timespan].destroy();
    }

    const ctx = chartRefs.current[timespan].getContext("2d");

    console.log(`Creating new chart instance for ${timespan}...`);
    chartInstances.current[timespan] = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: [
              "#FFA726", "#66BB6A", "#42A5F5", "#FF7043", "#AB47BC", "#26C6DA",
            ],
            borderColor: "#FFFFFF",
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "right" },
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
            },
          },
        },
      },
      plugins: [
        {
          id: "totalExpense",
          beforeDraw: (chart) => {
            const { width } = chart;
            const { ctx } = chart;
            ctx.save();

            ctx.font = "bold 20px Arial";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = "#333";

            const centerX = chart.getDatasetMeta(0).data[0].x;
            const centerY = chart.getDatasetMeta(0).data[0].y;

            ctx.fillText(`Total: $${totalExpense.toFixed(2)}`, centerX, centerY);
            ctx.restore();
          },
        },
      ],
    });

    return () => {
      if (chartInstances.current[timespan]) {
        console.log(`Cleaning up chart instance for ${timespan}...`);
        chartInstances.current[timespan].destroy();
      }
    };
  }, [timespan, transactions]);

  const handleTimespanChange = (newTimespan) => {
    setTimespan(newTimespan);
  };

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded m-2" onClick={() => handleTimespanChange("weekly")}>Weekly</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded m-2" onClick={() => handleTimespanChange("monthly")}>Monthly</button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded m-2" onClick={() => handleTimespanChange("yearly")}>Yearly</button>
      </div>
      <div style={{ width: "100%", height: "400px" }}>
        <canvas
          ref={(el) => (chartRefs.current[timespan] = el)}
          id={`chart-${timespan}`}
        ></canvas>
      </div>
    </div>
  );
};

export default Expenses;
