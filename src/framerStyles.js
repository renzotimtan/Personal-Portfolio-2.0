export const flowDown = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const parentHeader = {
  hidden: {
    opacity: 1,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

