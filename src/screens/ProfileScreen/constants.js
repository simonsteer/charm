import Fuse from 'fuse.js'

export const INTERESTS_CATEGORIES = {
  music: [
    { interest: 'music' },
    { interest: 'classical music' },
    { interest: 'house music' },
    { interest: 'metal' },
    { interest: 'punk' },
    { interest: 'classic rock' },
    { interest: 'indie music' },
    { interest: 'edm' },
    { interest: 'r & b' },
    { interest: 'soul music' },
    { interest: 'funk' },
    { interest: 'disco' },
    { interest: 'experimental music' },
  ],
  art: [
    { interest: 'art' },
    { interest: 'art history' },
    { interest: 'design' },
    { interest: 'graphic design' },
    { interest: 'interior design' },
    { interest: 'architecture' },
    { interest: 'painting' },
    { interest: 'drawing' },
    { interest: 'sculpture' },
    { interest: 'pottery' },
    { interest: 'makeup' },
    { interest: 'drag' },
    { interest: 'fashion' },
    { interest: 'carpentry' },
    { interest: 'performance art' },
    { interest: 'poetry' },
    { interest: 'graphic novels' },
  ],
  science: [
    { interest: 'biology' },
    { interest: 'computer science' },
    { interest: 'engineering' },
    { interest: 'physics' },
  ],
  movies: [
    { interest: 'horror movies' },
    { interest: 'romantic comedies' },
    { interest: 'thrillers' },
    { interest: 'action movies' },
    { interest: 'dramas' },
    { interest: 'documentaries' },
    { interest: 'cult films' },
  ],
  sports: [
    { interest: 'health & fitness' },
    { interest: 'nutrition' },
    { interest: 'weight training' },
    { interest: 'cardio' },
    { interest: 'crossfit' },
    { interest: 'powerlifting' },
    { interest: 'bodybuilding' },
    { interest: 'tennis' },
    { interest: 'kayaking' },
    { interest: 'squash' },
    { interest: 'badminton' },
    { interest: 'ice skating' },
    { interest: 'rollerblading' },
    { interest: 'hockey' },
    { interest: 'lacrosse' },
    { interest: 'soccer' },
    { interest: 'football' },
    { interest: 'rowing' },
    { interest: 'basketball' },
    { interest: 'bicycling' },
    { interest: 'martial arts' },
    { interest: 'boxing' },
    { interest: 'yoga' },
    { interest: 'swimming' },
  ],
}

export const INTERESTS = [
  ...INTERESTS_CATEGORIES.art,
  ...INTERESTS_CATEGORIES.movies,
  ...INTERESTS_CATEGORIES.music,
  ...INTERESTS_CATEGORIES.science,
  ...INTERESTS_CATEGORIES.sports,
]

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 7,
  minMatchCharLength: 3,
  keys: ['interest'],
}

const fuse = new Fuse(INTERESTS, options)

export const findInterests = query => fuse.search(query)
