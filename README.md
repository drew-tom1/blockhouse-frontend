This project was created for the Blockhouse Online Assessment

My objective was to create a Next.js application with Django API to return data.

I ran into trouble with CORS settings. None of the settings seemed to work correctly but other than that, it was a relatively smooth development process.

The Django backend returns the exact same data that is given on the OA posting. It is then processed through its particular charting API handle and visualized with Recharts on the frontend. The frontend itself is a minimalistic representation with only the groups but it is clean and not aesthetically poor.

Libraries:
- Recharts
- axios

** USED TYPESCRIPT **

Approach and Thought Process:

I had a little experience working with data visualization on the frontend. I created handling components to process the data taken from the API endpoints. I separated each of them to maintain good software practices and reduce the complexity. It is very easy to differentiate what is used where because of the individual components.

Connecting the backend took a while because none of the CORS settings seemed to stick despite modifying the settings file to explicitly allow all origins. I ran through all the documentation multiple times but putting down the exact origins seemed to work well for me.

This project does not require docker. It ran on PNPM but it should work with NPM just fine. Install all dependencies with ```npm install``` or ```yarn add``` or the respective command for the package manager being used at the time.

run ```pnpm dev``` to open the development environment.