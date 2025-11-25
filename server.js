const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Data files
const APPOINTMENTS_FILE = path.join(__dirname, 'data', 'appointments.json');
const SERVICES_FILE = path.join(__dirname, 'data', 'services.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
    fs.mkdirSync(path.join(__dirname, 'data'));
}

// Initialize data files if they don't exist
if (!fs.existsSync(APPOINTMENTS_FILE)) {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify([]));
}

if (!fs.existsSync(SERVICES_FILE)) {
    const defaultServices = [
        { id: 1, name: "Haircut", duration: 30, price: 25, category: "cut" },
        { id: 2, name: "Haircut & Style", duration: 45, price: 35, category: "cut" },
        { id: 3, name: "Women's Cut", duration: 60, price: 45, category: "cut" },
        { id: 4, name: "Men's Cut", duration: 30, price: 20, category: "cut" },
        { id: 5, name: "Child's Cut", duration: 30, price: 15, category: "cut" },
        { id: 6, name: "Beard Trim", duration: 15, price: 10, category: "cut" },
        { id: 7, name: "Hair Color", duration: 120, price: 80, category: "color" },
        { id: 8, name: "Highlights", duration: 150, price: 120, category: "color" },
        { id: 9, name: "Balayage", duration: 180, price: 150, category: "color" },
        { id: 10, name: "Root Touch-up", duration: 60, price: 50, category: "color" },
        { id: 11, name: "Deep Conditioning", duration: 30, price: 25, category: "treatment" },
        { id: 12, name: "Hair Treatment", duration: 45, price: 40, category: "treatment" },
        { id: 13, name: "Scalp Treatment", duration: 30, price: 35, category: "treatment" },
        { id: 14, name: "Blowout", duration: 30, price: 30, category: "style" },
        { id: 15, name: "Updo", duration: 60, price: 65, category: "style" },
        { id: 16, name: "Wedding Hairstyle", duration: 90, price: 120, category: "style" }
    ];
    fs.writeFileSync(SERVICES_FILE, JSON.stringify(defaultServices));
}

// Helper functions
const readAppointments = () => {
    const data = fs.readFileSync(APPOINTMENTS_FILE);
    return JSON.parse(data);
};

const writeAppointments = (appointments) => {
    fs.writeFileSync(APPOINTMENTS_FILE, JSON.stringify(appointments, null, 2));
};

const readServices = () => {
    const data = fs.readFileSync(SERVICES_FILE);
    return JSON.parse(data);
};

// API Routes
app.get('/api/services', (req, res) => {
    try {
        const services = readServices();
        res.json(services);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read services' });
    }
});

app.get('/api/appointments', (req, res) => {
    try {
        const appointments = readAppointments();
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ error: 'Failed to read appointments' });
    }
});

app.post('/api/appointments', (req, res) => {
    try {
        const appointments = readAppointments();
        const newAppointment = {
            id: Date.now(),
            ...req.body,
            status: 'confirmed',
            createdAt: new Date().toISOString()
        };
        
        appointments.push(newAppointment);
        writeAppointments(appointments);
        
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create appointment' });
    }
});

app.put('/api/appointments/:id', (req, res) => {
    try {
        const appointments = readAppointments();
        const index = appointments.findIndex(apt => apt.id === parseInt(req.params.id));
        
        if (index === -1) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        
        appointments[index] = { ...appointments[index], ...req.body };
        writeAppointments(appointments);
        
        res.json(appointments[index]);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update appointment' });
    }
});

app.delete('/api/appointments/:id', (req, res) => {
    try {
        const appointments = readAppointments();
        const index = appointments.findIndex(apt => apt.id === parseInt(req.params.id));
        
        if (index === -1) {
            return res.status(404).json({ error: 'Appointment not found' });
        }
        
        appointments.splice(index, 1);
        writeAppointments(appointments);
        
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete appointment' });
    }
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Start server
app.listen(PORT, () => {
    console.log(`Hair Salon Appointment App running on port ${PORT}`);
    console.log(`Customer view: http://localhost:${PORT}`);
    console.log(`Admin view: http://localhost:${PORT}/admin`);
});