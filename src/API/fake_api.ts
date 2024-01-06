interface User {
  username: string;
  password: string;
}

const users: User[] = [
  { username: "feyza", password: "1234" },
  { username: "göksu", password: "1234" },
  { username: "ulaş", password: "1234" },
  { username: "celal", password: "1234" },
  { username: "can", password: "1234" },
  { username: "berkay", password: "1234" },
];

const sleep = async (milliseconds: number): Promise<boolean> => {
  return new Promise((resolve) => setTimeout(() => resolve(true), milliseconds));
};

export const registerUser = async (newUser: User): Promise<string> => {
  await sleep(1000);

  const existingUser = users.find((user) => user.username === newUser.username);

  if (existingUser) {
    return Promise.reject("User already exists");
  }

  users.push(newUser);
  return Promise.resolve("Registration successful");
};

export const loginUser = async (credentials: User): Promise<User> => {
  await sleep(1000);

  const user = users.find((u) => u.username === credentials.username && u.password === credentials.password);

  if (user) {
    return Promise.resolve(user);
  } else {
    return Promise.reject("Invalid username or password");
  }
};
