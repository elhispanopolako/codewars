--Show all columns for patients who have one of the following patient_ids:
1,45,534,879,1000
SELECT *
FROM patients
WHERE patient_id IN (1, 45, 534, 879, 1000);
--------------------------------
SELECT * FROM patients
where patient_id = 1 or patient_id = 45 or patient_id = 534 or patient_id = 879 or patient_id = 1000  ;
