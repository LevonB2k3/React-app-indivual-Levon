export const calculateCountdown = (birthday, setCountdown) => {
    if (!birthday) return ''; // If birthday is not set, return empty
  
    const now = new Date(); // Current date and time
    const birthdayDate = new Date(birthday); // User's entered birthday
    birthdayDate.setFullYear(now.getFullYear()); // Set the year of birthday to the current year
  
    // If the birthday has already passed this year, set it to next year
    if (birthdayDate < now) {
      birthdayDate.setFullYear(now.getFullYear() + 1);
    }
  
    const timeDiff = birthdayDate - now; // Time difference in milliseconds
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert time to days
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Convert time to hours
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)); // Convert time to minutes
  
    setCountdown(`${days} Days, ${hours} Hours, ${minutes} Minutes`); // Set the countdown string
  };
  