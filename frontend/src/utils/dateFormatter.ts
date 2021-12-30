const dateFormatter = (arg: number[]): { date: string; price: number } => {
  const element = [...arg];
  const date = new Date(element[0]);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const fullDate = `${year}/${month}/${day}, ${hour} h. ${min} min. ${sec} sec.`;
  return { date: fullDate, price: element[1] };
};
export { dateFormatter };
