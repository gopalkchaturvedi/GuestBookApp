Understanding Document of Guest Book App

This document is designed for understanding the whole flow and environment to run the Guest Book app.

in case of any format related issue in this (ReadeME.md) file please refer “Understanding Document of Guest Book App.docx”, its already saved in doc format in same repo.

Environment tools and project setup 

Windows10
Java 8 or above
STS
Angular 8 (Node 12.13.1, NPM 6.13.4)
MySQL 8.0.18
Visual studio code
Maven
Git


    



1. Need to create a DB (guestbook) in my SQL on 3306 ports.


    password: Password1234
    url: jdbc:mysql://localhost:3306/guestbookdb 
    username: root

if my sql (DB) credential are different then user can change dbname,username and password in application.yml file using mentioned path “GuestBookApp\src\main\resources” .



2. All the tables will be created automatically once the app will start but in case not, please follow the step, 
Need to Create table user and create table user_entries (column details mention in Understanding Document of Guest Book App.docx)




4. import the java project GuestBookApp as a maven project in STS from git path or you can clone it from below mention path

https://github.com/gopalkchaturvedi/GuestBookApp.git

5. import the Angular source code from 
https://github.com/gopalkchaturvedi/starter-app.git

Flow of the Project
Developer can run this project through two way
1. By STS only (backend & frontend)
2. By STS (backend) and Visual Studio Code(frontend)

1. By STS only (backend & frontend)

Need to confirm first the static folder should be downloaded properly and be there in (GuestBookApp\src\main\resources\static).


If yes, then only we can run through this way , if static folder not downloaded then using second way (By STS (backend) and Visual Studio Code(frontend)
) we can run this project.

We can run it in STS using right click on 
GuestBookAppApplication and click on run as java application.


If run successfully then use the mention url (http://localhost:8080) to check the application


2. By STS (backend) and Visual Studio Code(frontend)


Need to ensure both backend and frontend code have been checked out from git.

To run backend, we must follow previously mention. 

To run frontend separately must open the checked-out folder in visual studio code by open folder option in file menu.

Run ng serve command in terminal.
Or NPM start command in terminal.


If run properly without any issue use the URL (http://localhost:4200)





Flow of Application is mentioned in “Understanding Document of Guest Book App.docx”, uploaded along with project

