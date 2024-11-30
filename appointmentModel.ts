import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
    patientId: string;
    doctorId: string;
    date: string;
    time: string;
}

const AppointmentSchema: Schema = new Schema({
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
});

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);
