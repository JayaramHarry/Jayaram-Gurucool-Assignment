# Multi-Step Form Project

This project is a multi-step form built using **React** and **Material-UI**. The form allows users to enter personal and address information in separate steps, review the information on a confirmation page, and submit the form. The form uses tabbed navigation, client-side validation, and local storage to persist form data. It is fully responsive and works well on mobile, tablet, and desktop screens.

## Features

- **Multi-step Form:** The form is divided into 3 steps: Personal Information, Address Information, and Confirmation.
- **Tabbed Navigation:** Users can navigate between steps using tabs.
- **Form Validation:** Each step validates its fields before allowing the user to proceed to the next step.
- **Error Handling:** Fields with invalid or missing data are highlighted, and appropriate error messages are displayed.
- **Local Storage:** The form data is saved in `localStorage`, so users can resume their progress if they refresh the page.
- **Responsive Design:** The form is designed to be mobile-first and adjusts seamlessly across devices.
- **Simulated Network Request:** The form submission is simulated using `setTimeout` to mimic an API call.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: A React component library that provides pre-built, responsive UI components.
- **localStorage**: To persist form data across page refreshes.
- **CSS (with Material-UI)**: For styling the components and ensuring responsiveness.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository:**
   https://github.com/JayaramHarry/Jayaram-Gurucool-Assignment.git
   cd multi-step-form
   

2. **Install Dependencies:**
   Make sure you have Node.js installed. Then, run the following command to install all the necessary dependencies:
   npm install
   

3. **Run the Development Server:**
   Once the dependencies are installed, you can run the app locally using:
   npm start
   

   The app will be available at `http://localhost:3000/`.

## Running the Project

1. **Step 1 (Personal Information):**
   - Enter your name, email, and phone number.
   - Fields are validated before moving to the next step (e.g., email must be a valid format).
   
2. **Step 2 (Address Information):**
   - Enter your address, city, state, and zip code.
   - The zip code must be exactly 5 digits.

3. **Step 3 (Confirmation):**
   - Review all the information you have entered.
   - If everything looks correct, click the "Submit" button.

4. **Submit:**
   - Upon submitting, a simulated network request (using `setTimeout`) will be triggered. A success message will be displayed after a short delay.

## Assumptions & Decisions

1. **Validation:**
   - I assumed that email validation should follow standard format checks (e.g., containing "@" and a valid domain).
   - Zip codes are assumed to be 5-digit US zip codes. Adjust this logic if you need support for other countries.
   - Phone numbers are not validated for format beyond ensuring they are present.

2. **UI/UX Decisions:**
   - The form uses tabbed navigation for a cleaner and more organized user experience.
   - Material-UI components were chosen for their out-of-the-box responsiveness and clean design.
   - Error messages and invalid inputs are visually highlighted to improve user interaction.

3. **Local Storage:**
   - The form data is saved in `localStorage` to persist the entered data. If a user refreshes the page, the form fields will be pre-filled with the saved data.

4. **Responsiveness:**
   - I ensured the form design is mobile-first. Media queries and Material-UI's responsive grid system were used to adjust the layout across different screen sizes.

5. **Simulated API Call:**
   - For form submission, a simulated API call is made using `setTimeout`. In a real-world application, this would be replaced with a real API call using `fetch` or `axios`.
