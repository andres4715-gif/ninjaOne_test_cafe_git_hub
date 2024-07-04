export const generateRandomString = (length: number): string => {
  const newRandomString = Math.random().toString(36).substring(2, length);
  console.info("--- The obtained random string is:", newRandomString);
  return newRandomString;
};
