--Show how many patients have a birth_date with 2010 as the birth year.
SELECT count(*) as total_patients
FROM patients
where birth_date like '2010%'