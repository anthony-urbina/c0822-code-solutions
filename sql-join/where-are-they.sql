SELECT "a"."line1",
       "c"."name" as "city",
       "a"."district"
FROM "addresses" as "a"
JOIN "cities" as "c" using ("cityId")
