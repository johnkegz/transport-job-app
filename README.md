# Transportation jobs

## link to the hosted application
- The application is deployed on netlify
- [Transport job app link](https://wizardly-shannon-41990f.netlify.app)

## How to test and run the application

- Clone the application `git clone https://github.com/johnkegz/transport-job-app.git`
- Cd into the application folder and install pacakages using `yarn`
- Run the application using `yarn start`
- This will automatically open the browser or vist `http://localhost:3000/`

## About the application
- The application code is in mainly in four folders which are `containers`, `components`, `types`, and `api`.
- It is designed using Presentational and Container Components pattern which are `componets folder` and `containers folder` in the code. The reason for this is to separate concerns where logic is put in containers and displaying UI in components.
- `api folder` contains the call to the fetch api which fetches data to be displayed.
- `types folder` contains the differnet function types, and variable types.
- The application is developed using functional components which enables use of react hooks forexample useState and useEffect.
- React hooks make managing state change easy when the component renders and when state changes.
- Responsiveness is achieved using media queries in the css
- List of jobs are handled and displayed in the jobs.tsx file and job details in the jobDetails.tsx in the container folder.


## Technologies used
- React and typescript
## Jobs lists
![image](https://user-images.githubusercontent.com/29975767/130888405-69296142-66c8-4392-8c5d-b277e3502177.png)
## Details page
![image](https://user-images.githubusercontent.com/29975767/130888473-0cf4235d-57cd-4e50-9ced-ec140be703e1.png)

### To run using docker run 
- `docker run --publish 3000:3000 react`
