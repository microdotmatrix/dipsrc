// Framer Motion animation variant configurations

export const pageAnimation = {
	hide: {
		opacity: 0,
    y: '-10px',
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
      duration: 0.5,
      delay: 0.125,
			when: 'beforeChildren',
			staggerChildren: 1.25,
    },
	},
	out: {
		opacity: 0,
    y: '10px',
		transition: {
      duration: 0.5,
      delay: 0.2,
			when: 'beforeChildren',
			staggerChildren: 1.25,
		},
	},
}

export const pageTransition = {
  initial: {
    scale: 1,
    y: '-2px',
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.75
    }
  },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5
    }
  },
  exit: {
    scale: 1,
    y: '2px',
    opacity: 0,
    transition: {
      delay: 0,
      duration: 0.75
    }
  },
  transition: {
    duration: 0.5
  }
}

export const elementMotion = {
  hide: {
    opacity: 0,
    y: '10px',
    transition: {
      duration: 0.5,
      when: "afterChildren",
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      when: "afterChildren",
    },
  },
  in: {
    opacity: 0.5,
    y: '-20px',
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      when: "beforeChildren"
    }
  },
  out: {
    opacity: 0,
    y: '20px',
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      when: "beforeChildren"
    },
  }
}