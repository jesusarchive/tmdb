// Remove duplicates from array of objects
export const uniq = (list: Array<any>): Array<any> => {
  return Array.from(new Set(list.map(JSON.stringify as any))).map(JSON.parse as any);
};
