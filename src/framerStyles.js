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

// For Projects
export const flowUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const fastHeader = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      when: "beforeChildren",
    },
  },
};
// -----

export const parentHeader = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
  exit: {
    y: -30,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5 },
  },
};

export const fade = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
