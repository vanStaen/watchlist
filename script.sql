-- Added is a timestamp set per default to now()
INSERT INTO public.watchlist(
	"desc", link, status, tags, title)
	VALUES ('description', 'the link', true, ARRAY [ 'node','react'], 'The title');