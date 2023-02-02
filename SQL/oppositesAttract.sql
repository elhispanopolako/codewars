SELECT flower1, flower2, (flower1 + flower2) % 2 = 1 AS res 
FROM love
------------------------------------------------
SELECT flower1,flower2, CASE
    WHEN (flower1+flower2)%2=0 THEN false
    ELSE true
END 
AS res
FROM love