import * as React from 'react';

export const usePasswordValidation = ({ firstPassword = '', secondPassword = '', requiredLength = 8 }) => {
  const [validLength, setValidLength] = React.useState(null);
  const [hasNumber, setHasNumber] = React.useState(null);
  const [upperCase, setUpperCase] = React.useState(null);
  const [lowerCase, setLowerCase] = React.useState(null);
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    setValidLength(firstPassword.length >= requiredLength);
    setUpperCase(firstPassword.toLowerCase() !== firstPassword);
    setLowerCase(firstPassword.toUpperCase() !== firstPassword);
    setHasNumber(/\d/.test(firstPassword));
    setMatch(firstPassword && firstPassword === secondPassword);
  }, [firstPassword, secondPassword, requiredLength]);
  return [validLength, hasNumber, upperCase, lowerCase, match];
};
