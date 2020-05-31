import axios from 'axios';

export const userLogin = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/users/login`, body)
      .then(({ data }) => resolve(data))
      .catch(reject);
  });
};

export const userSignup = (body) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/users/signup`, body)
      .then(({ data }) => resolve(data))
      .catch(reject);
  });
};

export const userProfile = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/users/profile`)
      .then(({ data }) => resolve(data))
      .catch(reject);
  });
};
