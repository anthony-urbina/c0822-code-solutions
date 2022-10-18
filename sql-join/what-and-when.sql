SELECT "f"."title",
       "f"."releaseYear",
       "g"."name" as "genre"
FROM "films" as "f"
JOIN "filmGenre" as "fg" using ("filmId")
JOIN "genres" as "g" using ("genreId")
WHERE "title" = 'Boogie Amelie';
