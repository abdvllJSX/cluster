export function convertDateRange(dateRange) {
    const { from, to } = dateRange;

    // Format the date explicitly to avoid timezone issues
    const formatDate = (date) =>
        new Date(date).toLocaleDateString("en-CA", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });

    // Convert dates
    const fromDate = formatDate(from);
    const toDate = formatDate(to);

    // Combine into desired format
    return `${fromDate}|${toDate}`;
}
