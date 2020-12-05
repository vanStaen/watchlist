-- 'added' is a timestamp set per default to now()
-- 'active' is set to true per default
INSERT INTO public.watchlist(
	"desc", link, active, tags, title)
	VALUES ('description', 'the link', true, ARRAY [ 'node','react'], 'The title');