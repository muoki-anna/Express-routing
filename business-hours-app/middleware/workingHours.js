// middleware/workingHours.js

const workingHoursMiddleware = (req, res, next) => {
    const now = new Date();
    const day = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const hour = now.getHours(); // 0-23
    
    // Check if it's Monday (1) to Friday (5)
    const isWeekday = day >= 1 && day <= 5;
    
    // Check if it's between 9 and 17 (9 AM to 5 PM)
    const isWorkingHours = hour >= 9 && hour < 17;
    
    if (isWeekday && isWorkingHours) {
        // Allow access during working hours
        next();
    } else {
        // Redirect to closed page outside working hours
        res.render('closed', {
            day: now.toLocaleDateString('en-US', { weekday: 'long' }),
            time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
        });
    }
};

module.exports = workingHoursMiddleware;