 // Handle congratulatory notes submission
 const noteForm = document.getElementById("noteForm");
 const notesList = document.getElementById("notesList");

 noteForm.addEventListener("submit", function (e) {
   e.preventDefault();
   const noteTextarea = noteForm.querySelector("textarea");
   const note = noteTextarea.value.trim();

   if (note) {
     const li = document.createElement("li");
     li.textContent = note;
     notesList.appendChild(li);
     noteTextarea.value = ""; // Clear the textarea
   } else {
     alert("Please write a note before submitting!");
   }
 });

 // Handle ticket purchase
 const buyTicketsButton = document.getElementById("buyTicketsButton");
 const ticketConfirmation = document.getElementById("ticketConfirmation");

 buyTicketsButton.addEventListener("click", function () {
   const ticketCount = document.getElementById("ticketCount").value;
   if (ticketCount > 0) {
     ticketConfirmation.textContent = `You have successfully purchased ${ticketCount} ticket(s)! See you at the party! 🎉`;
   } else {
     alert("Please select at least one ticket.");
   }
 });