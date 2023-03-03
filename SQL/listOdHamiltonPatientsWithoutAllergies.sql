--Write a query to find list of patients first_name, last_name, and allergies from Hamilton where allergies are not null
SELECT first_name,last_name,allergies
FROM patients
where city = 'Hamilton' and allergies is not null;