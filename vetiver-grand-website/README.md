# Vetiver Grand - Luxury Hotel Website

A fully responsive, single-page luxury hotel website built with HTML, CSS, and JavaScript featuring a modern purple theme (#420264) and smooth animations.

## 🚀 Quick Start Guide

### Prerequisites
- **Web Browser** (Chrome, Firefox, Safari, Edge)
- **Python 3.x** (for local server) - [Download Python](https://www.python.org/downloads/)
- **Text Editor** (VS Code, Sublime Text, Atom, etc.)

### 📁 Project Structure
```
vetiver-grand-website/
├── index.html              # Main website file
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   └── script.js          # Interactive functionality
├── assets/
│   ├── images/            # Hotel images and logos
│   └── icons/             # SVG icons
├── send_email.php         # Contact form backend
└── README.md              # This file
```

## 🌐 How to Run the Website

### Method 1: Python HTTP Server (Recommended)

1. **Open Terminal/Command Prompt**
   - **Windows**: Press `Win + R`, type `cmd`, press Enter
   - **Mac**: Press `Cmd + Space`, type `Terminal`, press Enter
   - **Linux**: Press `Ctrl + Alt + T`

2. **Navigate to Project Directory**
   ```bash
   cd "D:\codexxx_backup\vetiver grand\vetiver-grand-website"
   ```

3. **Start Local Server**
   ```bash
   python -m http.server 8000
   ```

4. **Open in Browser**
   - Go to: `http://localhost:8000`
   - Click on `index.html` to view the website

### Method 2: Direct File Opening (Quick Test)

1. **Navigate to Project Folder**
   - Go to: `D:\codexxx_backup\vetiver grand\vetiver-grand-website`

2. **Double-click `index.html`**
   - The website will open in your default browser
   - ⚠️ **Note**: Contact form won't work with this method

### Method 3: VS Code Live Server (If using VS Code)

1. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Install the extension

2. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Website opens automatically in browser

## 🔧 Development Setup

### For Team Collaboration

1. **Clone/Download Project**
   ```bash
   git clone [repository-url]
   cd vetiver-grand-website
   ```

2. **Start Development Server**
   ```bash
   python -m http.server 8000
   ```

3. **Make Changes**
   - Edit files in your preferred text editor
   - Refresh browser to see changes
   - Server runs continuously until stopped

4. **Stop Server**
   - Press `Ctrl + C` in terminal to stop

## 📱 Testing the Website

### Desktop Testing
- **URL**: `http://localhost:8000/index.html`
- **Test all sections**: Scroll through each section
- **Test interactions**: Click buttons, tabs, gallery images
- **Test contact form**: Fill out and submit (requires PHP setup)

### Mobile Testing
1. **Open Developer Tools**: Press `F12`
2. **Toggle Device Toolbar**: Click mobile icon
3. **Select Device**: Choose iPhone, Android, etc.
4. **Test Responsiveness**: Check all sections on mobile

### Browser Compatibility
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🎨 Customization Guide

### Changing Colors
Edit `css/style.css`:
```css
/* Primary Theme Color */
.btn-primary {
    background: linear-gradient(135deg, #420264, #5a0388);
}
```

### Adding Content
- **Text**: Edit `index.html`
- **Images**: Replace files in `assets/images/`
- **Styling**: Modify `css/style.css`

### Contact Form Setup
Edit `send_email.php`:
```php
$config = [
    'recipient_email' => 'your-email@vetivergrand.com',
    'from_email' => 'noreply@vetivergrand.com',
    'from_name' => 'Vetiver Grand Website'
];
```

## 🐛 Troubleshooting

### Common Issues

**Server won't start:**
- Check if Python is installed: `python --version`
- Try different port: `python -m http.server 3000`

**Website looks broken:**
- Check browser console for errors (F12)
- Ensure all files are in correct folders
- Clear browser cache (Ctrl+F5)

**Contact form not working:**
- Requires PHP server (XAMPP, WAMP, or live server)
- Check `send_email.php` configuration

**Images not loading:**
- Verify image files exist in `assets/images/`
- Check file paths in HTML

## 📞 Support

### For Team Members
- **Code Issues**: Check browser console (F12)
- **Styling Problems**: Inspect elements in browser
- **Functionality**: Test all interactive elements

### File Locations
- **Main Website**: `index.html`
- **Styles**: `css/style.css`
- **JavaScript**: `js/script.js`
- **Contact Form**: `send_email.php`
- **Images**: `assets/images/`
- **Icons**: `assets/icons/`

## 🚀 Deployment Ready

The website is ready for deployment to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any web hosting service**

---

**Happy Coding! 🎉**

*Vetiver Grand - Where Celebrations Become Memories*