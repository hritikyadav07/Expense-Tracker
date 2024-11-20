const Investment = ({
  title = "Unknown Investment",
  amount = 0,
  profit = false,
  status = "N/A",
  imageUrl = "",
  bgColor = "bg-gray-600", // Default to gray if bgColor is not provided
}) => {
  return (
    <div className="max-w-xs w-64 h-80 mx-auto bg-white rounded-lg shadow-md border border-gray-200 flex flex-col">
      {/* Header */}
      <div className={`${bgColor} text-white font-bold px-4 py-2 rounded-t-lg flex justify-between`}>
        <span>Investment</span>
        <span className="text-xl">&#x25BC;</span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center p-4 space-y-4 flex-grow">
        <img
          src={imageUrl}
          alt={title}
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 truncate">
            {title}
          </h3>
          <p className="text-2xl font-bold text-gray-700">${amount}</p>
          <div className="flex justify-center items-center text-sm space-x-2">
            <span className={`font-medium ${profit ? "text-green-600" : "text-red-600"}`}>
              {profit ? "▲ Profit" : "▼ Loss"}
            </span>
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;
