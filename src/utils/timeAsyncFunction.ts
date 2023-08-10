export const timeToComplete = async (method: any, name: string) => {
  console.time(name);
  await method();
  console.timeEnd(name);
};
