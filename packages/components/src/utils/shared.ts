export const extend = Object.assign

export function cutString(str: string, maxlength: number) {
  return [...str].slice(0, maxlength).join('');
}