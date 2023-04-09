export function generateOTP(count: number) {
  const string =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Find the length of string
  const len = string.length;
  let otp = '';
  for (let i = 0; i < count; i++) {
    otp += string[Math.floor(Math.random() * len)];
  }
  return otp;
}
