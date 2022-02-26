type Coordinates = {
  latitude: string; longitude: string;
}

type Street = {
  number: number;
  name: string;
}

type Timezone = {
  offset: string; 
  description: string;
}

type Location = {
    city: string;
    coordinates: Coordinates;
    country: string;
    postcode: string;
    state: string;
    street: Street
    timezone: Timezone;
}

type Login = {
  uuid: string; 
  username: string; 
  password: string; 
  salt: string; 
  md5: string;
  sha1: string;
  sha256: string;
}

export type Name = string;

export type User = {
cell: string
dob: {
  date: string; 
  age: number;
}
email: string;
gender: string;
id: {
  name: string; 
  value: string;
}
location: Location;
login: Login;
name: {
  title: string;
  first: string; 
  last: string;
}
nat: string;
phone: string;
picture: {
  large: string;
   medium: string;
   thumbnail: string;
  }
registered: {
  date: string; 
  age: number;
}
}