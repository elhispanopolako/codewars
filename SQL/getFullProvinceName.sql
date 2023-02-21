--Show first name, last name, and the full province name of each patient. Example: 'Ontario' instead of 'ON'
 select p.first_name,p.last_name, pn.province_name
from patients p 
inner join province_names pn
on p.province_id = pn.province_id

---other
SELECT
  first_name,
  last_name,
  province_name
FROM patients
  JOIN province_names ON province_names.province_id = patients.province_id;

