

const bookedSlotController = {

    createBooking: async (req, res) => {

        let bodyDate = moment(req.body.bookedDate, "YYYY-MM-DD", true);

        let todayDate = moment(moment().format("YYYY-MM-DD"), "YYYY-MM-DD", true);

        if (todayDate > bodyDate) {
            return res.status(400).json({
                success: false,
                message: `Please select a future date`
            });
        }

        let bookingExist = await BookedSlots.findOne({
            $and: [
                { slotTiming: req.body.slotTiming },
                { bookedDate: req.body.bookedDate }
            ]
        });

        if (bookingExist) {
            return res.status(400).json({
                success: false,
                message: `Slot is already Booked for (${req.body.slotTiming}) in ${req.body.bookedDate}, Please select another time slot`
            });
        }

        try {

            let data = req.body;

            let createdSlot = await BookedSlots.create(data);
            if (createdSlot) {
                return res.status(200).json({
                    success: true,
                    data: createdSlot
                });
            }

            else {
                return res.status(400).json({
                    success: false,
                    message: 'Booking failed'
                })
            }

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: 'Booking Failed',
                error: error.message
            })
        }
    },

    findAllBookings: async (req, res) => {

        try {
            const slots = await BookedSlots.find({}).populate('userId');

            // console.log('ddddd', slots);
            return res.status(200).json(
                {
                    success: true,
                    data: slots
                }
            );

        } catch (error) {

            return res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },

    findSingleBooking: async (req, res) => {

        try {
            const bookingSlots = await BookedSlots.findById(req.params.id);

            return res.status(200).json(
                {
                    success: true,
                    data: bookingSlots
                }
            );

        } catch (error) {

            return res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },

    updateBooking: async (req, res) => {

        let data = req.body.isBooked;

        try {

            let updatesSlot = await BookedSlots.updateOne({ _id: req.params.id }, { $set: { isBooked: data } });
            if (updatesSlot.modifiedCount) {
                return res.status(200).json(
                    {
                        success: true,
                        message: `Booking status changes to ${data}`
                    }
                );
            } else {
                return res.status(200).json(
                    {
                        success: true,
                        message: 'No changes was made'
                    }
                );
            }
        } catch (error) {

            return res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },

    findAllBookingsByDate: async (req, res) => {

        let date = req.query.date;

        try {
            const slots = await BookedSlots.find({ bookedDate: date }).populate('userId');

            // console.log('ddddd', slots);
            return res.status(200).json(
                {
                    success: true,
                    data: slots
                }
            );

        } catch (error) {

            return res.status(400).json(
                {
                    success: false,
                    message: error.message
                }
            );
        }
    },
}

module.exports = bookedSlotController