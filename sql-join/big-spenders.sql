SELECT "c"."firstName",
       "c"."lastName"
FROM "payments"
JOIN "customers" as "c" using ("customerId")
ORDER BY "amount" DESC
LIMIT 10;
