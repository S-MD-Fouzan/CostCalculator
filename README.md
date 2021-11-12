# CostCalculator
## General
The main goal of our application is to estimate the cost of a digital solution based on features that a user selects.<br/>
This app is built using Angular for frontend and strapi (Headless CMS) for backend with MongoDB as database.<br/>
The questions that the user must answer are divided into five different sections.
* General Questions.
* Strategy.
* UX/UI.
* Development.
* Product Growth. 

To add more questions for the users to answer, existing sections can be modified to add more questions or an entirely new section can be added via Strapi, the frontend will adapt to any number of sections and questions.<br/>
The questions that were asked in each section cover digital aspects essential to estimate that particular section.
## Structure of Data
> Collections in strapi:
* Section
  * name of type string to specify section name.
  * stepLabel of type string is the short form of section name.
  * icon of type string for interpolating it in mat-icon.
  * content of type string for describing about the section.
  * questions of type repeatable component "Questions".
* Submission
  * email of type string for storing user email id.
  * lowerEstimate of type number is calculated at backend contains lower value of the expected price range.
  * upperEstimate of type number is calculated at backend contains higher value of the expected price range.
  * questions of type repeatable component "Questions".
> Components in strapi:
* Questions
  * q_text of type string which specifies the text of the question.
  * multiple_allowed of type boolean to specify whether the multiple options are allowed for selection or not.
  * options of type repeatable component "Options".
* Options
  * text of type string.
  * min_cost of type number.
  * max_cost of type number. 
## Cloning the repository
> Run `git clone https://github.com/S-MD-Fouzan/CostCalculator.git` to clone the repository in your local machine.
## Configuring Backend
> Run `cd CostCalculator\backend` to navigate to the backend folder.<br/>
> Run `npm install` to install the required dependencies.<br/>

We are using `Nodemailer` provider for sending E-mails and the application is configured with `Gmail` host.<br/>
If you want to change the host, you should open `backend\config\plugins.js` file and update the host particular to your E-mail.
> Create a `.env` file with your E-mail credentials and template for the file is as shown below.<br/>
* SMTP_USERNAME = `xyz@gmail.com`
* SMTP_PASSWORD = `xyz.lmn.abc`
> Open the file `backend\config\plugins.js` and update `defaultFrom` and `defaultReplyTo` fields corresponding to your E-mail.<br/>
> Open the file `backend\api\submission\controllers\submission.js` and update `from` and `replyTo` fields here as well.<br/>

You need to enable access for less secure apps in the `https://myaccount.google.com/security` page of the account you are using with nodemailer.<br/>
If in case it is not working, You also need to disable Captcha temporarily which you can do it in the following link `https://accounts.google.com/b/0/displayunlockcaptcha`.  
### Database Configuration

The Strapi backend has already been configured to use a pre-existing MongoDB Cluster which has already been populated with questions and sections. You can run the Strapi server after cloning (and after npm install) and the data should be available already. 
In case you would like to change the database, or use a local instance you can do the following :<br/>
> Open the file `backend/config/database.js`<br/> 
* Add your database host in attribute "host". For example, type "localhost" if in case your database is running locally.<br/>
* Remove the attribute "srv" incase if you are running the database locally, otherwise set it to true.<br/>
* Add database name, username and password to the respective attributes as you need.

You can log into admin panel with the following admin credentials.<br/>
* Email ID : `testing@email.com`
* Password : `Testing123`

Skip the below point if you didn't change the database.<br/>

Navigate to settings > under Users & Permissions Plugin, click on Roles > click on public > under Permissions, click select all checkbox for `Section` and `Submission` Collection types.
### Running the server
> Run `npm run develop` to run the strapi server.<br/>
> Run `http://localhost:1337/admin` in your browser to open the admin panel and if you have changed the database you can add data accordingly by navigating to `Sections` collection type.<br/>
## Configuring Frontend
> Run `cd CostCalculator\frontend` to navigate to the frontend folder.<br/>
> Run `npm install` to install the required dependencies.<br/>
> Run `ng serve` to run the application and before running it make sure that backend is functioning well.<br/>
 
If you need to modify the backend URL, you can edit it in `frontend\src\environments\environment.ts`.
