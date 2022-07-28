export const getClass = title => {
  const job = title.slice(0, 2);
  if (job === "경찰") return "police";
  if (job === "소방") return "fire";
  if (job === "행정") return "admin";

  return job;
};

export default getClass;
