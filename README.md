
# ReminderApp | React |  Node | MySQL


![Screenshot 2023-08-30 233855](https://github.com/AlineSilv/Appreminder/assets/86479510/53ac7fbe-e9e3-45f2-89f1-f73b8b020d4b)


## Functionalities

  + Create in the database
  + Read in the database
  + Update in the database
  + Delete in the database
  + Click on reminder to edit and delete
  
## Instructions to Configurate the App

+ Made a download
+  Open the App in a Editor
+  Make sure if you have node installed
+  Make sure if you have MySQL Server installed and Configure your user settings.
+  Make sure if you have MySQL Workbanch installed and enter in your user, accordding specifities.
+  Import the correct Table localized at the end of this repository.
+  Certified the configurations on db.js file confirm with your MySQL configurations.
+  Started to add the correct libs for the repository following the instructions bellow.

## Instructions to Execute the App

+ On the api directory terminal execute -> node
  1. npm install --global yarn
  2. npm init -y
  3. yarn add express nodemon mysql cors

  May you have some restrictions in your computer, specially if you're in windows SO, so you will need to change the restrictions like: "Set-ExecutionPolicy Bypass -Scope Process" and you can comeback later with : "Set-ExecutionPolicy Restricted -Scope Process" restoring your system as restrict again!

  If this does not work you can search for strict-ssl configurations to solve some yarn errors.

  2. on powershell terminal execute -> setExecutionPolicy Unrestricted
  3. yarn config set ``strict-ssl`` false -g


  + On the frontend directory terminal execute -> npx create-react-app .
    1.  npm install --global yarn
    2. yarn add styled components axios react-icons react-toastify
    3. npm install

  + Let`s open two terminals to execute the api and the frontend preview

  execute -> yarn start  or npm start

  on frontend directory and api directory
