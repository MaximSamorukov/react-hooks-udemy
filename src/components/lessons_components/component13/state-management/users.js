import { v4 as uuidv4 } from 'uuid';

const users = [
  {
    id: uuidv4(),
    name: 'Kitty',
    tel: '011-12-14-5698',
  },
  {
    id: uuidv4(),
    name: 'Pitty',
    tel: '011-13-15-5698',
  },
  {
    id: uuidv4(),
    name: 'Fitty',
    tel: '011-14-16-5698',
  },
  {
    id: uuidv4(),
    name: 'Mitty',
    tel: '011-15-17-5698',
  },
];

const initialSelectedState = {
  id: null,
}

export { users, initialSelectedState };

