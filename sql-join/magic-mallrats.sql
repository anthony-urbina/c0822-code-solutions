select "c"."firstName",
       "c"."lastName"
FROM "films"
JOIN "inventory" using ("filmId")
JOIN "rentals" using ("inventoryId")
JOIN "customers" as "c" using ("customerId")
WHERE "title" = 'Magic Mallrats';
