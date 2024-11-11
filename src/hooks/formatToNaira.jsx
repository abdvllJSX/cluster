const useFormatToNaira = () => {
  const formatToNaira = (amount) => {
    // Handle invalid inputs
    if (isNaN(amount) || amount === null) return "₦0.00";

    // Convert to number and format with Nigerian Naira symbol and thousands separator
    const formattedAmount = new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);

    return formattedAmount;
  };

  return formatToNaira;
};

export default useFormatToNaira;
