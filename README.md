
# Foodlet
![alt text](https://github.com/PhilEZad/UnnamedFoodApp/blob/development/frontend/Foodlet/src/assets/logo.png)

Foodlet is a meal-planning app build with Angular 15 and Firebase. It is the final product of the Fullstack and Dev-Ops exam at EASV, which on the 4th semester encompasses elective courses.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```


To run the project locally, firebase emulators are required. To setup, install and configure firebase-tools to have the Firebase CLI at hand.

```bash
  npm i -g firebase-tools
```

After which, initialize firebase and the emulators to install them. The primary emulators needed are Firestore, FireAuth and Cloud Functions.

```bash
  firebase init
```

```bash
  firebase init emulators
```

To start the emulators run:
```bash
  firebase emulators:start
```


And serve the Angular application, assuming you already have the Angular CLI installed and configured
```bash
  ng serve
```




## Short Description

Figuring out dinner can be a rather complicated process, as you both need to find something new and exciting while also having it fit your dietary needs. The application allows the user to generate a meal plan for the week, which fits user specified goals (e.g. high protein, low carb, etc.), made from the users own recipes, of which the can input in the recipe book.
## Data Set
The firestore database for the project was proloaded with the [Nutritional Facts for most common foods](https://www.kaggle.com/datasets/niharika41298/nutrition-details-for-most-common-foods) from Kaggle. This was done using the cvsToFb tool located in the tools directory.

Users are able to input their own items with common nutrition fields, which are available globally to other users as a community database of foods.
## Authors

- [@MBarth98](https://github.com/MBarth98)
- [@Sandbxk](https://www.github.com/Sandbxk)
- [PhilEZad](https://github.com/PhilEZad)

