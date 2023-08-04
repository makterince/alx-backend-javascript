interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentList: Student[] = [
	{
		firstName: string;
		lastName: string;
		age: number;
		location: string;
	},
	{
		firstName: string;
		lastName: string;
		age: number;
		location: string;
	}
];

document.addEventListener("DOMContentLoaded", () => {
	const table = document.createElement("table");

	// Create table header
	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");
	const headerCell1 = document.createElement("th");
	const headerCell2 = document.createElement("th");
	headerCell1.textContent = "First Name";
	headerCell2.textContent = "Location";
	headerRow.appendChild(headerCell1);
	headerRow.appendChild(headerCell2);
	thead.appendChild(headerRow);
	table.appendChild(thead);
	
	// Create table body
	const tbody = document.createElement("tbody");
	studentsList.forEach(student => {
		const row = document.createElement("tr");
		const cell1 = document.createElement("td");
		const cell2 = document.createElement("td");
		cell1.textContent = student.firstName;
		cell2.textContent = student.location;
		row.appendChild(cell1);
		row.appendChild(cell2);										      tbody.appendChild(row);
	});
	table.appendChild(tbody);
	
	document.body.appendChild(table);
});
