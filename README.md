# Amaraith Reserve - Luxury Villa Rentals in Sint Maarten

![Amaraith Reserve](https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80)

## Overview

Amaraith Reserve is a luxury villa rental website showcasing exclusive properties in Sint Maarten. The website features:

- **Modern, Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Option Selector**: Filter villas by style, experience focus, and group size
- **Beautiful Visual Elements**: Hero video section, villa cards, and integrated map
- **Social Media Integration**: Instagram feed display
- **Smooth Animations**: Elegant transitions and fade-in effects

## Project Structure

```
amaraith-reserve/
├── index.html          # Main HTML file
├── css/
│   └── styles.css     # All CSS styles
├── js/
│   └── main.js        # JavaScript functionality
└── README.md          # This file
```

## Features

### 1. Header Navigation
- Sticky navigation bar
- Links to sections: The Reserve, Villas, Experiences, Events
- "Try Options" button with hover effects

### 2. Hero Section
- Full-screen video background with fallback image
- Floating option selector overlay
- Real-time filtering capabilities

### 3. Villa Showcase
- 4 luxury villa cards with:
  - High-quality images with lazy loading
  - Villa descriptions and types
  - "View Gallery" and "Check Availability" buttons
  - Hover animations and transitions

### 4. Footer Section
- Brand information and contact details
- Embedded Google Map
- Social media feed display

### 5. Interactive Elements
- Option selector filters
- Smooth scrolling navigation
- Hover effects on all interactive elements
- Responsive grid layouts

## Color Scheme

- **Primary Gold**: #CBA266 (Muted Gold - Logo color)
- **Teal Accent**: #00778C
- **Dark Background**: #000, #111
- **Light Text**: #fff, #ddd

## Typography

- **Headlines**: Playfair Display (serif)
- **Body Text**: Open Sans (sans-serif)

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## Getting Started

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/AmaraithReserve/amaraith-reserve.git
cd amaraith-reserve
```

2. Open `index.html` in your browser or use a local server:
```bash
python -m http.server 8000
# or with Node.js
npx http-server
```

3. Visit `http://localhost:8000` in your browser

### GitHub Pages Deployment

The website is configured for automatic deployment via GitHub Pages:

1. Go to repository **Settings** → **Pages**
2. Select `main` branch as source
3. Your site will be live at `https://AmaraithReserve.github.io/amaraith-reserve`

## Customization

### Update Contact Information
Edit the footer contact details in `index.html`:
```html
<p>+1 (387) 336-3300</p>
<a href="mailto:info@amaraith.com">www.amaraithreserve.com</a>
```

### Replace Images
Update the image URLs in villa cards:
```html
<img src="your-image-url" alt="Villa Name">
```

### Modify Colors
Edit CSS variables in `css/styles.css`:
```css
color: #CBA266; /* Gold */
color: #00778C; /* Teal */
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Lazy loading for images
- CSS animations for smooth transitions
- Optimized video format with fallback
- Minified CSS and JS
- Responsive images

## Future Enhancements

- [ ] Booking system integration
- [ ] Advanced search and filter
- [ ] User accounts and favorites
- [ ] Guest reviews and ratings
- [ ] Multi-language support
- [ ] Blog section
- [ ] Virtual tours
- [ ] Payment gateway integration

## License

Copyright © 2024 Amaraith Reserve. All rights reserved.

## Contact

- **Phone**: +1 (387) 336-3300
- **Email**: info@amaraith.com
- **Website**: www.amaraithreserve.com

---

**Amaraith Reserve** - Experience Ultimate Luxury in Sint Maarten ✨