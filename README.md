# Business Hours Web Application

A Node.js web application that restricts access to business hours only (Monday-Friday, 9 AM - 5 PM). Built with Express.js and EJS templating engine.

## 📋 Features

- **Time-based Access Control**: Website only accessible during business hours
- **Custom Middleware**: Validates request timing before serving pages
- **Three Main Pages**: Home, Services, and Contact
- **Responsive Design**: Modern, mobile-friendly CSS styling
- **Dynamic Navigation**: Active page highlighting
- **Closed Page**: Informative message when accessing outside business hours

## 🚀 Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Template engine for dynamic HTML
- **CSS3**: Styling and responsive design

## 📁 Project Structure

```
business-hours-app/
├── server.js                 # Main server file
├── package.json              # Project dependencies
├── middleware/
│   └── workingHours.js      # Time validation middleware
├── views/
│   ├── home.ejs             # Home page template
│   ├── services.ejs         # Services page template
│   ├── contact.ejs          # Contact page template
│   └── closed.ejs           # Closed hours page template
└── public/
    └── styles.css           # Application styles
```

## ⚙️ Installation

1. **Clone or download the project**
   ```bash
   mkdir business-hours-app
   cd business-hours-app
   ```

2. **Initialize npm** (if not already done)
   ```bash
   npm init -y
   ```

3. **Install dependencies**
   ```bash
   npm install express ejs
   ```

4. **Create the folder structure**
   ```bash
   mkdir middleware views public
   ```

5. **Add all the files** as shown in the project structure

## 🏃 Running the Application

1. **Start the server**
   ```bash
   node server.js
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

3. **Expected output in terminal:**
   ```
   Server is running on http://localhost:3000
   Note: The site is only accessible Monday-Friday, 9 AM to 5 PM
   ```

## 🕐 Business Hours

The application is accessible:
- **Days**: Monday - Friday
- **Hours**: 9:00 AM - 5:00 PM
- **Outside these hours**: Users see a "closed" page

## 🧪 Testing

### Testing During Business Hours
Simply access the site Monday-Friday between 9 AM and 5 PM.

### Testing Outside Business Hours

**Option 1: Wait for actual off-hours**
Access the site on weekends or outside 9 AM - 5 PM.

**Option 2: Modify middleware temporarily**

In `middleware/workingHours.js`, add this at the beginning of the function:

```javascript
// TESTING: Force closed page
const now = new Date();
res.render('closed', {
    day: now.toLocaleDateString('en-US', { weekday: 'long' }),
    time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
});
return;
```

Or to bypass the check:

```javascript
// TESTING: Always allow access
next();
return;
```

**Remember to remove test code before production!**

## 📄 Pages Overview

### 1. Home Page (`/`)
- Welcome message
- Company introduction
- Business hours information
- Call-to-action to services

### 2. Services Page (`/services`)
- Six service cards with descriptions:
  - Consulting
  - Business Solutions
  - Digital Transformation
  - Analytics & Reporting
  - Technical Support
  - Growth Strategy

### 3. Contact Page (`/contact`)
- Contact form with fields:
  - Full Name
  - Email Address
  - Phone Number
  - Subject
  - Message
- Contact information display
- Business hours reminder

### 4. Closed Page (Automatic)
- Displays when accessed outside business hours
- Shows current day and time
- Lists business hours
- Contact information for inquiries

## 🎨 Customization

### Changing Business Hours

Edit `middleware/workingHours.js`:

```javascript
// Current: Monday-Friday, 9 AM - 5 PM
const isWeekday = day >= 1 && day <= 5;
const isWorkingHours = hour >= 9 && hour < 17;

// Example: Tuesday-Saturday, 10 AM - 6 PM
const isWeekday = day >= 2 && day <= 6;
const isWorkingHours = hour >= 10 && hour < 18;
```

### Modifying Styles

Edit `public/styles.css` to change:
- Colors (current: purple gradient theme)
- Fonts
- Layout
- Responsive breakpoints

### Adding New Pages

1. Create a new EJS file in `views/`
2. Add a route in `server.js`:
   ```javascript
   app.get('/newpage', (req, res) => {
       res.render('newpage', { currentPage: 'newpage' });
   });
   ```
3. Add navigation link in all EJS files

## 🔧 Middleware Explanation

The `workingHours.js` middleware:

1. **Gets current date/time**
2. **Checks day of week** (0=Sunday, 1=Monday, ..., 6=Saturday)
3. **Checks hour** (0-23 format)
4. **Validates conditions**:
   - Is it Monday-Friday? (day 1-5)
   - Is it between 9 AM-5 PM? (hour 9-16)
5. **Actions**:
   - ✅ Both conditions met → Allow access (`next()`)
   - ❌ Either condition fails → Show closed page

## 📝 Package.json Scripts

You can add these scripts to your `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Then run:
```bash
npm start          # Start server
npm run dev        # Start with auto-reload (requires nodemon)
```

To use nodemon:
```bash
npm install --save-dev nodemon
```

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is busy, change it in `server.js`:
```javascript
const PORT = 3001; // or any available port
```

### Pages Not Loading
- Check that all files are in correct folders
- Ensure `views/` contains all .ejs files
- Verify `public/styles.css` exists

### Middleware Not Working
- Check server console for errors
- Verify middleware is applied before routes
- Test with console.log() in middleware

### Styles Not Applying
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for 404 errors
- Verify CSS file path is `/styles.css`

## 📚 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [EJS Documentation](https://ejs.co/)
- [Node.js Documentation](https://nodejs.org/)
- [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a checkpoint project for learning Express.js, middleware, and templating engines.

---

**Happy Coding! 🎉**
