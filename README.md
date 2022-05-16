Understanding Document of Guest Book App
This document is designed for understanding the whole flow and environment to run the Guest Book app.

I have added all the flow and environment related details in a separate document named “Understanding Document of Guest Book App” . its already saved in doc format in same repo so please refer it in case of any format related issue   
Environment tools and project setup 
Windows10
Java 8 or above
STS
Angular 8 (Node  12.13.1,Npm 6.13.4)
MySql 8.0.18
Visual studio code
Maven
git

1.  Need to create a DB (guestbook) in mysql on 3306 port 
2. All the tables will be created  automatically once the app will start but in case not created   table user with below specific column



3. create table user_entries with below mention column 




4. import the java project GuestBookApp as a maven project  in STS from git path or you can clone it from below mention path

https://github.com/gopalkchaturvedi/GuestBookApp.git

5. import the Angular source code from 
https://github.com/gopalkchaturvedi/starter-app.git

Flow of the  Project
Developer can run this project through two way
1. By STS only (backend & fronend)
2. By STS (backend) and Visual Studio Code(frontend)

1. By STS only (backend & frontend)
Need to confirm first the static folder should be downloaded properly and be there in proper place 


If yes then only we can run through this way if static folder not downloaded then other way we have to use to run this project
We can run it in STS using below step right click on GuestBookAppApplication and click on run as java application

If run successfully then use the mention url (http://localhost:8080) to check the application


2. By STS (backend) and Visual Studio Code(frontend)
Need to ensure both backend and frontend code have been checked out from git
To run backend, we have to follow previously mention step 
To run frontend separately have to open the checked-out folder in visual studio code by  open folder option in file menu
Run ng serve 
Or NPM start

If run proerly without any issue use the URL (http://localhost:4200)





Flow of Application

Step 1:
Type the url http://localhost:8080/ belw mention screen will display



If user laready created in DB then enter the user name and password then click on login button it will redired to view entries page.

Click on Register as new user if any user is not reigistered or want to add more user





In register user page enter all the required details and click on Register as new user button it automatically create the session aor move to viewEntrypagge



In View entry page
All the entered entry will display and other functionality are mention here for adding/updating/deleting new entries


Post click on add new entry user can fill the new entry either as text or image
For Text 

 For image 



Entry will be save in DB post click on add entries button and it forward to view entries page automatically


user can Approve /Edit /Delete entries as per the option mention in vieEntries page


As per the requirement all the test case are created and running
Logs are maintained using proper Logger library.

