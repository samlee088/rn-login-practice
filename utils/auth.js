import axios from "axios";

const API_KEY = "AIzaSyAK2Wc4odWmHmER_NAdfrePwbt4VKgOl-0";

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  console.log(response.data);

  return token;
}

export async function createUser(email, password) {
  const token = await authenticate("signUp", email, password);
}

export function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
