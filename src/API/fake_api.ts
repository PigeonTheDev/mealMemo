import { User } from "../Models/User";
import { UserWithPass } from "../Models/UserWithPass";

const users: UserWithPass[] = [
  { username: "feyza", email: "fz@gmail.com", password: "1234" },
  { username: "göksu", email: "fz@gmail.com", password: "1234" },
  { username: "ulaş", email: "fz@gmail.com", password: "1234" },
  { username: "celal", email: "fz@gmail.com", password: "1234" },
  { username: "can", email: "fz@gmail.com", password: "1234" },
  { username: "berkay", email: "fz@gmail.com", password: "1234" },
];

const sleep = async (milliseconds: number): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(() => resolve(true), milliseconds));
};

export const registerUser = async (newUser: UserWithPass): Promise<User> => {
  await sleep(2000);

  const existingUser = users.find((user) => user.username === newUser.username);

  if (existingUser) {
    return Promise.reject("User already exists");
  }

  users.push(newUser);
  return Promise.resolve({ username: newUser.username, email: newUser.email });
};

export const loginUser = async (credentials: UserWithPass): Promise<User> => {
  await sleep(2000);
  console.log(credentials);

  const user = users.find((u) => u.username === credentials.username && u.password === credentials.password);

  if (user) {
    return Promise.resolve({ username: user.username, email: user.email });
  } else {
    return Promise.reject("Invalid username or password");
  }
};
