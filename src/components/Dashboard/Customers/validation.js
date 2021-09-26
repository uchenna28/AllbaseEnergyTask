const validation = (value) => {
  const errors = {};

  if (!value.firstName) {
    errors.firstName = 'First Name is required.';
  }
  if (!value.lastName) {
    errors.lastName = 'Last Name is required.';
  }
  if (!value.email) {
    errors.email = 'Email is required.';
  }
  if (!value.password) {
    errors.password = 'password is required.';
  } else if (value.password.length < 8) {
    errors.password = 'password must be more than Eight characters.';
  } else if (value.password(/[0-9]/) === -1) {
    errors.password = 'At least one numerical value must be entered';
  } else if (value.password(/[a-z]/) === -1) {
    errors.password = 'At least one lowercase value must be entered';
  } else if (value.password(/[A-Z]/) === -1) {
    errors.password = 'At least one uppercase value must be entered';
  } else if (value.password(/[?=.*?[#?!@$%^&*-]/) === -1) {
    errors.password = 'At least one special case value must be entered';
  }
  return errors;
};

export default validation;
