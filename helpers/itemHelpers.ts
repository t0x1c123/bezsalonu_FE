export const removeWeaponTypeFromName = (name: string) => {
  if (name.includes('|')) {
    return name.split(' | ')[1];
  }
  return name;
};
