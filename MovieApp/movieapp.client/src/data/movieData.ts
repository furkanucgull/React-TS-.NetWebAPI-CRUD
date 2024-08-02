import { MovieDto } from '../models/movieDto';

export const movieData: MovieDto[] = [
  {
    id: '1',
    title: 'Inception',
    category: 'Science Fiction',
    description:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    createDate: '2010-07-16',
  },
  {
    id: '2',
    title: 'The Matrix',
    category: 'Action',
    description:
      'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
    createDate: '1999-03-31',
  },
  {
    id: '3',
    title: 'Interstellar',
    category: 'Adventure',
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    createDate: '2014-11-07',
  },
  {
    id: '4',
    title: 'The Godfather',
    category: 'Crime',
    description:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    createDate: '1972-03-24',
  },
  {
    id: '5',
    title: 'The Dark Knight',
    category: 'Action',
    description:
      'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    createDate: '2008-07-18',
  },
];
