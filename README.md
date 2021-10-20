# CostCalculator
## Cloning the repository
> Run `git clone https://github.com/S-MD-Fouzan/CostCalculator.git` to clone the repository in your local machine.
## Configuring Backend
> Run `cd CostCalculator\backend` to navigate to the backend folder.<br/>
> Run `npm install` to install the required dependencies.<br/>
> Open the file named database in a folder called config and then<br/> 
* Add your database host in attribute "host". For example, type "localhost" if in case your database is running locally.<br/>
* Remove the attribute "srv" incase if you are running the database locally, otherwise set it to true.<br/>
* Add database name, username and password to the respective attributes as you need.
> Run `npm run develop` to run the strapi server.<br/>
> Run `http://localhost:1337/admin` in your browser to open the admin panel and you can add data accordingly by navigating to "Sections" collection type.
## Configuring Frontend
> Run `cd CostCalculator\frontend` to navigate to the frontend folder.<br/>
> Run `npm install` to install the required dependencies.<br/>
> Run `ng serve` to run the application and before running it make sure that backend is functioning well.
