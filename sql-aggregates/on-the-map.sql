select  "co"."name" as "country",
        count("ci".*) as "numberOfCities"
FROM "cities" as "ci"
JOIN "countries" as "co" using ("countryId")
GROUP by "co"."name";
