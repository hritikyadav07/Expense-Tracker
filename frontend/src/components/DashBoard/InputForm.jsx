import { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    description: "",
    date: "",
    amount: "",
    type: "Income", // default dropdown value
    category: "Food", // default category value
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    setFormData({
      description: "",
      date: "",
      amount: "",
      type: "Income",
      category: "Food",
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter description"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
            required
          />
        </div>

        {/* Income/Expenditure Dropdown */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Income">Income</option>
            <option value="Expenditure">Expenditure</option>
          </select>
        </div>

        {/* Category Dropdown */}
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Utilities">Utilities</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Add Entry
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
