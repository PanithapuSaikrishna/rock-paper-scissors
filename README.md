# How install and run the project ?
Clone the project from URl : https://github.com/PanithapuSaikrishna/rock-paper-scissors.
### `npm install`
Run npm install to install all the dependencies of the project.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# How to play the Game ?
1. The UI consists of two layouts. Left side pane is for Player vs Computer and Right side pane is for Computer vs Computer.
2. On the left pane, there are two sections. One section is Player and other one is for computer.
3. On player side there are three buttons(Rock, Paper and Scissors) which user can interact and select the desired option.
4. Once clicked the game will start and display the user selected option and computer will automatically show it's image.
5. If player/computer wins the point or if there is a tie then it will show the popover with appropriate message.
6. A point will be allocated to player by filling one out of three blue color circles at the top of user icon and simillarly for Computer.
7. If player/computer reaches 3 points then game is over and a popup will be displayed with appropriate message.
8. For computer vs computer option, the game is almost similar to player vs computer but the only difference is it consists of only one button which is play. Upon clicking the button, code will automatically allocate point to computer one or computer two.
9. There is Restart Game button, on aither sides of layouts, which will start the game from beginning at any point of time.  

# How to build and other scripts ?

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

