export const formatDate = (string) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(string).toLocaleDateString([], options);
};

export const formatTime = (string) => new Date(string).toLocaleTimeString();
