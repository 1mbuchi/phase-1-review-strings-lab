const currentUser = 'Grace Hopper';
const welcomeMessage = 'Welcome to Flatbook, ${currentUser="Grace Hopper"}!';
const excitedWelcomeMessage = welcomeMessage.toUpperCase() + '${currentUser="Grace Hopper"}!';
const shortGreeting = "Welcome, ${currentUser.slice(0, 1)='G'}!";