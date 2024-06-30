export function calculateAge(fatherAge, sonAge) {
  if (fatherAge < 0 || sonAge < 0) {
    throw Error("Ages must be greater than 0");
  }
  let difference = fatherAge - 2 * sonAge;
  return Math.abs(difference)
}

