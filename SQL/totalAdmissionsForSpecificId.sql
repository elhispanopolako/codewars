--Show the patient id and the total number of admissions for patient_id 579.
SELECT patient_id , count(*) as  total_admission
FROM admissions 
where patient_id = 579