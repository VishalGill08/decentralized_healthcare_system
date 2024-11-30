import { Router } from 'express';
import { bookAppointment, getPatientRecords } from '../controllers/healthcareController';

const router: Router = Router();

router.post('/appointment', bookAppointment);
router.get('/records/:patientId', getPatientRecords);

export default router;
