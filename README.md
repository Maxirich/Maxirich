# Bella Hair Salon Appointment Application

A comprehensive web application for managing hair salon appointments with a modern, professional interface.

## Features

### For Customers
- 🎨 **Service Catalog**: Browse available hair services with prices and durations
- 📅 **Easy Booking**: Intuitive appointment booking system
- ✅ **Real-time Availability**: See available time slots and avoid double bookings
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 📧 **Booking Confirmation**: Instant confirmation with appointment details

### For Salon Staff
- 📊 **Admin Dashboard**: Complete overview of salon operations
- 📈 **Analytics**: Track appointments, revenue, and customer trends
- 📅 **Calendar View**: Visual calendar for better schedule management
- ✏️ **Appointment Management**: Update status, cancel, or delete appointments
- 🔍 **Advanced Filtering**: Search and filter appointments by date, status, or customer

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Node.js with Express.js
- **Data Storage**: JSON files (simple and portable)
- **Styling**: Custom CSS with modern gradients and animations
- **Typography**: Google Fonts (Playfair Display & Montserrat)

## Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- npm (comes with Node.js)

### Installation

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd hair-salon-appointment-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   - Customer Interface: `http://localhost:3000`
   - Admin Dashboard: `http://localhost:3000/admin`

## Usage

### Customer Booking Flow
1. Browse services on the main page
2. Click "Book Appointment" or select a service
3. Choose desired services from the checklist
4. Fill in personal information
5. Select date and available time slot
6. Add any special notes
7. Confirm booking

### Admin Management
1. Access the admin dashboard at `/admin`
2. View overview with key statistics
3. Manage appointments from the appointments tab
4. Use calendar view for schedule planning
5. Filter and search appointments as needed

## Services Included

The application comes pre-configured with common salon services:
- **Haircuts**: Men's, Women's, Children's, Beard Trim
- **Color Services**: Full Color, Highlights, Balayage, Root Touch-up
- **Treatments**: Deep Conditioning, Hair Treatment, Scalp Treatment
- **Styling**: Blowout, Updo, Wedding Hairstyle

## Customization

### Adding New Services
Services are stored in `data/services.json`. You can modify this file to:
- Add new services
- Update prices
- Change durations
- Modify categories

### Styling
The application uses custom CSS located in `public/styles.css`. Key areas to customize:
- Color scheme (currently purple gradient theme)
- Typography
- Layout and spacing
- Responsive breakpoints

### Business Hours
Default operating hours are:
- Monday-Friday: 9:00 AM - 7:00 PM
- Saturday: 8:00 AM - 6:00 PM  
- Sunday: 10:00 AM - 4:00 PM

These can be modified in the contact section of `public/index.html`.

## File Structure

```
hair-salon-appointment-app/
├── server.js              # Express server and API routes
├── package.json           # Dependencies and scripts
├── public/
│   ├── index.html         # Customer-facing interface
│   ├── admin.html         # Admin dashboard
│   ├── styles.css         # Application styles
│   └── script.js          # Client-side JavaScript
├── data/                  # Data storage (created on first run)
│   ├── appointments.json  # Appointment data
│   └── services.json      # Service catalog
└── README.md             # This file
```

## API Endpoints

- `GET /api/services` - Retrieve all services
- `GET /api/appointments` - Retrieve all appointments
- `POST /api/appointments` - Create new appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Delete appointment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

🌟 **Perfect for hair salons, barbershops, and beauty professionals looking to streamline their appointment booking process!**