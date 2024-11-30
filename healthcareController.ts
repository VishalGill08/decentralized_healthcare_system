import { Request, Response } from 'express';
import Appointment from '../models/appointmentModel';
import PatientRecord from '../models/patientRecordModel';

export const bookAppointment = async (req: Request, res: Response) => {
    try {
        const { patientId, doctorId, date, time } = req.body;
        const appointment = new Appointment({ patientId, doctorId, date, time });
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error booking appointment' });
    }
};

export const getPatientRecords = async (req: Request, res: Response) => {
    try {
        const { patientId } = req.params;
        const records = await PatientRecord.find({ patientId });
        res.json(records);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving patient records' });
    }
};
