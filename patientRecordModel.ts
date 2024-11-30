import mongoose, { Schema, Document } from 'mongoose';

export interface IPatientRecord extends Document {
    patientId: string;
    doctorId: string;
    diagnosis: string;
    prescription: string;
    date: string;
}

const PatientRecordSchema: Schema = new Schema({
    patientId: { type: String, required: true },
    doctorId: { type: String, required: true },
    diagnosis: { type: String, required: true },
    prescription: { type: String, required: true },
    date: { type: String, required: true },
});

export default mongoose.model<IPatientRecord>('PatientRecord', PatientRecordSchema);
