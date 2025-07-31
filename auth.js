/**
 * Authentication helper functions for login system
 */

// Get accounts from localStorage or initialize with default admin account
function getAccounts() {
  let accounts = JSON.parse(localStorage.getItem('accounts'));
  if (!accounts) {
    // Initialize with default admin account
    accounts = [
      { username: 'admin', password: 'admin123', role: 'admin' },
      { username: 'kasir', password: 'kasir123', role: 'kasir' }
    ];
    localStorage.setItem('accounts', JSON.stringify(accounts));
  }
  return accounts;
}

// Save accounts to localStorage
function saveAccounts(accounts) {
  localStorage.setItem('accounts', JSON.stringify(accounts));
}

// Get logged in user from localStorage
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem('loggedInUser'));
}

// Set logged in user in localStorage
function setLoggedInUser(user) {
  localStorage.setItem('loggedInUser', JSON.stringify(user));
}

// Clear logged in user from localStorage (logout)
function logout() {
  localStorage.removeItem('loggedInUser');
}

// Check if user is logged in
function isLoggedIn() {
  return getLoggedInUser() !== null;
}

// Find account by username and password
function findAccount(username, password) {
  const accounts = getAccounts();
  return accounts.find(acc => acc.username === username && acc.password === password);
}

// Add new account (only if username not exists)
function addAccount(newAccount) {
  const accounts = getAccounts();
  if (accounts.some(acc => acc.username === newAccount.username)) {
    return false; // username exists
  }
  accounts.push(newAccount);
  saveAccounts(accounts);
  return true;
}
