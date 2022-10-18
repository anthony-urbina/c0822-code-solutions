SELECT "c"."firstName",
       "c"."lastName",
   SUM("p"."amount")
  FROM "customers" as "c"
  JOIN "payments" as "p" using ("customerId")
  GROUP by "c"."customerId"
  ORDER by SUM("p"."amount") DESC;
