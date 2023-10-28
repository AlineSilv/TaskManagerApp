
# ReminderApp | React |  Node | MySQL

![taskmanagerapp](https://github.com/AlineSilv/TaskManagerApp/assets/86479510/87b9bf03-50f7-4a85-bc7d-514329b0e9e9)

## Functionalities Resumed 

  + Create in the database
  + Read in the database
  + Update in the database
  + Delete in the database
  + Click on  a reminder to edit and delete
  + Agrupment based on date registers!

  (- See more about at the end of the file... )
  
## Ambient Used :

+ NODEJS
+ MySQL :  Server/WOrkbench   OR   Docker/DBeaver. --> ( Import the correct Table localized at the end of this repository.)


## Technologies That Are Used :
+ React
+ Express
+ Nodemon
+ Styled Components
+ Axios
+ Cors
+ React Icons
+ REact Toastify


## Instructions to Execute the App

+ On the api directory terminal execute -> node
  1. npm install 
  2. npm start


  + On the frontend directory terminal execute -> 
    1.  npm install 
    2. npm start

  + Let`s open two terminals to execute the api and the frontend preview

  execute -> yarn start  or npm start

  on frontend directory and api directory



  ## HOW DO THIS WORK ?

  ## When using the system:

- It is possible to add a new reminder, entering the name and date of the reminder.
  - When you click on "register," the fields are validated following the rules:
    - All fields must be filled in.
    - The "Date" field must be filled in with a valid date, and this date must be in the correct format indicated by the placeholder. If the field values are valid, the new reminder should be displayed in the section below.

- It should be possible to delete a previously added reminder by clicking on the trash can icon.

- It should be possible to edit a previously added reminder by clicking the edit icon.

- When adding a new reminder, if its date already exists, it appears within the list for that day; if not, a new list for the new day should be displayed containing that record.

- The days in the reminder list are displayed in chronological order.

