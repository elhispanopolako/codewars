--Show patient_id and first_name from patients where their first_name start and ends with 's' and is at least 6 characters long.
SELECT
  patient_id,
  first_name
FROM patients
WHERE first_name LIKE 's____%s';
-----or
SELECT patient_id,first_name 
FROM patients
where first_name like 'S%s' and LEN(first_name)  > 5
