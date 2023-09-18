# Meet-Me

A video calling application built in your web browser
Implemented using WebRTC, I used Simple-Peer JS which is a wrap around WebRTC and simplifies things. 
Socket IO is used for synchronization and handshakes between the users.\
Front end is done using ReactJS. Works on both computers and mobiles (full responsive design)

## Features

- Call your friends by getting their unique id.
- Call random online users.
- Cross platform, supported on mobile devices.

## Screenshots

### Home page 
![App Screenshot](screenshots/ss1.png)

### Call Request is sent to other user.
![App Screenshot](screenshots/ss3.png)

### Running locally on a device with 2 tabs open, one calling the other.
![App Screenshot](screenshots/ss4.png)

### Mute/Unmute button is there to mute/unmute yourself.
![App Screenshot](screenshots/ss5.png)

### Send Call request to online users.
![App Screenshot](screenshots/ss6.png)

### Mobile responsive view of website
![App Screenshot](screenshots/ss7.png)

### Two videos are showing up in vertical way, with button to mute
![App Screenshot](screenshots/ss8.png)

### Hamberger Menu with the navbar options.
![App Screenshot](screenshots/ss10.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Sakshijain12/meet-me.git
```

Go to the project directory

```bash
  cd meet-me
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Go to the client directory

```bash
  cd client
```

Start the front-end

```bash
  npm run start
```

Open http://localhost:3000 to access the website
