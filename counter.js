async function updateVisitorCount() {
    try {
        const response = await fetch("https://wj0apwjixl.execute-api.us-east-1.amazonaws.com/Prod/visitorcount");
        const data = await response.json();
        
        // ✅ Ensure the API response contains the correct data
        if (data.visitor_count !== undefined) {
            document.getElementById("visitor-count").innerText = data.visitor_count;
        } else {
            document.getElementById("visitor-count").innerText = "Error fetching count";
        }
    } catch (error) {
        console.error("Error fetching visitor count:", error);
        document.getElementById("visitor-count").innerText = "Unavailable";
    }
}

// ✅ Call the function when the page loads
window.onload = updateVisitorCount;
