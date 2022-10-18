SELECT "a"."firstName",
       "a"."lastName"
FROM "films"
JOIN "castMembers" as "c" using ("filmId")
JOIN "actors" as "a" using ("actorId")
WHERE "title" = 'Jersey Sassy';
