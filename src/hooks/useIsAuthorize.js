// admin
// Manager
// Sale
// Accountant
// AccountantManager

const isAccountantManager = (userAuth) => {
  return userAuth === 'AccountantManager';
};

const isAccountant = (userAuth) => {
  return userAuth === 'Accountant';
};

const isSale = (userAuth) => {
  return userAuth === 'Sale';
};
const isManager = (userAuth) => {
  return userAuth === 'Manager';
};
const isAdmin = (userAuth) => {
  return userAuth === 'Admin';
};

export { isAccountantManager, isAccountant, isSale, isManager, isAdmin };
