export const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

export const countCharacters = (str: string): number => {
  return str.replace(/\s/g, "").length; // Räknar tecken utan mellanslag
};

export const toTitleCase = (str: string): string => {
  return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
};
