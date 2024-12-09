import { useEffect, useRef } from "react";
import { Chart } from "chart.js";
import { registerables } from "chart.js";
import transact from "../../resources/transactions.json";

Chart.register(...registerables);

const Analytics = () => {
  const categoryChartRef = useRef(null);
  const incomeExpenseChartRef = useRef(null);
  const dailyTrendChartRef = useRef(null);

  const transactions = transact.transactions;

  const getFilteredTransactions = (type) => {
    return transactions.filter((transaction) =>
      type === "income"
        ? parseFloat(transaction.amount) > 0
        : parseFloat(transaction.amount) < 0
    );
  };

  const prepareCategoryData = () => {
    const expenseTransactions = getFilteredTransactions("expense");
    const categoryMap = {};

    expenseTransactions.forEach((transaction) => {
      const amount = Math.abs(parseFloat(transaction.amount));
      const category = transaction.category;
      categoryMap[category] = (categoryMap[category] || 0) + amount;
    });

    return {
      labels: Object.keys(categoryMap),
      data: Object.values(categoryMap),
    };
  };

  const prepareIncomeExpenseData = () => {
    const incomeTransactions = getFilteredTransactions("income");
    const expenseTransactions = getFilteredTransactions("expense");

    const totalIncome = incomeTransactions.reduce(
      (sum, transaction) => sum + parseFloat(transaction.amount),
      0
    );
    const totalExpense = expenseTransactions.reduce(
      (sum, transaction) => sum + Math.abs(parseFloat(transaction.amount)),
      0
    );

    return { labels: ["Income", "Expense"], data: [totalIncome, totalExpense] };
  };

  const prepareDailyTrendData = () => {
    const expenseTransactions = getFilteredTransactions("expense");
    const dailyMap = {};

    expenseTransactions.forEach((transaction) => {
      const date = transaction.date;
      const amount = Math.abs(parseFloat(transaction.amount));
      dailyMap[date] = (dailyMap[date] || 0) + amount;
    });

    const sortedDates = Object.keys(dailyMap).sort();
    const data = sortedDates.map((date) => dailyMap[date]);

    return { labels: sortedDates, data };
  };

  useEffect(() => {
    // Category Doughnut Chart
    const categoryData = prepareCategoryData();
    new Chart(categoryChartRef.current, {
      type: "doughnut",
      data: {
        labels: categoryData.labels,
        datasets: [
          {
            data: categoryData.data,
            backgroundColor: [
              "#FFA726",
              "#66BB6A",
              "#42A5F5",
              "#FF7043",
              "#AB47BC",
              "#26C6DA",
            ],
            borderColor: "#FFFFFF",
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          legend: { position: "right" },
        },
      },
    });

    // Income vs Expense Bar Chart
    const incomeExpenseData = prepareIncomeExpenseData();
    new Chart(incomeExpenseChartRef.current, {
      type: "bar",
      data: {
        labels: incomeExpenseData.labels,
        datasets: [
          {
            label: "Amount",
            data: incomeExpenseData.data,
            backgroundColor: ["#66BB6A", "#FF7043"],
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          y: { beginAtZero: true },
        },
      },
    });

    // Daily Spending Trend Line Chart
    const dailyTrendData = prepareDailyTrendData();
    new Chart(dailyTrendChartRef.current, {
      type: "line",
      data: {
        labels: dailyTrendData.labels,
        datasets: [
          {
            label: "Daily Expense",
            data: dailyTrendData.data,
            borderColor: "#42A5F5",
            backgroundColor: "rgba(66, 165, 245, 0.2)",
            fill: true,
          },
        ],
      },
      options: {
        plugins: {
          legend: { display: false },
        },
        scales: {
          x: { title: { display: true, text: "Date" } },
          y: { beginAtZero: true },
        },
      },
    });
  }, []);

  return (
    <div>
      <h2>Expense Analytics</h2>
      <div style={{ width: "400px", height: "400px", marginBottom: "20px" }}>
        <h3>Category-wise Expense Breakdown</h3>
        <canvas ref={categoryChartRef}></canvas>
      </div>
      <div style={{ width: "400px", height: "400px", marginBottom: "20px" }}>
        <h3>Income vs Expense Comparison</h3>
        <canvas ref={incomeExpenseChartRef}></canvas>
      </div>
      <div style={{ width: "600px", height: "400px", marginBottom: "20px" }}>
        <h3>Daily Spending Trend</h3>
        <canvas ref={dailyTrendChartRef}></canvas>
      </div>
    </div>
  );
};

export default Analytics;
