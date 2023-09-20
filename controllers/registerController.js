const registrationModel = require("../models/registerUserModel");
const ipinfo = require("ipinfo")

exports.registration = async (req, res) => {
    try {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

        ipinfo(ip, (err, cLoc) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ status: false, message: 'Error while fetching IP info' });
            }

            console.log(cLoc); 

            const countryCode = cLoc.country;
            
            console.log(countryCode);

         
            if (countryCode === 'IN') {
               

                const { fullName, email, address } = req.body;

                registrationModel.create({
                    fullName,
                    email,
                    address,
                }, (error, newUser) => {
                    if (error) {
                        console.error(error);
                        return res.status(500).json({ status: false, message: 'Error while saving user registration' });
                    }
                    return res.status(201).json({ status: true, message: 'User registered successfully', user: newUser });
                });
            } else {
                return res.status(403).json({ status: false, message: 'IP address is not from India.' });
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: false, message: err.message });
    }
};
