//Declare object

let attendee = {};

// Add properties
attendee["attendeeId"] = "T001"
attendee["name"] = "Alice Smith"
attendee["event"] = "JavaScript Conference"
attendee["ticketType"] = "VIP"
attendee.ticketPrice = 150.00

console.log(attendee)

// Creat a function to log attendee name
function logAttendeeName(attendee) {
  console.log(attendee["name"])
}

//Create a function to log Ticket Price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

//Create a function to update Ticket Type
function updateTicketType(attendee, newTicketType) {
attendee["ticketType"] = newTicketType
}

//Create a function to update Ticket Price
function updateTicketPrice(attendee, newTicketPrice){
attendee.ticketPrice = newTicketPrice
}

//Create a function to Remove the Event Property
function removeEventProperty(attendee){
delete attendee["event"]  
}

//Create a function to add a Checked-in Property
function addCheckedInProperty(attendee){
  attendee["CheckedIn"] = true
}

//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};