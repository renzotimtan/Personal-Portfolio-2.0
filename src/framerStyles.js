export const nameFlow = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: { duration: 6 },
  },
};

export const flowDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5 },
  },
};

export const parentHeader = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};
