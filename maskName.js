function maskName() {
    const name = document.getElementById("inputName").value.trim();
    const maskedNames = {
        "Grandma's Recipes": "Family Cookbook",
        "Annual Report 2017": "Yearly Summary Archive",
        "Shopping List": "Weekly Groceries",
        "Gardening Project": "Home Botany Plan",
        "Book Notes": "Literature Review",
        "Class Schedule": "Educational Agenda",
        "Weekly Menu": "Meal Planner",
        "Financial Calculator": "Budgeting Tool"
    };

    // Попытка найти замаскированное название
    const maskedName = maskedNames[name] || "Unknown Mask";

    // Отображаем замаскированное название
    document.getElementById("maskedName").textContent = `Masked name: ${maskedName}`;
}
