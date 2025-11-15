Here is a complete `README.md` file for your GitHub repository, based on the code you provided.

You can copy and paste the text below into a new file named `README.md` in your project's root directory.

-----

# My Personal Portfolio Website

This is a clean, responsive, single-page personal portfolio website for Nimsara Aluthgedara. It's designed to showcase skills, featured projects, and provide a contact method for visitors.

*(Feel free to replace the image link above with a screenshot of your actual website\!)*

## 🚀 Features

This portfolio is fully responsive and includes several interactive features:

  * **Dynamic Navbar:** The navigation bar is transparent at the top of the page and transitions to a solid background with dark text upon scrolling.
  * **Smooth Scrolling:** Clicking on navigation links (Home, About, Skills, etc.) scrolls the page smoothly to the corresponding section.
  * **Interactive Modals:** Uses **SweetAlert2** to provide a rich, interactive user experience:
      * A custom welcome popup when clicking the portfolio logo.
      * A "Thank you" confirmation modal upon successful contact form submission.
      * A "Rate my website" popup in the footer with "thumbs up/down" options.
  * **Hover Effects:** Project cards gently lift up on mouse-over to provide visual feedback.
  * **Contact Form:** A clean, functional contact form that resets after a successful submission.

## 🛠️ Technologies Used

This project is built using modern web technologies and relies on CDN links for its libraries, making it lightweight and easy to deploy.

  * **Frontend:**

      * HTML5
      * CSS3 (via `styles.css`)
      * JavaScript (ES6+)

  * **Frameworks & Libraries:**

      * **Bootstrap 5.3:** Used for the responsive grid system, components (navbar, cards, buttons), and icons (Bootstrap Icons).
      * **SweetAlert2:** For beautiful, custom-styled alert messages and modals.
      * **Font Awesome 5:** For icons used within the SweetAlert modals.

## 📂 Project Structure

```
.
├── index.html       # The main HTML file
├── script.js        # Custom JavaScript for all interactivity
├── styles.css       # Custom styles and overrides
├── images/          # Folder for all images (profile pic, project images, logo)
└── README.md        # This file
```

## Usage / Setup

This is a static website. No complex build process or local dependencies are required.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    ```

2.  **Navigate to the project folder:**

    ```bash
    cd your-repository-name
    ```

3.  **Run the website:**

      * Simply open the `index.html` file in your favorite web browser (like Chrome, Firefox, or Edge).
      * Alternatively, you can use a simple web server or a live-server extension (like the one in VS Code) to view the site.

> **Note:** An internet connection is required to load the fonts and libraries (Bootstrap, SweetAlert2) from their respective CDNs.
