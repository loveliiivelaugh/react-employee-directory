export const sort = {

  sortByFirst: (array) => { 
    array.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      return 0;
    });
  },

  sortByLast: (array) => { 
    array.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      }
      return 0;
    });
  },

  sortByAge: (array) => { 
    array.sort((a, b) => {
      if (a.dob.age < b.dob.age) {
        return -1;
      }
      return 0;
    });
  },

  sortByEmail: (array) => { 
    array.sort((a, b) => {
      if (a.email < b.email) {
        return -1;
      }
      return 0;
    });
  },

  sortByPhone: (array) => { 
    array.sort((a, b) => {
      if (a.phone < b.phone) {
        return -1;
      }
      return 0;
    });
  },

  sortByCell: (array) => { 
    array.sort((a, b) => {
      if (a.cell < b.cell) {
        return -1;
      }
      return 0;
    });
  },

  sortByStreet: (array) => { 
    array.sort((a, b) => {
      if (a.location.street.name < b.location.street.name) {
        return -1;
      }
      return 0;
    });
  },

  sortByCity: (array) => { 
    array.sort((a, b) => {
      if (a.location.city < b.location.city) {
        return -1;
      }
      return 0;
    });
  },

  sortByState: (array) => { 
    array.sort((a, b) => {
      if (a.location.state < b.location.state) {
        return -1;
      }
      return 0;
    });
  },

  sortByCountry: (array) => { 
    array.sort((a, b) => {
      if (a.location.country < b.location.country) {
        return -1;
      }
      return 0;
    });
  },

  sortByPostal: (array) => { 
    array.sort((a, b) => {
      if (a.location.postcode < b.location.postcode) {
        return -1;
      }
      return 0;
    });
  },

  sortByUsername: (array) => { 
    array.sort((a, b) => {
      if (a.login.username < b.login.username) {
        return -1;
      }
      return 0;
    });
  },

}
