document.getElementById("insertButton").addEventListener('click', async (event) => {
    event.preventDefault();
    const attendeeID = document.getElementById("attendeeID").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    try {
        const response = await fetch('http://localhost:5500/api/attendees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ attendeeID, firstName, lastName, email, phone })
        });
        
        if (response.ok) {
            console.log('Attendee saved successfully');
        } else {
            console.log('Failed to save attendee');
        }
    } catch (error) {
        console.log('Error:', error);
    }

    try{
        fetch('http://localhost:5500/api/attendees')
            .then(response => response.json())
            .then(data => {
                const tableBody = document.getElementById('attendeeTableBody');
                data.forEach(attendee => {
                    const row = `<tr>
                        <td class="px-4 py-2 border">${attendee.attendeeID}</td>
                        <td class="px-4 py-2 border">${attendee.firstName}</td>
                        <td class="px-4 py-2 border">${attendee.lastName}</td>
                        <td class="px-4 py-2 border">${attendee.email}</td>
                        <td class="px-4 py-2 border">${attendee.phone}</td>
                    </tr>`;
                    tableBody.innerHTML += row;
                });
            })
            .catch(error => console.error('Error fetching attendees:', error));
    }catch(error){
        console.log(error);
    }

    document.getElementById("form").reset();
});
