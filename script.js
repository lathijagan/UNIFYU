document.addEventListener("DOMContentLoaded", function () {
    const collegeTypeSelect = document.getElementById("college-type");
    const departmentsContainer = document.getElementById("departments-container");
    const departmentsList = document.getElementById("departments-list");

    collegeTypeSelect.addEventListener("change", function () {
        const selectedCollegeType = collegeTypeSelect.value;

        // Clear the departments list
        departmentsList.innerHTML = "";

        // Simulate data based on the selected college type
        let departments = [];
        if (selectedCollegeType === "engineering") {
            departments = ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Informaton Technology", "Computer Science & Business Systems", "Artificial Intelligence& Machine Learning", "Artificial Intelligence & Data Science", "Information Science & Engineering", "Civil Engineering", "Mechanical Engineering", "Electrical Engineering",
            "Electronics and Communication Engineering", "Computer Science and Engineering",
            "Chemical Engineering", "Aerospace Engineering", "Biomedical Engineering",  "Environmental Engineering", "Industrial Engineering", "Materials Science and Engineering","Architectural Engineering", "Agricultural Engineering", "Petroleum Engineering", "Nuclear Engineering", "Mechatronics Engineering", "Food Technology and Engineering"];
        } else if (selectedCollegeType === "arts") {
            departments = ["Fine Arts", "History", "English","English Literature",  "History", "Political Science", "Psychology", "Sociology", "Philosophy", "Anthropology", "Economics", "Geography", "Art History", "Music", "Dance",  "Theater and Drama",
            "Communication Studies",  "Creative Writing", "Languages and Linguistics", "Religious Studies", "Maths", "Physics", "Visualcommunication", "Chemistry", "Botany"];
        } else if (selectedCollegeType === "medical") {
            departments = ["Medicine", "Nursing", "Pharmacy","Anesthesiology", "Cardiology", "Dermatology", "Endocrinology", "Gastroenterology", "Nephrology", "Neurology", "Obstetrics and Gynecology", "Ophthalmology", "Orthopedics", "Otolaryngology(ENT)", "Pediatrics", "Psychiatry", "Pulmonology"];
        }

        // Display the departments
        departments.forEach((department) => {
            const li = document.createElement("li");
            li.textContent = department;
            departmentsList.appendChild(li);
        });

        // Show the departments container
        departmentsContainer.style.display = "block";
    });
});
