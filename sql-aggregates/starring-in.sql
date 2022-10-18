SELECT "g"."name" as "genre",
       COUNT("g"."name") as "timesAppeared"
FROM "actors" as "a"
JOIN "castMembers" as "c" using ("actorId")
JOIN "filmGenre" as "f" using ("filmId")
JOIN "genres" as "g" using ("genreId")
WHERE "a"."actorId" = '178'
GROUP by "g"."name";
