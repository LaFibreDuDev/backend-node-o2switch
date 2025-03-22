BEGIN;

INSERT INTO "posts"
  (id, title, content, created_at, updated_at)
VALUES
  (1, 'premier article', 'Contenu du premier article', now(), now()),
  (2, 'deuxième article', 'Contenu du deuxième article', now(), now())
;

COMMIT;