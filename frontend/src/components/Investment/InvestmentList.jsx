
import investments from "../../resources/investments.json"; // Adjust the path to your JSON file
import Investment from "./Investment"; // Ensure the correct path to your Investment component

const InvestmentList = () => {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {investments.map((investment, index) => (
          <Investment
            key={index}
            title={investment.title}
            amount={investment.amount}
            profit={investment.profit}
            status={investment.status}
            imageUrl={investment.imageUrl}
            bgColor={investment.bgColor} // Pass bgColor to Investment component
          />
        ))}
      </div>
    );
  };
  
  export default InvestmentList;
  