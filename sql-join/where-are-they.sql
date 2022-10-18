SELECT "a"."line1",
       "c"."name" as "city",
       "a"."district",
       "co"."name" as "country"
FROM "addresses" as "a"
JOIN "cities" as "c" using ("cityId")
JOIN "countries" as "co" using ("countryId");
