import delay from './delay';

const people = [
  {id: 1, name: 'Oliver Sosa', age: 32},
  {id: 2, name: 'Anisbert Suarez', age: 32},
  {id: 3, name: 'Olver Sosa', age: 32},
  {id: 4, name: 'Olga Lidia Cano', age: 32}
];

class PeopleApi {
  static getAllPeople() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], people));
      }, delay);
    });
  }
}

export default PeopleApi;
