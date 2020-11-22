SERT INTO public.watchlist(
	added, "desc", done, link, status, tags, title)
	VALUES (null, 'description', null, 'the link', true, ARRAY [ 'node','react'], ' The title');